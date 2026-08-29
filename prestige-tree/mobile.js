/* Prestige Tree — 手机端工具：倍速滑块 + 禁用双击缩放 */
(function () {
	// ------- 禁用双击/捏合缩放 -------
	(function () {
		var lastTouch = 0;
		document.addEventListener('dblclick', function (e) { e.preventDefault(); }, true);
		document.addEventListener('gesturestart', function (e) { e.preventDefault(); }, true);
		document.addEventListener('gesturechange', function (e) { e.preventDefault(); }, true);
		document.addEventListener('gestureend', function (e) { e.preventDefault(); }, true);
		document.addEventListener('touchend', function (e) {
			if (e.touches.length === 1 && (Date.now() - lastTouch) < 350) { e.preventDefault(); }
			lastTouch = Date.now();
		}, true);
		document.addEventListener('touchmove', function (e) {
			if (e.scale && e.scale !== 1) { e.preventDefault(); }
		}, true);
	})();
	// 倍速控制条
	function buildSpeedBar() {
		if (document.getElementById('pt_speedbar')) return;
		var bar = document.createElement('div');
		bar.id = 'pt_speedbar';
		bar.innerHTML =
			'<label>倍速</label>' +
			'<b id="pt_speed_val">1x</b>' +
			'<input type="range" id="pt_speed_slider" min="0" max="3" step="0.001" value="0">' +
			'<button id="pt_speed_reset">1x</button>';
		document.body.appendChild(bar);

		var slider = bar.querySelector('input');
		var val = bar.querySelector('b');

		function applySpeed() {
			var t = parseFloat(slider.value); // 0..3 对数
			var sp = Math.pow(10, t);          // 1x .. 1000x
			if (typeof player !== 'undefined') {
				player.devSpeed = sp;
			}
			val.textContent = (sp >= 100 ? Math.round(sp) : sp.toFixed(sp >= 10 ? 1 : 2)) + 'x';
		}
		slider.addEventListener('input', applySpeed);
		bar.querySelector('button').addEventListener('click', function () {
			slider.value = 0;
			applySpeed();
		});
		// 初始化：从 player.devSpeed 恢复
		if (typeof player !== 'undefined' && player.devSpeed && player.devSpeed !== 1) {
			slider.value = Math.log10(player.devSpeed);
		}
		applySpeed();
	}

	// 监听游戏加载完成（player 全局变量就绪）
	function tryInit() {
		if (typeof player !== 'undefined' && document.body) {
			buildSpeedBar();
			startLayoutManager();
			return true;
		}
		return false;
	}
	var attempts = 0;
	var timer = setInterval(function () {
		if (tryInit() || attempts++ > 200) clearInterval(timer);
	}, 100);

	// ------- 上下分屏布局管理器 -------
	function startLayoutManager() {
		var isMobile = function () {
			return window.innerWidth <= 768;
		};
		function applyLayout() {
			if (!isMobile()) return;
			var overlay = document.getElementById('treeOverlay');
			var treeTab = document.getElementById('treeTab');
			if (overlay) {
				overlay.style.position = 'fixed';
				overlay.style.top = '0';
				overlay.style.left = '0';
				overlay.style.width = '100%';
				overlay.style.height = '46vh';
				overlay.style.overflow = 'hidden';
				overlay.style.zIndex = '1000';
			}
			// 树相关(.col.left)固定上半屏
			if (treeTab) {
				treeTab.style.position = 'fixed';
				treeTab.style.top = '0';
				treeTab.style.left = '0';
				treeTab.style.width = '100%';
				treeTab.style.height = '46vh';
				treeTab.style.overflow = 'auto';
			}
			// canvas 限制在上半屏，避免分支线画到下半屏
			var cv = document.getElementById('treeCanvas');
			if (cv) {
				cv.style.position = 'fixed';
				cv.style.top = '0';
				cv.style.left = '0';
				cv.style.width = '100%';
				cv.style.height = '46vh';
				cv.style.zIndex = '-999';
			}
			// 详情容器(.col.right)：固定下半屏
			document.querySelectorAll('.col.right').forEach(function (c) {
				c.style.position = 'fixed';
				c.style.top = '46vh';
				c.style.left = '0';
				c.style.width = '100%';
				c.style.height = '54vh';
				c.style.overflowY = 'auto';
				c.style.overflowX = 'hidden';
				c.style.zIndex = '20000';
				c.style.background = getComputedStyle(document.body).backgroundColor;
			});
		}
		applyLayout();
		// 游戏每帧更新 DOM，用 MutationObserver 兜底（节流）
		var raf;
		setInterval(function () {
			if (raf) return;
			raf = true;
			requestAnimationFrame(function () { raf = false; applyLayout(); });
		}, 200);
	}
})();
