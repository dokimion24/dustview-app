import { CiFaceMeh, CiFaceSmile, CiFaceFrown } from 'react-icons/ci'
import * as S from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem.style'

export const formatGrade = (target) => {
  switch (target) {
    case '1':
      return (
        <>
          <S.Icon>
            <CiFaceSmile size="56" />
          </S.Icon>
          <div>좋음</div>
        </>
      )
    case '2':
      return (
        <>
          <S.Icon>
            <CiFaceMeh size="56" />
          </S.Icon>
          <div>보통</div>
        </>
      )
    case '3':
      return (
        <>
          <S.Icon>
            <CiFaceFrown size="56" />
          </S.Icon>
          <div>나쁨</div>
        </>
      )
    case '4':
      return (
        <>
          <S.Icon>
            <CiFaceFrown size="56" />
          </S.Icon>
          <div>매우 나쁨</div>
        </>
      )
    default:
      return <S.Icon>알 수 없음</S.Icon>
  }
}
