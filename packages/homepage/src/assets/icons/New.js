import React from 'react';
import { useTheme } from 'styled-components';

const New = props => {
  const white = useTheme().homepage.white;
  return (
    <svg width={25} height={30} fill="none" viewBox="0 0 25 30" {...props}>
      <path
        fill={white}
        d="M11.446 6.415c.17 0 .274-.104.3-.274.393-2.156.38-2.182 2.64-2.626.157-.026.274-.13.274-.314 0-.17-.117-.274-.287-.3-2.248-.431-2.195-.47-2.627-2.627-.026-.17-.13-.274-.3-.274-.17 0-.274.105-.3.274-.432 2.13-.366 2.17-2.64 2.627-.17.026-.274.13-.274.3 0 .183.104.288.287.314 2.26.444 2.235.47 2.627 2.626.026.17.13.274.3.274zm-6.337 9.147c.261 0 .47-.183.496-.444.458-3.463.562-3.476 4.169-4.155.248-.04.444-.223.444-.497a.507.507 0 00-.444-.496c-3.594-.497-3.711-.602-4.169-4.13a.48.48 0 00-.496-.457c-.275 0-.457.183-.497.47-.418 3.45-.588 3.45-4.168 4.117-.248.052-.444.235-.444.496 0 .288.196.457.51.497 3.527.561 3.684.666 4.102 4.129.04.287.222.47.497.47zM14.164 30c.379 0 .666-.274.718-.666.954-7.082 1.947-8.193 8.95-8.964.419-.052.693-.353.693-.732 0-.378-.274-.679-.692-.731-6.964-.81-7.958-1.856-8.95-8.964-.053-.392-.34-.666-.72-.666-.378 0-.653.274-.718.666-.94 7.082-1.947 8.193-8.95 8.964-.405.052-.693.353-.693.732 0 .378.288.679.693.731 6.951.928 7.918 1.856 8.95 8.964.065.392.353.666.719.666z"
      />
    </svg>
  );
};

export default New;
