import React from 'react';
import { Link } from 'react-router-dom';

export const MdxLink: React.FC<{ href: string; title: string }> = (props) => {
  const isExternal = /^https?:\/\//.test(props.href);
  if (isExternal) {
    return <a target="_blank" {...props} />;
  }
  // Drop wiki link extension.
  const dropExtension = props.href.replace(/\.mdx?/, '');
  // <Link /> breaks header anchor.
  if (dropExtension.startsWith('#')) {
    return <a {...props} />;
  }
  return <Link {...props} to={dropExtension}></Link>;
};
