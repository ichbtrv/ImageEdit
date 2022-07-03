import { ChangeEvent, useRef } from "react";

const UploadButton = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const imageUrl = String(reader.result);
      console.log(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <button onClick={() => inputFileRef.current?.click()}>Upload</button>
      <input
        ref={inputFileRef}
        type="file"
        className="invisible"
        onChange={uploadImage}
        accept="image/jpeg"
      />
    </>
  )
}

export default UploadButton