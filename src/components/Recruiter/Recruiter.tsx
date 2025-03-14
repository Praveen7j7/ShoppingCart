import netherlandsRecruiter from './pundrika-acarya.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="Praveen Jha IT Recruitment"
        src={netherlandsRecruiter}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        Work in the India
        <S.Flag />
      </h4>
      <p>

Hi! I'm Praveen Jha from IT Recruitment, and I'm looking for skilled Software Engineers like you. 
{' '}
        <a href="https://www.linkedin.com/in/praveenjha07/">
        <br />
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
