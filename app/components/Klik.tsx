"use client";

const Klik = () => {
  const handleClick = () => alert("Wellcome");
  const salam = () => alert("Salam Kenal");

  return (
    <>
      <button type="button" className="btn btn-primary shadow-lg p-3 mb-5 bg-body-primsry rounded" onClick={handleClick}>
        Klik ini
      </button>
    </>
  );
};

export default Klik;
