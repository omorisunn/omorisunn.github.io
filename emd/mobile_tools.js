/* EmD 手机版附加工具：倍速控制条 + 布局修正 */
(function () {
	// 滑块圆点样式（appearance:none 后必须有 thumb）
	var st = document.createElement('style');
	st.textContent =
		'#emd_speed_slider{-webkit-appearance:none;appearance:none;height:20px;background:linear-gradient(#39f,#39f) no-repeat center;background-size:100% 4px;border-radius:2px;cursor:pointer;}' +
		'#emd_speed_slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#39f;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.5);cursor:pointer;touch-action:none;}' +
		'#emd_speed_slider::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#39f;border:2px solid #fff;cursor:pointer;}';
	document.head.appendChild(st);

	// ------- 倍速控制条（1x ~ 1000x，对数刻度） --------
	function buildSpeedBar() {
		if (document.getElementById('emd_speedbar')) return;
		var bar = document.createElement('div');
		bar.id = 'emd_speedbar';
		bar.innerHTML =
			'<div id="emd_speed_label">倍速 <b id="emd_speed_val">1×</b></div>' +
			'<input type="range" id="emd_speed_slider" min="0" max="3" step="0.001" value="0"/>' +
			'<button id="emd_speed_reset">1×</button>';
		document.body.appendChild(bar);
		bar.style.cssText =
			'position:fixed;left:10px;bottom:52px;z-index:9999;display:flex;align-items:center;gap:6px;' +
			'background:rgba(25,0,51,0.88);border:1px solid rgba(150,120,255,0.4);border-radius:12px;padding:6px 8px;' +
			'font-family:verdana;font-size:12px;color:#cfc0ff;max-width:92%;box-shadow:0 4px 16px rgba(0,0,0,.5);';
		bar.querySelector('input').style.cssText =
			'width:120px;height:20px;touch-action:none;-webkit-appearance:none;appearance:none;' +
			'background:linear-gradient(#39f,#39f) no-repeat;background-size:100% 4px;background-position:center;' +
			'border-radius:2px;cursor:pointer;';
		bar.querySelector('button').style.cssText =
			'background:#39f;color:#fff;border:none;border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer;touch-action:manipulation;';

		var slider = bar.querySelector('input');
		var val = bar.querySelector('b');
		function applySpeed() {
			var t = parseFloat(slider.value); // 0..3 对数
			var sp = Math.pow(10, t);          // 1x .. 1000x
			window.emdSpeed = sp;
			val.textContent = (sp >= 100 ? Math.round(sp) : sp.toFixed(sp >= 10 ? 1 : 2)) + '×';
		}
		slider.addEventListener('input', applySpeed);
		bar.querySelector('button').addEventListener('click', function () {
			slider.value = 0;
			applySpeed();
		});
		applySpeed();
	}
	buildSpeedBar();

	// ------- 二级导航文字防重叠 -------
	// 给 tabtier2/3/4 强制撑满并允许文字正常排列，避免"显示设置/离线时间"类重叠
	function fixNav() {
		var navs = document.querySelectorAll('.mainNavigation, .subnavigation, .navigationtier3, .navigationtier4');
		navs.forEach(function (n) {
			n.style.display = 'flex';
			n.style.flexWrap = 'wrap';
			n.style.gap = '4px';
			n.style.padding = '2px';
		});
		var tabs = document.querySelectorAll('.tabtier2, .tabtier3, .tabtier4');
		tabs.forEach(function (t) {
			t.style.minWidth = '45%';
			t.style.flex = '1 1 45%';
			t.style.boxSizing = 'border-box';
			t.style.whiteSpace = 'nowrap';
			t.style.overflow = 'hidden';
			t.style.textOverflow = 'ellipsis';
			t.style.padding = '6px 2px';
			t.style.margin = '2px';
		});
	}
	fixNav();
	// 游戏会动态重排导航，用 MutationObserver 兜底
	new MutationObserver(function () { fixNav(); }).observe(document.body, { childList: true, subtree: true, attributes: true });
})();
