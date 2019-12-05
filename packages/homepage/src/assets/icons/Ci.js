import React from 'react';
import { useTheme } from '../../components/layout';

const CI = props => {
  const white = useTheme().homepage.white;
  return (
    <svg width={43} height={20} fill="none" viewBox="0 0 43 20" {...props}>
      <path
        fill={white}
        d="M4.049 9.971c0-.754.146-1.51.436-2.219.29-.71.722-1.374 1.304-1.957 1.157-1.158 2.64-1.74 4.114-1.742.787 0 1.57.145 2.296.434.728.289 1.4.72 1.99 1.308l4.199 4.204-4.2 4.205a5.958 5.958 0 01-1.947 1.305 5.77 5.77 0 01-2.197.436 6.132 6.132 0 01-2.275-.433 5.872 5.872 0 01-1.981-1.308 5.902 5.902 0 01-1.306-1.975 6.058 6.058 0 01-.434-2.258zM24.114 10l4.2-4.204a5.844 5.844 0 011.988-1.308 6.224 6.224 0 012.296-.434c1.475.002 2.958.584 4.115 1.742a5.875 5.875 0 011.74 4.177c0 .77-.145 1.539-.434 2.257-.289.72-.72 1.389-1.305 1.975a5.876 5.876 0 01-1.98 1.308 6.133 6.133 0 01-2.276.433 5.766 5.766 0 01-2.196-.436 5.947 5.947 0 01-1.947-1.305L24.115 10h-.001zM0 9.971c0 1.279.24 2.56.727 3.772a9.958 9.958 0 005.54 5.533c1.215.486 2.5.723 3.778.723 1.274 0 2.544-.25 3.737-.742a10.005 10.005 0 003.269-2.186l4.2-4.205 4.2 4.205c.96.961 2.075 1.695 3.268 2.187a9.796 9.796 0 003.736.742 10.19 10.19 0 003.778-.722 9.936 9.936 0 003.342-2.206 9.955 9.955 0 002.198-3.328c.487-1.21.727-2.493.727-3.772a9.928 9.928 0 00-.736-3.752 10.005 10.005 0 00-2.19-3.29C37.668 1.015 35.145 0 32.599 0c-1.28 0-2.567.234-3.787.718a9.906 9.906 0 00-3.36 2.21l-4.2 4.205-4.2-4.205a9.91 9.91 0 00-3.36-2.21A10.282 10.282 0 009.903 0C7.358-.001 4.835 1.016 2.926 2.928A9.934 9.934 0 000 9.971z"
      />
    </svg>
  );
};

export default CI;
