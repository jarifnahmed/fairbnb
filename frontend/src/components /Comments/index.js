import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  createComment,
  updateComment,
  deleteComment,
} from '../../store/comments';
import './Comments.css';
import { FaEdit, FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { BiSave } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';

function Comments() {
  const { storyId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  const stories = useSelector((state) => state.stories);
  const storiesArr = Object.values(stories);
  let story;
  if (sessionUser) {
    story = storiesArr.filter((story) => story.authorId === sessionUser.id);
  }

  const comments = useSelector((state) => state.comments);
  const commentsArr = Object.values(comments);
  const storyComments = commentsArr.filter(
    (comment) => comment.storyId === Number(storyId)
  );

  const dispatch = useDispatch();

  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);
  let newObj = {};
  for (const comment of commentsArr) {
    newObj[comment.id] = false;
  }

  const [editBody, setEditBody] = useState('');
  const [editErrors, setEditErrors] = useState([]);
  const [showEditBox, setshowEditBox] = useState(false);
  const [showCommentId, setshowCommentId] = useState(null);
  const [showEditBoxArr, setEditBoxArr] = useState(newObj);

  //handles an edited comment submission
  const handleEdit = async (e) => {
    e.preventDefault();

    const userId = sessionUser.id;

    const editedComment = {
      id: showCommentId,
      userId,
      storyId: Number(storyId),
      body: editBody,
    };

    setshowEditBox(false);
    setshowCommentId(null);

    return dispatch(updateComment(editedComment))
      .then(() => {
        setBody('');
        setEditErrors([]);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setEditErrors(data.errors);
      });
  };

  //handles new comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = sessionUser.id;

    const newComment = {
      userId,
      storyId: Number(storyId),
      body,
    };

    return dispatch(createComment(newComment))
      .then(() => setBody(''))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <h2 className='comments-title'>Reviews</h2>
      <div id='comments-div'>
        <ul id='commentUl'>
          {storyComments.map((comment) => {
            return (
              <li key={comment.id} className='comments-list'>

                {!showEditBoxArr[comment.id] && (
                  <div className='commentsDiv' id={comment.id}>
                    <p className='the-comment'>
                      <div className='commentIcon'>
                      <FaUserCircle />
                        </div>
                      {comment.User.username}: "{comment.body}"
                    </p>
                    <div className='editAndDeleteButtonRow'>
                      {sessionUser && sessionUser.id === comment.userId && (
                        <button
                          className='my-5 btn neumorphic-btn'
                          id="editButton"
                          type='submit'
                          onClick={() => {
                            setshowEditBox(true);
                            setshowCommentId(comment.id);
                            setEditBody(comment.body);
                            let newobj = { ...newObj };
                            newobj[comment.id] = true;
                            setEditBoxArr(newobj);
                          }}
                        >
                          <FaEdit />
                        </button>
                      )}
                      {sessionUser &&
                        (sessionUser.id === comment.userId ||
                          sessionUser.id === story.authorId) && (
                          <button
                            className='my-5 btn neumorphic-btn'
                            id="deleteButton"
                            type='submit'
                            onClick={() => dispatch(deleteComment(comment.id))}
                          >
                            <FaTrashAlt />
                          </button>
                        )}
                      </div>
                  </div>
                )}

                {sessionUser && showEditBox && showCommentId === comment.id && (
                  <div>
                    <form id='comments-form' onSubmit={handleEdit}>
                      <ul className='ws-errors'>
                        {editErrors.map((error, idx) => (
                          <li key={idx}>{error}</li>
                        ))}
                      </ul>
                      <label>
                        <textarea
                          className='ic-field'
                          rows='5'
                          cols='60'
                          value={editBody}
                          onChange={(e) => setEditBody(e.target.value)}
                          required
                        />
                      </label>
                      <div className='saveAndCancelButtn'>
                        <button
                          className='my-5 btn neumorphic-btn'
                          id="saveButton"
                          // className='sc-button'
                          type='submit'
                          onClick={() => {
                            let newobj = { ...newObj };
                            newobj[comment.id] = false;
                            setEditBoxArr(newobj);
                          }}
                        >
                          <BiSave />
                        </button>
                        <button
                          className='my-5 btn neumorphic-btn'
                          id="cancelButton"
                          onClick={() => {
                            setshowEditBox(false);
                            setshowCommentId(null);
                            let newobj = { ...newObj };
                            newobj[comment.id] = false;
                            setEditBoxArr(newobj);
                          }}
                        >
                          <GiCancel />
                        </button>
                        </div>
                    </form>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {sessionUser && story.authorId !== sessionUser.id && (

        <div>
          <form id='comments-form-send' onSubmit={handleSubmit}>
            <ul className='ws-errors'>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              <textarea
                className='ic-field'
                rows='1'
                cols='60'
                value={body}
                placeholder='Share your thoughts.'
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </label>
            <button type='submit' className='my-5 btn neumorphic-btn'
            id="sendButton">
            <MdSend />
            </button>
          </form>
        </div>
      )}

    </>
  );
}

export default Comments;
