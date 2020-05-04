import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 4rem;
  z-index: 1;
  h3 {
    text-transform: uppercase;
    color: #247ba0;
  }

  a {
    /* color: #0366d6; */
    color: #333333;
  }
`;
const IconContainer = styled.div`
  padding-top: 4rem;
  a {
    margin: 0.4em 0.8em;
  }
  svg {
    height: 40px;
    width: 40px;
  }
  @media (max-width: 600px) {
    svg {
      height: 25px;
      width: 25px;
    }
  }
`;

/*
 * Title: Icons
 * Author: Dave Gandy in FontAwesome
 * Licence: SIL Open Font License (OFL)
 *  Source: https://www.iconfinder.com/iconsets/font-awesome
 */
const Social = () => (
  <Wrapper>
    <h3>CONTACT ME</h3>
    <a
      href='mailto:hey@khawarjatoi.com'
      aria-label='mail'
      rel='noreferrer'
      className='social_Email'
    >
      hey@khawarjatoi.com
    </a>
    <IconContainer>
      <a
        href='https://github.com/khawarjatoi'
        target='_blank'
        aria-label='Github'
        rel='noreferrer'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792'>
          <path d='M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' />
        </svg>
      </a>
      <a
        href=''
        target='_blank'
        aria-label='LinkedIn'
        rel='noreferrer'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792'>
          <path d='M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' />
        </svg>
      </a>
      <a
        href='https://twitter.com/khawar_jatoi'
        target='_blank'
        aria-label='Twitter'
        rel='noreferrer'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792'>
          <path d='M1408 610q-56 25-121 34 68-40 93-117-65 38-134 51-61-66-153-66-87 0-148.5 61.5t-61.5 148.5q0 29 5 48-129-7-242-65t-192-155q-29 50-29 106 0 114 91 175-47-1-100-26v2q0 75 50 133.5t123 72.5q-29 8-51 8-13 0-39-4 21 63 74.5 104t121.5 42q-116 90-261 90-26 0-50-3 148 94 322 94 112 0 210-35.5t168-95 120.5-137 75-162 24.5-168.5q0-18-1-27 63-45 105-109zm256-194v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' />
        </svg>
      </a>
      <a
        href='https://dev.to/khawar_jatoi'
        target='_blank'
        aria-label='Dev'
        rel='noreferrer'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M149.339,207.013c-3.984-2.978-7.979-4.467-11.964-4.467h-17.907v107.268h17.918c3.984,0,7.979-1.489,11.963-4.465    c3.982-2.978,5.977-7.444,5.977-13.409v-71.518C155.313,214.467,153.313,209.989,149.339,207.013z M440.925,26.001H71.076    c-24.847,0-45.014,20.115-45.074,44.974v370.05c0.061,24.86,20.228,44.975,45.074,44.975h369.849    c24.856,0,45.013-20.114,45.073-44.975V70.975C485.938,46.116,465.771,26.001,440.925,26.001z M184.332,292.131    c0,19.314-11.922,48.579-49.655,48.518H87.032V170.757h48.648c36.39,0,48.63,29.222,48.64,48.546L184.332,292.131L184.332,292.131    z M287.707,201.099h-54.706v39.448h33.44v30.361h-33.44v39.438h54.718v30.363h-63.847c-11.458,0.296-20.987-8.759-21.274-20.218    V192.031c-0.278-11.448,8.789-20.956,20.237-21.242h64.884L287.707,201.099L287.707,201.099z M394.122,319.477    c-13.554,31.574-37.836,25.289-48.711,0l-39.561-148.679h33.442l30.506,116.767l30.363-116.767h33.45L394.122,319.477    L394.122,319.477z' />
        </svg>
      </a>
    </IconContainer>
  </Wrapper>
);

export default Social;
