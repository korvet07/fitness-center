const VIDEO_OPTIONS = {
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  src: 'https://www.youtube-nocookie.com/embed/9TZXsZItgdw?enablejsapi=1&autoplay=1',
  frameborder: '0',
  width: '364px',
  height: '228px',
  type: 'text/html',
};
const videoElement = document.querySelector('.video');

const createIframe = () => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', VIDEO_OPTIONS.allow);
  iframe.setAttribute('src', VIDEO_OPTIONS.src);
  iframe.setAttribute('frameborder', VIDEO_OPTIONS.frameborder);
  iframe.setAttribute('width', VIDEO_OPTIONS.width);
  iframe.setAttribute('height', VIDEO_OPTIONS.height);
  iframe.setAttribute('type', VIDEO_OPTIONS.type);
  iframe.classList.add('video__image');
  return iframe;

};

const initVideo = () => {
  videoElement.addEventListener('click', () => {
    let iframe = createIframe();

    videoElement.innerHTML = '';
    videoElement.append(iframe);
  });

};

export {initVideo, videoElement};
