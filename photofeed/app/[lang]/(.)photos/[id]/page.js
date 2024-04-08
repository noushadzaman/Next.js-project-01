import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

export default function page({ params: { id, lang } }) {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
}
