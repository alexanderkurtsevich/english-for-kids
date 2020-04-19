import '../style/header.css';

export default function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  return header;
}
