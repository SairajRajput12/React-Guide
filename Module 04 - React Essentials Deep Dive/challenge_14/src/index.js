export default function Input({ richText, ...props }) {
    if (richText) {
      return <textarea {...props} />;
    }
   
    return <input {...props} />;
  }