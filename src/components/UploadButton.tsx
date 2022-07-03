import { ChangeEvent, useRef } from 'react';
import useStore from '~/hooks/useStore';

const styles = {
  buttonStyles: 'hover:bg-black hover:text-white rounded-md',
};

const UploadButton = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { imageStore } = useStore();

  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const imageUrl = String(reader.result);
      await imageStore.load(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <button className={styles.buttonStyles} onClick={() => inputFileRef.current?.click()}>
        Upload
      </button>
      <input
        ref={inputFileRef}
        type='file'
        className='invisible'
        onChange={uploadImage}
        accept='image/jpeg'
      />
    </>
  );
};

export default UploadButton;
