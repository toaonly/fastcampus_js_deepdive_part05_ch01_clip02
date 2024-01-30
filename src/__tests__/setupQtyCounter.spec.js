import setupQtyCounter from '../setupQtyCounter'

describe('setupQtyCounter 테스트', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="app"></div>`

    setupQtyCounter()
  })

  it('-, + 버튼을 눌러서 정상적으로 수량이 변경된다', () => {
    // 이 부분에 테스트 코드 작성
  })
})
