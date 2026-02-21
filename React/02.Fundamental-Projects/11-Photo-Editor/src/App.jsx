import { useState } from "react";
import { ReactPhotoEditor } from "react-photo-editor";
import { Upload } from "lucide-react";
import "animate.css";

const App = () => {
  const [file, setFile] = useState();
  const [open, setOpen] = useState(false);

  const handleChooseFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = () => {
      const getFile = input.files[0];
      setFile(getFile);
      setOpen(true);
    };
  };

  console.log(file);
  const handleClose = () => {
    setFile(null);
    setOpen(false);
  };

  const handleSaveImg = (editedImage) => {
    const url = URL.createObjectURL(editedImage);
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.download = "sample.png";
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="animate__animate animate__fadeIn h-screen flex items-center justify-center bg-sky-950">
      <div
        onClick={handleChooseFile}
        className="cursor-pointer active:scale-80 bg-white shadow-lg w-lg  p-8 rounded-xl hover:scale-120 duration-300 flex items-center justify-center flex-col"
      >
        <Upload className="w-16 h-16" />
        <h1 className="font-bold">Choose an image</h1>
      </div>
      <div className="object-fill">
        <ReactPhotoEditor
          open={open}
          file={file}
          onClose={handleClose}
          onSaveImage={handleSaveImg}
        />
      </div>
    </div>
  );
};

export default App;
