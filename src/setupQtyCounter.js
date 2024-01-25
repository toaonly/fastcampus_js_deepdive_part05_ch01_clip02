export default function setupQtyCounter() {
  const app = document.querySelector('#app')

  app.innerHTML = `
  <div class="flex flex-col gap-4 mx-auto my-8 p-4 w-fit h-fit rounded-lg shadow-slate-500/50 shadow-md">
    <h3 class="text-center text-xl font-semibold">싱싱한 토마토 1kg</h3>
    <div class="w-80 h-80 rounded-md bg-no-repeat bg-center bg-cover bg-[url(/img.jpg)]"></div>
    <div class="flex justify-between items-center">
      <div>4,500원</div>

      <div class="flex justify-center items-center gap-4">
        <div>
          <button
            id="btn-decrease"
            type="button"
            data-value="-1"
            class="flex items-center justify-center w-8 h-8 p-2 rounded-sm bg-red-400 hover:bg-red-500 text-white text-lg">-</button>
        </div>
        <div>
          <span id="qty">0</span>
        </div>
        <div>
          <button
            id="btn-increase"
            type="button"
            data-value="1"
            class="flex items-center justify-center w-8 h-8 p-2 rounded-sm bg-sky-400 hover:bg-sky-500 text-white text-lg">+</button>
        </div>
      </div>
    </div>
  </div>
`

  const qty = document.querySelector('#qty') // 수량을 표시할 태그
  const btns = [document.querySelector('#btn-decrease'), document.querySelector('#btn-increase')] // 감소, 증가 버튼
  let qtyValue = 0 // 수량

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const value = Number(btn.dataset.value)

      qtyValue = Math.max(qtyValue + value, 0)

      qty.textContent = `${qtyValue}`
    })
  })
}
