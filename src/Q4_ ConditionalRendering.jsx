/*
問題：在React中，如何根據條件渲染兩種不同的內容？
範例：
function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染
} 
*/
function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>
      <h1>4. 條件渲染</h1>
      {isLoggedIn ? (
        <div>
          <p>歡迎登入</p>
          <button>登出</button>
        </div>
      ) : (
        <div>
          <p>請登入</p>
          <button>登入</button>
        </div>
      )}
    </div>
  );
}
export default ConditionalRendering;
