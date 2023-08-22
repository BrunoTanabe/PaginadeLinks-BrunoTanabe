// Função para alternar entre os modos de tema
function toggleMode()
{
  // Obtém o elemento raiz do documento (html)
  const html = document.documentElement;
  
  // Alterna a classe 'light' no elemento raiz para alternar o tema
  html.classList.toggle("light");

  // Obtém a imagem do perfil
  const img = document.querySelector("#profile img");

  // Verifica se a classe 'light' está presente no elemento raiz
  if (html.classList.contains("light"))
  {
    // Altera o atributo 'src' da imagem para a versão clara
    img.setAttribute("src", "./assets/lighttheme-photo.png");
  }
  else
  {
    // Se não, altera o atributo 'src' da imagem para a versão escura
    img.setAttribute("src", "./assets/darktheme-photo.png");
  }
}
