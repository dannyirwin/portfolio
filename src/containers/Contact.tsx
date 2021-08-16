import React from 'react';
import { PropertyAssignment } from 'typescript';

interface props {
  innerRef: any;
}

export default function Contact({ innerRef }: props) {
  return <section ref={innerRef}>Contact</section>;
}
