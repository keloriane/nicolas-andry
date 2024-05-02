import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
interface LightboxComponentProps {
    index: number;
    open: boolean;
    setOpen: (open: boolean) => void;
    formattedImages: {
      props: any; // You might want to replace `any` with a specific type
      index: number;
      src: string;
      alt: string;
    }[];
  }
  
  const LightboxComponent: React.FC<LightboxComponentProps> = ({ index, open, setOpen, formattedImages }) => (
    <Lightbox
      index={index}
      open={open}
      close={() => setOpen(false)}
      styles={{
        container: { backgroundColor: 'rgb(1, 22, 26)' },
        thumbnailsContainer: { backgroundColor: 'rgb(1, 22, 26)' },
        thumbnail: { background: 'rgb(1, 22, 26)' },
      }}
      animation={{ fade: 250, swipe: 0 }}
      render={{
        iconClose: () => <button className="yarl__button">fermer</button>,
      }}
      slides={formattedImages}
      plugins={[Thumbnails]}
    />
  );
  export default LightboxComponent