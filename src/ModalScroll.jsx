// import { useEffect } from "react";


// export default function ModalScroll() {
//   useEffect(() => {
//     document.body.style.cssText = `
//       position: fixed;
//       top: -${window.scrollY}px;
//       overflow-y: scroll;
//       width: 100%;`;
//     return () => {
//       const scrollY = document.body.style.top;
//       document.body.style.cssText = "";
//       window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
//     };
//   }, []);
// }

export default function modalScroll({ setmodalScroll }) {

  // 모달 끄기
  const closeModal = () => {
    setmodalScroll(false);
  };


  const openModal = () => {
    setmodalScroll(true);
  };

    return <>

    </>;
}
