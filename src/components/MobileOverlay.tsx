/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Dispatch, SetStateAction } from 'react';

const styles = {
  overlayStyle: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00703a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 16px;
    z-index: 10;
    box-sizing: border-box;
    color: white;
  `,
  titleContainerStyle: css`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
  `,

  titleStyle: css`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  `,

  textStyle: css`
    display: flex;
    font-size: 1rem;
  `,

  buttonStyle: css`
    width: 100%;
    padding: 16px;
    background-color: #fff;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid white;
  `,
  noMargin: css`
    margin: 0;
  `,
};

type Props = {
  onClickHandler: Dispatch<SetStateAction<boolean>>;
};

export const MobileOverlay = ({ onClickHandler }: Props) => {
  return (
    <div css={styles.overlayStyle}>
      <div css={styles.titleContainerStyle}>
        <h1 css={styles.titleStyle}>Munchies</h1>
      </div>
      <div>
        <h1 css={styles.noMargin}>Treat yourself.</h1>
        <p css={styles.textStyle}>Find the best restaurants in your city and get it delivered to your place!</p>
      </div>

      <button onClick={() => onClickHandler(false)} css={styles.buttonStyle}>
        Continue
      </button>
    </div>
  );
};
