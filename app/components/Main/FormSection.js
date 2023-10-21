import Form from "./Form";

export default function FormSection() {
  return (
    <div className="min-h-[80vh] p-2 flex">
      <span className="formBackground w-full text-white grid place-content-center p-2 md:grid-cols-2 md:p-4">
        <Form />
      </span>
    </div>
  );
}
