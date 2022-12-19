import React, { useCallback, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import styles from './styles.module.scss';
import { ImageUpload, UIButton, UIGrid, UIImageUploader, UIInput } from '../../components';
import { useAppDispatch } from '../../redux/store';
import { setLoading } from '../../redux/slices/settings/slice';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
import { fetchAddPost } from '../../redux/slices/posts/asyncPosts';

export const AddPostForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [postText, setPostText] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postTags, setPostTags] = useState<string[]>([]);
  const [file, setFile] = useState<ImageUpload>({
    file: null,
    imagePreviewUrl: '',
    fileLoaded: false,
  });
  const navigate = useNavigate();

  const setPImage = async (imageFile: ImageUpload) => {
    setFile(imageFile);
    dispatch(setLoading('loading'));
    try {
      const { data } = await axios.post(`/upload`, imageFile.file);
      setPostImage(data.url);
      dispatch(setLoading('success'));
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeEditor = useCallback((value: string) => {
    setPostText(value);
  }, []);
  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Enter Text...',
      status: false,
    }),
    [],
  );

  const cancelEdit = () => {
    setPostText('');
    setPostTitle('');
    setPostTags(['']);
    setFile({
      file: null,
      imagePreviewUrl: '',
      fileLoaded: false,
    });
    navigate('/');
  };

  const publishPost = () => {
    const fields = {
      title: postTitle,
      text: postText,
      tags: postTags,
      imageUrl: postImage,
    };
    dispatch(fetchAddPost(fields));
    navigate('/');
  };

  return (
    <div className={styles.addPostWrapper}>
      <UIImageUploader onChange={setPImage} label="upload post image" id="post image" file={file} />
      <UIInput
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        label="Post Title"
        id="postTitle"
      />
      <UIInput
        type="text"
        value={postTags.join(', ')}
        onChange={(e) => setPostTags(e.target.value.split(', '))}
        label="Post Tags"
        id="postTags"
      />
      <SimpleMDE
        className={styles.editor}
        value={postText}
        onChange={onChangeEditor}
        options={options}
      />
      <UIGrid columns={6} gridGap={2}>
        <UIButton color="blue" onClick={publishPost}>
          Publish
        </UIButton>
        <UIButton color="bordo" onClick={cancelEdit}>
          Cancel
        </UIButton>
      </UIGrid>
    </div>
  );
};
