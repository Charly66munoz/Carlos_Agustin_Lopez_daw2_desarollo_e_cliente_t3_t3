import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ConfirmActionAlert = ({ total , clearCart }) => {

  const navigate = useNavigate();

  const showAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "¿Desea realizar la compra?",
      text: `Total: ${total}€`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No, volver",
      reverseButtons: true
    }).then((result) => {

      if (result.isConfirmed) {
        Swal.fire({
          title: "Compra realizada",
          text: "En breve recibirá confirmación",
          icon: "success"
        }).then(() => {
            clearCart(); 
            navigate("/products");
        });
      }

      if (result.dismiss === Swal.DismissReason.cancel) {
        navigate("/cart");
      }

    });
  };

  return (
    <button className="btn btn-primary me-3 m-2" onClick={showAlert}>
      Comprar
    </button>
  );
};
export default ConfirmActionAlert;