import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PhotoAlbum, { Photo } from 'react-photo-album';

export default function ImageGallery({ images }: { images: Photo[] }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={images}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox open={open} close={() => setOpen(false)} slides={images} />
    </>
  );
}
