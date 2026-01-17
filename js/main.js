// ========================================
// DOM Content Loaded
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initHamburgerMenu();
  initScrollHeader();
  initFormValidation();
  initScrollAnimations();
});

// ========================================
// スムーススクロール
// ========================================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      // モバイルメニューが開いていたら閉じる
      const nav = document.getElementById('nav');
      const hamburger = document.getElementById('hamburger');
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
      }

      // スムーススクロール
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ========================================
// ハンバーガーメニュー
// ========================================
function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // メニュー外クリックで閉じる
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    }
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}

// ========================================
// スクロール時のヘッダー変更
// ========================================
function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // スクロール量が50px以上でヘッダーにクラス追加
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// ========================================
// フォームバリデーション
// ========================================
function initFormValidation() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;
    let errorMessage = '';

    // 名前のバリデーション
    if (name && name.value.trim() === '') {
      isValid = false;
      errorMessage += 'お名前を入力してください。\n';
    }

    // メールアドレスのバリデーション
    if (email) {
      const emailValue = email.value.trim();
      if (emailValue === '') {
        isValid = false;
        errorMessage += 'メールアドレスを入力してください。\n';
      } else if (!isValidEmail(emailValue)) {
        isValid = false;
        errorMessage += 'メールアドレスの形式が正しくありません。\n';
      }
    }

    // メッセージのバリデーション
    if (message && message.value.trim() === '') {
      isValid = false;
      errorMessage += 'お問い合わせ内容を入力してください。\n';
    }

    // バリデーションエラーがある場合
    if (!isValid) {
      e.preventDefault();
      alert(errorMessage);
      return false;
    }

    // 送信前の確認（任意）
    // const confirmSubmit = confirm('この内容で送信してよろしいですか?');
    // if (!confirmSubmit) {
    //   e.preventDefault();
    //   return false;
    // }
  });

  // リアルタイムバリデーション（任意）
  const emailInput = document.getElementById('email');
  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      if (this.value.trim() !== '' && !isValidEmail(this.value)) {
        this.style.borderColor = 'var(--accent-color)';
      } else {
        this.style.borderColor = 'var(--border-color)';
      }
    });

    emailInput.addEventListener('focus', function() {
      this.style.borderColor = 'var(--secondary-color)';
    });
  }
}

// メールアドレス形式チェック
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ========================================
// スクロールアニメーション (Intersection Observer)
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // アニメーション対象要素
  const animateElements = document.querySelectorAll(
    '.service-card, .portfolio-item, .about-content, .contact-content'
  );

  animateElements.forEach(element => {
    observer.observe(element);
  });
}

// ========================================
// ページトップへ戻るボタン（任意機能 - 現在は未実装）
// ========================================
// function initScrollToTop() {
//   const scrollBtn = document.createElement('button');
//   scrollBtn.innerHTML = '↑';
//   scrollBtn.className = 'scroll-to-top';
//   scrollBtn.setAttribute('aria-label', 'ページトップへ戻る');
//   document.body.appendChild(scrollBtn);
//
//   window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 300) {
//       scrollBtn.classList.add('visible');
//     } else {
//       scrollBtn.classList.remove('visible');
//     }
//   });
//
//   scrollBtn.addEventListener('click', () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
// }

// ========================================
// パフォーマンス最適化: 画像遅延読み込み（任意）
// ========================================
// function initLazyLoading() {
//   const images = document.querySelectorAll('img[data-src]');
//
//   const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src;
//         img.removeAttribute('data-src');
//         observer.unobserve(img);
//       }
//     });
//   });
//
//   images.forEach(img => imageObserver.observe(img));
// }

// ========================================
// ユーティリティ: デバウンス関数
// ========================================
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// ========================================
// ユーティリティ: スロットル関数
// ========================================
function throttle(func, delay = 250) {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}
