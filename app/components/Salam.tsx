"use client";

const Salam = () => {
  const salam = () => alert("Salam Kenal !!!");

  return (
    <>
      <button type="button" className="btn btn-primary shadow-lg p-3 mb-5 bg-body-primsry rounded" onClick={salam}>
        Salam Kenal
      </button>
    </>
  );
};

export default Salam;
