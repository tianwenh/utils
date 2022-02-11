import React, { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export const MdxLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  const href = props.href ?? '';
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return <a target="_blank" {...props} />;
  }
  // Drop wiki link extension.
  const dropExtension = href.replace(/\.mdx?/, '');
  // <Link /> breaks header anchor.
  if (dropExtension.startsWith('#')) {
    return <a {...props} />;
  }
  return <Link {...props} to={`/${dropExtension}`}></Link>;
};
