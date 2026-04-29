document.getElementById('loginBtn').addEventListener('click', () => {
  const passwordValue = document.getElementById('password').value

  if (passwordValue === 'mlemY0sh1') {
    window.location.href = 'desktop.html'
  } else {
    alert('incorrect password')
  }
})
