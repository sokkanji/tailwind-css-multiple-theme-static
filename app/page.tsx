import CheckList from './components/CheckLIst';
import Wrapper from './components/Wrapper';

export default function MainPage() {
  const textList = [
    <>
      <code className="text-sm font-bold text-gray-900">global.css</code>에 스타일 변수 선언하기
    </>,
    <>
      <code className="text-sm font-bold text-gray-900">tailwind.config.ts</code>에 스타일 변수
      선언하기
    </>,
    <>스타일 변수로 컴포넌트에 스타일 작성하기</>,
  ];

  return (
    <Wrapper>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-8 py-4 text-base leading-7 text-gray-600">
          <h2 className="text-3xl text-primary">커스텀 테마 3가지 이상 구현하기</h2>
          <CheckList data={textList} />
        </div>
      </div>
    </Wrapper>
  );
}
