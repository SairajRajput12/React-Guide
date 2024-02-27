import React from 'react';

export default function Input({ richText, ...props }) {
  // return an <input> if richText prop is falsy
  // return a <textarea> otherwise
  // forward / set the received props on the returned elements
  return (
    <>
      {richText ? (
        <textarea {...props} placeholder="Your message" />
      ) : (
        <input {...props} type="text" placeholder="Your name" />
      )}
    </>
  );
}
