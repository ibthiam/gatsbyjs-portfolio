import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #1A1D23;
    --navy: #1A1C23;
    --light-navy: #2B2B3B;
    --lightest-navy: #343846;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #8892b0;
    --slate: #BCC3DC;
    --light-slate: #ccd6f6;
    --lightest-slate: #F5F9FF;
    --white: #F2F3F8;
    --green: #57cbff;
    --green-tint: rgba(87, 203, 255, 0.1);
    --pink: #EA3F8B;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 10px;
    --fz-xs: 11px;
    --fz-sm: 12px;
    --fz-md: 14px;
    --fz-lg: 16px;
    --fz-xl: 18px;
    --fz-xxl: 20px;
    --fz-heading: 30px;

    --border-radius: 4px;
    --nav-height: 80px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
