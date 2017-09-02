!function (t) {
	if ("object" == typeof exports && "undefined" != typeof module)
		module.exports = t();
	else if ("function" == typeof define && define.amd)
		define([], t);
	else {
		var e;
		e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
		e.osrm = t()
	}
}
(function () {
	var t;
	return function t(e, n, i) {
		function a(r, s) {
			if (!n[r]) {
				if (!e[r]) {
					var l = "function" == typeof require && require;
					if (!s && l)
						return l(r, !0);
					if (o)
						return o(r, !0);
					var d = new Error("Cannot find module '" + r + "'");
					throw d.code = "MODULE_NOT_FOUND",
					d
				}
				var u = n[r] = {
					exports: {}
				};
				e[r][0].call(u.exports, function (t) {
					var n = e[r][1][t];
					return a(n || t)
				}, u, u.exports, t, e, n, i)
			}
			return n[r].exports
		}
		for (var o = "function" == typeof require && require, r = 0; r < i.length; r++)
			a(i[r]);
		return a
	}
	({
		1: [function (t, e, n) {
				e.exports = {
					name: "Deutsch",
					key: "de",
					"Open in Debug Map": "In Debug Map öffnen",
					"Open in Mapillary": "In Mapillary öffnen",
					"Open in editor": "Im Editor öffnen",
					"Open in JOSM": "In JOSM öffnen",
					"Select language": "Sprache auswählen",
					"Start - press enter to drop marker": "Start - drücken um einen Marker zu plazieren",
					"End - press enter to drop marker": "Ende - drücken um einen Marker zu plazieren",
					"Via point - press enter to drop marker": "Zwischenstop - drücken um einen Marker zu plazieren"
				}
			}, {}
		],
		2: [function (t, e, n) {
				e.exports = {
					name: "English",
					key: "en",
					"Open in Debug Map": "Open in Debug Map",
					"Open in Mapillary": "Open in Mapillary",
					"Open in editor": "Open in editor",
					"Open in JOSM": "Open in JOSM",
					"Select language": "Select language",
					"Start - press enter to drop marker": "Start - press enter to drop marker",
					"End - press enter to drop marker": "End - press enter to drop marker",
					"Via point - press enter to drop marker": "Via point - press enter to drop marker"
				}
			}, {}
		],
		3: [function (t, e, n) {
				e.exports = {
					name: "Español",
					key: "es",
					"Open in Debug Map": "Abrir en mapa depuración",
					"Open in Mapillary": "Abrir en Mapillary",
					"Open in editor": "Abrir en editor",
					"Open in JOSM": "Abrir en JOSM",
					"Select language": "Seleccionar idioma",
					"Start - press enter to drop marker": "Incio - presione enter para colocar el marcador",
					"End - press enter to drop marker": "Fin - presione enter para colocar el marcador",
					"Via point - press enter to drop marker": "Punto en la vía - presione enter para colocar un marcador"
				}
			}, {}
		],
		4: [function (t, e, n) {
				e.exports = {
					name: "Français",
					key: "fr",
					"Open in editor": "Ouvrir dans l'éditeur",
					"Open in JOSM": "Ouvrir dans JOSM",
					"Open in Debug Map": "Ouvrir dans Debug Map",
					"Open in Mapillary": "Ouvrir dans Mapillary",
					"Select language": "Choisir la langue",
					"Start - press enter to drop marker": "Point de départ",
					"End - press enter to drop marker": "Étape intermédiaire",
					"Via point - press enter to drop marker": "Point d'arrivée"
				}
			}, {}
		],
		5: [function (t, e, n) {
				e.exports = {
					name: "Русский",
					key: "ru",
					"Open in Debug Map": "Открыть в отладочной карте",
					"Open in Mapillary": "Открыть в Mapillary",
					"Open in editor": "Открыть в редакторе",
					"Open in JOSM": "Открыть в редакторе JOSM",
					"Select language": "Выбрать язык",
					"Start - press enter to drop marker": "Начало - нажмите Enter, чтобы удалить маркер",
					"End - press enter to drop marker": "Конец - нажмите Enter, чтобы удалить маркер",
					"Via point - press enter to drop marker": "Промежуточная точка - нажмите Enter, чтобы удалить маркер"
				}
			}, {}
		],
		6: [function (t, e, n) {
				e.exports = {
					name: "Svenska",
					key: "sv",
					"Open in Debug Map": "Öppna i Debug Map",
					"Open in Mapillary": "Öppna i Mapillary",
					"Open in editor": "Öppna i redigerare",
					"Open in JOSM": "Öppna i JOSM",
					"Select language": "Välj språk",
					"Start - press enter to drop marker": "Start - tryck för att placera startpunkt",
					"End - press enter to drop marker": "Mål - tryck för att placera slutpunkt",
					"Via point - press enter to drop marker": "Via - tryck för att placera delmålspunkt"
				}
			}, {}
		],
		7: [function (t, e, n) {
				e.exports = {
					name: "Tiếng Việt",
					key: "vi",
					"Open in Debug Map": "Mở trong Bản đồ Gỡ lỗi",
					"Open in Mapillary": "Mở trong Mapillary",
					"Open in editor": "Mở trong chương trình vẽ",
					"Open in JOSM": "Mở trong JOSM",
					"Select language": "Chọn ngôn ngữ",
					"Start - press enter to drop marker": "Khởi hành – bấm Enter để thả ghim",
					"End - press enter to drop marker": "Đến – bấm Enter để thả ghim",
					"Via point - press enter to drop marker": "Qua – bấm Enter để thả ghim"
				}
			}, {}
		],
		8: [function (t, e, n) {
				e.exports = {
					name: "Chinese",
					key: "zh-Hans",
					"Open in Debug Map": "Open in Debug Map",
					"Open in Mapillary": "Open in Mapillary",
					"Open in editor": "Open in editor",
					"Open in JOSM": "Open in JOSM",
					"Select language": "Select language",
					"Start - press enter to drop marker": "Start - press enter to drop marker",
					"End - press enter to drop marker": "End - press enter to drop marker",
					"Via point - press enter to drop marker": "Via point - press enter to drop marker"
				}
			}, {}
		],
		9: [function (t, e, n) {
				function i() {
					throw new Error("setTimeout has not been defined")
				}
				function a() {
					throw new Error("clearTimeout has not been defined")
				}
				function o(t) {
					if (h === setTimeout)
						return setTimeout(t, 0);
					if ((h === i || !h) && setTimeout)
						return h = setTimeout, setTimeout(t, 0);
					try {
						return h(t, 0)
					} catch (e) {
						try {
							return h.call(null, t, 0)
						} catch (e) {
							return h.call(this, t, 0)
						}
					}
				}
				function r(t) {
					if (c === clearTimeout)
						return clearTimeout(t);
					if ((c === a || !c) && clearTimeout)
						return c = clearTimeout, clearTimeout(t);
					try {
						return c(t)
					} catch (e) {
						try {
							return c.call(null, t)
						} catch (e) {
							return c.call(this, t)
						}
					}
				}
				function s() {
					g && f && (g = !1, f.length ? p = f.concat(p) : _ = -1, p.length && l())
				}
				function l() {
					if (!g) {
						var t = o(s);
						g = !0;
						for (var e = p.length; e; ) {
							for (f = p, p = []; ++_ < e; )
								f && f[_].run();
							_ = -1,
							e = p.length
						}
						f = null,
						g = !1,
						r(t)
					}
				}
				function d(t, e) {
					this.fun = t,
					this.array = e
				}
				function u() {}
				var h,
				c,
				m = e.exports = {};
				!function () {
					try {
						h = "function" == typeof setTimeout ? setTimeout : i
					} catch (t) {
						h = i
					}
					try {
						c = "function" == typeof clearTimeout ? clearTimeout : a
					} catch (t) {
						c = a
					}
				}
				();
				var f,
				p = [],
				g = !1,
				_ = -1;
				m.nextTick = function (t) {
					var e = new Array(arguments.length - 1);
					if (arguments.length > 1)
						for (var n = 1; n < arguments.length; n++)
							e[n - 1] = arguments[n];
					p.push(new d(t, e)),
					1 !== p.length || g || o(l)
				},
				d.prototype.run = function () {
					this.fun.apply(null, this.array)
				},
				m.title = "browser",
				m.browser = !0,
				m.env = {},
				m.argv = [],
				m.version = "",
				m.versions = {},
				m.on = u,
				m.addListener = u,
				m.once = u,
				m.off = u,
				m.removeListener = u,
				m.removeAllListeners = u,
				m.emit = u,
				m.prependListener = u,
				m.prependOnceListener = u,
				m.listeners = function (t) {
					return []
				},
				m.binding = function (t) {
					throw new Error("process.binding is not supported")
				},
				m.cwd = function () {
					return "/"
				},
				m.chdir = function (t) {
					throw new Error("process.chdir is not supported")
				},
				m.umask = function () {
					return 0
				}
			}, {}
		],
		10: [function (t, e, n) {
				function i() {}
				function a(t, e, n) {
					function a() {
						l.parentNode && l.parentNode.removeChild(l),
						window[h] = i,
						d && clearTimeout(d)
					}
					function s() {
						window[h] && a()
					}
					"function" == typeof e && (n = e, e = {}),
					e || (e = {});
					var l,
					d,
					u = e.prefix || "__jp",
					h = e.name || u + r++,
					c = e.param || "callback",
					m = null != e.timeout ? e.timeout : 6e4,
					f = encodeURIComponent,
					p = document.getElementsByTagName("script")[0] || document.head;
					return m && (d = setTimeout(function () {
								a(),
								n && n(new Error("Timeout"))
							}, m)),
					window[h] = function (t) {
						o("jsonp got", t),
						a(),
						n && n(null, t)
					},
					t += (~t.indexOf("?") ? "&" : "?") + c + "=" + f(h),
					t = t.replace("?&", "?"),
					o('jsonp req "%s"', t),
					l = document.createElement("script"),
					l.src = t,
					p.parentNode.insertBefore(l, p),
					s
				}
				var o = t("debug")("jsonp");
				e.exports = a;
				var r = 0
			}, {
				debug: 12
			}
		],
		11: [function (t, e, n) {
				function i(t) {
					if (t = String(t), !(t.length > 1e4)) {
						var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
						if (e) {
							var n = parseFloat(e[1]);
							switch ((e[2] || "ms").toLowerCase()) {
							case "years":
							case "year":
							case "yrs":
							case "yr":
							case "y":
								return n * h;
							case "days":
							case "day":
							case "d":
								return n * u;
							case "hours":
							case "hour":
							case "hrs":
							case "hr":
							case "h":
								return n * d;
							case "minutes":
							case "minute":
							case "mins":
							case "min":
							case "m":
								return n * l;
							case "seconds":
							case "second":
							case "secs":
							case "sec":
							case "s":
								return n * s;
							case "milliseconds":
							case "millisecond":
							case "msecs":
							case "msec":
							case "ms":
								return n;
							default:
								return
							}
						}
					}
				}
				function a(t) {
					return t >= u ? Math.round(t / u) + "d" : t >= d ? Math.round(t / d) + "h" : t >= l ? Math.round(t / l) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
				}
				function o(t) {
					return r(t, u, "day") || r(t, d, "hour") || r(t, l, "minute") || r(t, s, "second") || t + " ms"
				}
				function r(t, e, n) {
					if (!(t < e))
						return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
				}
				var s = 1e3,
				l = 60 * s,
				d = 60 * l,
				u = 24 * d,
				h = 365.25 * u;
				e.exports = function (t, e) {
					e = e || {};
					var n = typeof t;
					if ("string" === n && t.length > 0)
						return i(t);
					if ("number" === n && !1 === isNaN(t))
						return e.long ? o(t) : a(t);
					throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
				}
			}, {}
		],
		12: [function (t, e, n) {
				(function (i) {
					function a() {
						return !("undefined" == typeof window || !window || void 0 === window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document && "WebkitAppearance" in document.documentElement.style || "undefined" != typeof window && window && window.console && (console.firebug || console.exception && console.table) || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
					}
					function o(t) {
						var e = this.useColors;
						if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + n.humanize(this.diff), e) {
							var i = "color: " + this.color;
							t.splice(1, 0, i, "color: inherit");
							var a = 0,
							o = 0;
							t[0].replace(/%[a-zA-Z%]/g, function (t) {
								"%%" !== t && (a++, "%c" === t && (o = a))
							}),
							t.splice(o, 0, i)
						}
					}
					function r() {
						return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
					}
					function s(t) {
						try {
							null == t ? n.storage.removeItem("debug") : n.storage.debug = t
						} catch (t) {}
					}
					function l() {
						var t;
						try {
							t = n.storage.debug
						} catch (t) {}
						return !t && void 0 !== i && "env" in i && (t = i.env.DEBUG),
						t
					}
					n = e.exports = t("./debug"),
					n.log = r,
					n.formatArgs = o,
					n.save = s,
					n.load = l,
					n.useColors = a,
					n.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
						try {
							return window.localStorage
						} catch (t) {}
					}
					(),
					n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
					n.formatters.j = function (t) {
						try {
							return JSON.stringify(t)
						} catch (t) {
							return "[UnexpectedJSONParseError]: " + t.message
						}
					},
					n.enable(l())
				}).call(this, t("_process"))
			}, {
				"./debug": 13,
				_process: 9
			}
		],
		13: [function (t, e, n) {
				function i(t) {
					var e,
					i = 0;
					for (e in t)
						i = (i << 5) - i + t.charCodeAt(e), i |= 0;
					return n.colors[Math.abs(i) % n.colors.length]
				}
				function a(t) {
					function e() {
						if (e.enabled) {
							var t = e,
							i = +new Date,
							a = i - (d || i);
							t.diff = a,
							t.prev = d,
							t.curr = i,
							d = i;
							for (var o = new Array(arguments.length), r = 0; r < o.length; r++)
								o[r] = arguments[r];
							o[0] = n.coerce(o[0]),
							"string" != typeof o[0] && o.unshift("%O");
							var s = 0;
							o[0] = o[0].replace(/%([a-zA-Z%])/g, function (e, i) {
									if ("%%" === e)
										return e;
									s++;
									var a = n.formatters[i];
									if ("function" == typeof a) {
										var r = o[s];
										e = a.call(t, r),
										o.splice(s, 1),
										s--
									}
									return e
								}),
							n.formatArgs.call(t, o);
							(e.log || n.log || console.log.bind(console)).apply(t, o)
						}
					}
					return e.namespace = t,
					e.enabled = n.enabled(t),
					e.useColors = n.useColors(),
					e.color = i(t),
					"function" == typeof n.init && n.init(e),
					e
				}
				function o(t) {
					n.save(t),
					n.names = [],
					n.skips = [];
					for (var e = (t || "").split(/[\s,]+/), i = e.length, a = 0; a < i; a++)
						e[a] && (t = e[a].replace(/\*/g, ".*?"), "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")))
				}
				function r() {
					n.enable("")
				}
				function s(t) {
					var e,
					i;
					for (e = 0, i = n.skips.length; e < i; e++)
						if (n.skips[e].test(t))
							return !1;
					for (e = 0, i = n.names.length; e < i; e++)
						if (n.names[e].test(t))
							return !0;
					return !1
				}
				function l(t) {
					return t instanceof Error ? t.stack || t.message : t
				}
				n = e.exports = a.debug = a.default = a, n.coerce = l, n.disable = r, n.enable = o, n.enabled = s, n.humanize = t("ms"), n.names = [], n.skips = [], n.formatters = {};
					var d
			}, {
				ms: 11
			}
		],
		14: [function (e, n, i) {
				(function (a) {
					!function (e) {
						if ("object" == typeof i && void 0 !== n)
							n.exports = e();
						else if ("function" == typeof t && t.amd)
							t([], e);
						else {
							var o;
							o = "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : this,
							o.leafletControlGeocoder = e()
						}
					}
					(function () {
						return function t(n, i, a) {
							function o(s, l) {
								if (!i[s]) {
									if (!n[s]) {
										var d = "function" == typeof e && e;
										if (!l && d)
											return d(s, !0);
										if (r)
											return r(s, !0);
										var u = new Error("Cannot find module '" + s + "'");
										throw u.code = "MODULE_NOT_FOUND",
										u
									}
									var h = i[s] = {
										exports: {}
									};
									n[s][0].call(h.exports, function (t) {
										var e = n[s][1][t];
										return o(e || t)
									}, h, h.exports, t, n, i, a)
								}
								return i[s].exports
							}
							for (var r = "function" == typeof e && e, s = 0; s < a.length; s++)
								o(a[s]);
							return o
						}
						({
							1: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("./geocoders/nominatim").class;
										e.exports = {
											class: i.Control.extend({
												options: {
													showResultIcons: !1,
													collapsed: !0,
													expand: "click",
													position: "topright",
													placeholder: "Search...",
													errorMessage: "Nothing found.",
													suggestMinLength: 3,
													suggestTimeout: 250,
													defaultMarkGeocode: !0
												},
												includes: i.Mixin.Events,
												initialize: function (t) {
													i.Util.setOptions(this, t),
													this.options.geocoder || (this.options.geocoder = new a),
													this._requestCount = 0
												},
												onAdd: function (t) {
													var e,
													n = "leaflet-control-geocoder",
													a = i.DomUtil.create("div", n + " leaflet-bar"),
													o = i.DomUtil.create("button", n + "-icon", a),
													r = this._form = i.DomUtil.create("div", n + "-form", a);
													return this._map = t,
													this._container = a,
													o.innerHTML = "&nbsp;",
													o.type = "button",
													e = this._input = i.DomUtil.create("input", "", r),
													e.type = "text",
													e.placeholder = this.options.placeholder,
													this._errorElement = i.DomUtil.create("div", n + "-form-no-error", a),
													this._errorElement.innerHTML = this.options.errorMessage,
													this._alts = i.DomUtil.create("ul", n + "-alternatives leaflet-control-geocoder-alternatives-minimized", a),
													i.DomEvent.disableClickPropagation(this._alts),
													i.DomEvent.addListener(e, "keydown", this._keydown, this),
													i.DomEvent.addListener(e, "blur", function () {
														this.options.collapsed && !this._preventBlurCollapse && this._collapse(),
														this._preventBlurCollapse = !1
													}, this),
													this.options.collapsed ? "click" === this.options.expand ? i.DomEvent.addListener(o, "click", function (t) {
														0 === t.button && 2 !== t.detail && this._toggle()
													}, this) : (i.DomEvent.addListener(o, "mouseover", this._expand, this), i.DomEvent.addListener(o, "mouseout", this._collapse, this), this._map.on("movestart", this._collapse, this)) : (i.DomEvent.addListener(o, "click", function (t) {
															this._geocode(t)
														}, this), this._expand()),
													this.options.defaultMarkGeocode && this.on("markgeocode", this.markGeocode, this),
													this.on("startgeocode", function () {
														i.DomUtil.addClass(this._container, "leaflet-control-geocoder-throbber")
													}, this),
													this.on("finishgeocode", function () {
														i.DomUtil.removeClass(this._container, "leaflet-control-geocoder-throbber")
													}, this),
													i.DomEvent.disableClickPropagation(a),
													a
												},
												_geocodeResult: function (t, e) {
													if (e || 1 !== t.length)
														if (t.length > 0) {
															this._alts.innerHTML = "",
															this._results = t,
															i.DomUtil.removeClass(this._alts, "leaflet-control-geocoder-alternatives-minimized");
															for (var n = 0; n < t.length; n++)
																this._alts.appendChild(this._createAlt(t[n], n))
														} else
															i.DomUtil.addClass(this._errorElement, "leaflet-control-geocoder-error");
													else
														this._geocodeResultSelected(t[0])
												},
												markGeocode: function (t) {
													return t = t.geocode || t,
													this._map.fitBounds(t.bbox),
													this._geocodeMarker && this._map.removeLayer(this._geocodeMarker),
													this._geocodeMarker = new i.Marker(t.center).bindPopup(t.html || t.name).addTo(this._map).openPopup(),
													this
												},
												_geocode: function (t) {
													var e = ++this._requestCount,
													n = t ? "suggest" : "geocode";
													this._lastGeocode = this._input.value,
													t || this._clearResults(),
													this.fire("start" + n),
													this.options.geocoder[n](this._input.value, function (i) {
														e === this._requestCount && (this.fire("finish" + n), this._geocodeResult(i, t))
													}, this)
												},
												_geocodeResultSelected: function (t) {
													this.options.collapsed || this._clearResults(),
													this.fire("markgeocode", {
														geocode: t
													})
												},
												_toggle: function () {
													this._container.className.indexOf("leaflet-control-geocoder-expanded") >= 0 ? this._collapse() : this._expand()
												},
												_expand: function () {
													i.DomUtil.addClass(this._container, "leaflet-control-geocoder-expanded"),
													this._input.select(),
													this.fire("expand")
												},
												_collapse: function () {
													this._container.className = this._container.className.replace(" leaflet-control-geocoder-expanded", ""),
													i.DomUtil.addClass(this._alts, "leaflet-control-geocoder-alternatives-minimized"),
													i.DomUtil.removeClass(this._errorElement, "leaflet-control-geocoder-error"),
													this.fire("collapse")
												},
												_clearResults: function () {
													i.DomUtil.addClass(this._alts, "leaflet-control-geocoder-alternatives-minimized"),
													this._selection = null,
													i.DomUtil.removeClass(this._errorElement, "leaflet-control-geocoder-error")
												},
												_createAlt: function (t, e) {
													var n = i.DomUtil.create("li", ""),
													a = i.DomUtil.create("a", "", n),
													o = this.options.showResultIcons && t.icon ? i.DomUtil.create("img", "", a) : null,
													r = t.html ? void 0 : document.createTextNode(t.name),
													s = function (e) {
														this._preventBlurCollapse = !0,
														i.DomEvent.stop(e),
														this._geocodeResultSelected(t),
														i.DomEvent.on(n, "click", function () {
															this.options.collapsed && this._collapse()
														}, this)
													};
													return o && (o.src = t.icon),
													n.setAttribute("data-result-index", e),
													t.html ? a.innerHTML = a.innerHTML + t.html : a.appendChild(r),
													i.DomEvent.addListener(n, "mousedown", s, this),
													n
												},
												_keydown: function (t) {
													var e = this,
													n = function (t) {
														e._selection && (i.DomUtil.removeClass(e._selection, "leaflet-control-geocoder-selected"), e._selection = e._selection[t > 0 ? "nextSibling" : "previousSibling"]),
														e._selection || (e._selection = e._alts[t > 0 ? "firstChild" : "lastChild"]),
														e._selection && i.DomUtil.addClass(e._selection, "leaflet-control-geocoder-selected")
													};
													switch (t.keyCode) {
													case 27:
														this.options.collapsed && this._collapse();
														break;
													case 38:
														n(-1),
														i.DomEvent.preventDefault(t);
														break;
													case 40:
														n(1),
														i.DomEvent.preventDefault(t);
														break;
													case 13:
														if (this._selection) {
															var a = parseInt(this._selection.getAttribute("data-result-index"), 10);
															this._geocodeResultSelected(this._results[a]),
															this._clearResults()
														} else
															this._geocode();
														i.DomEvent.preventDefault(t);
														break;
													default:
														var o = this._input.value;
														this.options.geocoder.suggest && o !== this._lastGeocode && (clearTimeout(this._suggestTimeout), o.length >= this.options.suggestMinLength ? this._suggestTimeout = setTimeout(i.bind(function () {
																		this._geocode(!0)
																	}, this), this.options.suggestTimeout) : this._clearResults())
													}
												}
											}),
											factory: function (t) {
												return new i.Control.Geocoder(t)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"./geocoders/nominatim": 9
								}
							],
							2: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													service_url: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
												},
												initialize: function (t, e) {
													i.setOptions(this, e),
													this._accessToken = t
												},
												geocode: function (t, e, n) {
													var o = {
														SingleLine: t,
														outFields: "Addr_Type",
														forStorage: !1,
														maxLocations: 10,
														f: "json"
													};
													this._key && this._key.length && (o.token = this._key),
													a.getJSON(this.options.service_url + "/findAddressCandidates", o, function (t) {
														var a,
														o,
														r,
														s = [];
														if (t.candidates && t.candidates.length)
															for (var l = 0; l <= t.candidates.length - 1; l++)
																a = t.candidates[l], o = i.latLng(a.location.y, a.location.x), r = i.latLngBounds(i.latLng(a.extent.ymax, a.extent.xmax), i.latLng(a.extent.ymin, a.extent.xmin)), s[l] = {
																	name: a.address,
																	bbox: r,
																	center: o
																};
														e.call(n, s)
													})
												},
												suggest: function (t, e, n) {
													return this.geocode(t, e, n)
												},
												reverse: function (t, e, n, o) {
													var r = {
														location: encodeURIComponent(t.lng) + "," + encodeURIComponent(t.lat),
														distance: 100,
														f: "json"
													};
													a.getJSON(this.options.service_url + "/reverseGeocode", r, function (t) {
														var e,
														a = [];
														t && !t.error && (e = i.latLng(t.location.y, t.location.x), a.push({
																name: t.address.Match_addr,
																center: e,
																bounds: i.latLngBounds(e, e)
															})),
														n.call(o, a)
													})
												}
											}),
											factory: function (t, e) {
												return new i.Control.Geocoder.ArcGis(t, e)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							3: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												initialize: function (t) {
													this.key = t
												},
												geocode: function (t, e, n) {
													a.jsonp("https://dev.virtualearth.net/REST/v1/Locations", {
														query: t,
														key: this.key
													}, function (t) {
														var a = [];
														if (t.resourceSets.length > 0)
															for (var o = t.resourceSets[0].resources.length - 1; o >= 0; o--) {
																var r = t.resourceSets[0].resources[o],
																s = r.bbox;
																a[o] = {
																	name: r.name,
																	bbox: i.latLngBounds([s[0], s[1]], [s[2], s[3]]),
																	center: i.latLng(r.point.coordinates)
																}
															}
														e.call(n, a)
													}, this, "jsonp")
												},
												reverse: function (t, e, n, o) {
													a.jsonp("//dev.virtualearth.net/REST/v1/Locations/" + t.lat + "," + t.lng, {
														key: this.key
													}, function (t) {
														for (var e = [], a = t.resourceSets[0].resources.length - 1; a >= 0; a--) {
															var r = t.resourceSets[0].resources[a],
															s = r.bbox;
															e[a] = {
																name: r.name,
																bbox: i.latLngBounds([s[0], s[1]], [s[2], s[3]]),
																center: i.latLng(r.point.coordinates)
															}
														}
														n.call(o, e)
													}, this, "jsonp")
												}
											}),
											factory: function (t) {
												return new i.Control.Geocoder.Bing(t)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							4: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													serviceUrl: "https://maps.googleapis.com/maps/api/geocode/json",
													geocodingQueryParams: {},
													reverseQueryParams: {}
												},
												initialize: function (t, e) {
													this._key = t,
													i.setOptions(this, e),
													this.options.serviceUrl = this.options.service_url || this.options.serviceUrl
												},
												geocode: function (t, e, n) {
													var o = {
														address: t
													};
													this._key && this._key.length && (o.key = this._key),
													o = i.Util.extend(o, this.options.geocodingQueryParams),
													a.getJSON(this.options.serviceUrl, o, function (t) {
														var a,
														o,
														r,
														s = [];
														if (t.results && t.results.length)
															for (var l = 0; l <= t.results.length - 1; l++)
																a = t.results[l], o = i.latLng(a.geometry.location), r = i.latLngBounds(i.latLng(a.geometry.viewport.northeast), i.latLng(a.geometry.viewport.southwest)), s[l] = {
																	name: a.formatted_address,
																	bbox: r,
																	center: o,
																	properties: a.address_components
																};
														e.call(n, s)
													})
												},
												reverse: function (t, e, n, o) {
													var r = {
														latlng: encodeURIComponent(t.lat) + "," + encodeURIComponent(t.lng)
													};
													r = i.Util.extend(r, this.options.reverseQueryParams),
													this._key && this._key.length && (r.key = this._key),
													a.getJSON(this.options.serviceUrl, r, function (t) {
														var e,
														a,
														r,
														s = [];
														if (t.results && t.results.length)
															for (var l = 0; l <= t.results.length - 1; l++)
																e = t.results[l], a = i.latLng(e.geometry.location), r = i.latLngBounds(i.latLng(e.geometry.viewport.northeast), i.latLng(e.geometry.viewport.southwest)), s[l] = {
																	name: e.formatted_address,
																	bbox: r,
																	center: a,
																	properties: e.address_components
																};
														n.call(o, s)
													})
												}
											}),
											factory: function (t, e) {
												return new i.Control.Geocoder.Google(t, e)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							5: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													geocodeUrl: "http://geocoder.api.here.com/6.2/geocode.json",
													reverseGeocodeUrl: "http://reverse.geocoder.api.here.com/6.2/reversegeocode.json",
													app_id: "<insert your app_id here>",
													app_code: "<insert your app_code here>",
													geocodingQueryParams: {},
													reverseQueryParams: {}
												},
												initialize: function (t) {
													i.setOptions(this, t)
												},
												geocode: function (t, e, n) {
													var a = {
														searchtext: t,
														gen: 9,
														app_id: this.options.app_id,
														app_code: this.options.app_code,
														jsonattributes: 1
													};
													a = i.Util.extend(a, this.options.geocodingQueryParams),
													this.getJSON(this.options.geocodeUrl, a, e, n)
												},
												reverse: function (t, e, n, a) {
													var o = {
														prox: encodeURIComponent(t.lat) + "," + encodeURIComponent(t.lng),
														mode: "retrieveAddresses",
														app_id: this.options.app_id,
														app_code: this.options.app_code,
														gen: 9,
														jsonattributes: 1
													};
													o = i.Util.extend(o, this.options.reverseQueryParams),
													this.getJSON(this.options.reverseGeocodeUrl, o, n, a)
												},
												getJSON: function (t, e, n, o) {
													a.getJSON(t, e, function (t) {
														var e,
														a,
														r,
														s = [];
														if (t.response.view && t.response.view.length)
															for (var l = 0; l <= t.response.view[0].result.length - 1; l++)
																e = t.response.view[0].result[l].location, a = i.latLng(e.displayPosition.latitude, e.displayPosition.longitude), r = i.latLngBounds(i.latLng(e.mapView.topLeft.latitude, e.mapView.topLeft.longitude), i.latLng(e.mapView.bottomRight.latitude, e.mapView.bottomRight.longitude)), s[l] = {
																	name: e.address.label,
																	bbox: r,
																	center: a
																};
														n.call(o, s)
													})
												}
											}),
											factory: function (t) {
												return new i.Control.Geocoder.HERE(t)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							6: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													serviceUrl: "https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/"
												},
												initialize: function (t, e) {
													i.setOptions(this, e),
													this._accessToken = t
												},
												geocode: function (t, e, n) {
													a.getJSON(this.options.serviceUrl + encodeURIComponent(t) + ".json", {
														access_token: this._accessToken
													}, function (t) {
														var a,
														o,
														r,
														s = [];
														if (t.features && t.features.length)
															for (var l = 0; l <= t.features.length - 1; l++)
																a = t.features[l], o = i.latLng(a.center.reverse()), r = a.hasOwnProperty("bbox") ? i.latLngBounds(i.latLng(a.bbox.slice(0, 2).reverse()), i.latLng(a.bbox.slice(2, 4).reverse())) : i.latLngBounds(o, o), s[l] = {
																	name: a.place_name,
																	bbox: r,
																	center: o
																};
														e.call(n, s)
													})
												},
												suggest: function (t, e, n) {
													return this.geocode(t, e, n)
												},
												reverse: function (t, e, n, o) {
													a.getJSON(this.options.serviceUrl + encodeURIComponent(t.lng) + "," + encodeURIComponent(t.lat) + ".json", {
														access_token: this._accessToken
													}, function (t) {
														var e,
														a,
														r,
														s = [];
														if (t.features && t.features.length)
															for (var l = 0; l <= t.features.length - 1; l++)
																e = t.features[l], a = i.latLng(e.center.reverse()), r = e.hasOwnProperty("bbox") ? i.latLngBounds(i.latLng(e.bbox.slice(0, 2).reverse()), i.latLng(e.bbox.slice(2, 4).reverse())) : i.latLngBounds(a, a), s[l] = {
																	name: e.place_name,
																	bbox: r,
																	center: a
																};
														n.call(o, s)
													})
												}
											}),
											factory: function (t, e) {
												return new i.Control.Geocoder.Mapbox(t, e)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							7: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													serviceUrl: "https://www.mapquestapi.com/geocoding/v1"
												},
												initialize: function (t, e) {
													this._key = decodeURIComponent(t),
													i.Util.setOptions(this, e)
												},
												_formatName: function () {
													var t,
													e = [];
													for (t = 0; t < arguments.length; t++)
														arguments[t] && e.push(arguments[t]);
													return e.join(", ")
												},
												geocode: function (t, e, n) {
													a.jsonp(this.options.serviceUrl + "/address", {
														key: this._key,
														location: t,
														limit: 5,
														outFormat: "json"
													}, function (t) {
														var a,
														o,
														r = [];
														if (t.results && t.results[0].locations)
															for (var s = t.results[0].locations.length - 1; s >= 0; s--)
																a = t.results[0].locations[s], o = i.latLng(a.latLng), r[s] = {
																	name: this._formatName(a.street, a.adminArea4, a.adminArea3, a.adminArea1),
																	bbox: i.latLngBounds(o, o),
																	center: o
																};
														e.call(n, r)
													}, this)
												},
												reverse: function (t, e, n, o) {
													a.jsonp(this.options.serviceUrl + "/reverse", {
														key: this._key,
														location: t.lat + "," + t.lng,
														outputFormat: "json"
													}, function (t) {
														var e,
														a,
														r = [];
														if (t.results && t.results[0].locations)
															for (var s = t.results[0].locations.length - 1; s >= 0; s--)
																e = t.results[0].locations[s], a = i.latLng(e.latLng), r[s] = {
																	name: this._formatName(e.street, e.adminArea4, e.adminArea3, e.adminArea1),
																	bbox: i.latLngBounds(a, a),
																	center: a
																};
														n.call(o, r)
													}, this)
												}
											}),
											factory: function (t, e) {
												return new i.Control.Geocoder.MapQuest(t, e)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							8: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													serviceUrl: "https://search.mapzen.com/v1",
													geocodingQueryParams: {},
													reverseQueryParams: {}
												},
												initialize: function (t, e) {
													i.Util.setOptions(this, e),
													this._apiKey = t,
													this._lastSuggest = 0
												},
												geocode: function (t, e, n) {
													var o = this;
													a.getJSON(this.options.serviceUrl + "/search", i.extend({
															api_key: this._apiKey,
															text: t
														}, this.options.geocodingQueryParams), function (t) {
														e.call(n, o._parseResults(t, "bbox"))
													})
												},
												suggest: function (t, e, n) {
													var o = this;
													a.getJSON(this.options.serviceUrl + "/autocomplete", i.extend({
															api_key: this._apiKey,
															text: t
														}, this.options.geocodingQueryParams), i.bind(function (t) {
															t.geocoding.timestamp > this._lastSuggest && (this._lastSuggest = t.geocoding.timestamp, e.call(n, o._parseResults(t, "bbox")))
														}, this))
												},
												reverse: function (t, e, n, o) {
													var r = this;
													a.getJSON(this.options.serviceUrl + "/reverse", i.extend({
															api_key: this._apiKey,
															"point.lat": t.lat,
															"point.lon": t.lng
														}, this.options.reverseQueryParams), function (t) {
														n.call(o, r._parseResults(t, "bounds"))
													})
												},
												_parseResults: function (t, e) {
													var n = [];
													return i.geoJson(t, {
														pointToLayer: function (t, e) {
															return i.circleMarker(e)
														},
														onEachFeature: function (t, a) {
															var o,
															r,
															s = {};
															a.getBounds ? (o = a.getBounds(), r = o.getCenter()) : (r = a.getLatLng(), o = i.latLngBounds(r, r)),
															s.name = a.feature.properties.label,
															s.center = r,
															s[e] = o,
															s.properties = a.feature.properties,
															n.push(s)
														}
													}),
													n
												}
											}),
											factory: function (t, e) {
												return new i.Control.Geocoder.Mapzen(t, e)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							9: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													serviceUrl: "https://nominatim.openstreetmap.org/",
													geocodingQueryParams: {},
													reverseQueryParams: {},
													htmlTemplate: function (t) {
														var e = t.address,
														n = [];
														return (e.road || e.building) && n.push("{building} {road} {house_number}"),
														(e.city || e.town || e.village || e.hamlet) && n.push('<span class="' + (n.length > 0 ? "leaflet-control-geocoder-address-detail" : "") + '">{postcode} {city} {town} {village} {hamlet}</span>'),
														(e.state || e.country) && n.push('<span class="' + (n.length > 0 ? "leaflet-control-geocoder-address-context" : "") + '">{state} {country}</span>'),
														a.template(n.join("<br/>"), e, !0)
													}
												},
												initialize: function (t) {
													i.Util.setOptions(this, t)
												},
												geocode: function (t, e, n) {
													a.jsonp(this.options.serviceUrl + "search", i.extend({
															q: t,
															limit: 5,
															format: "json",
															addressdetails: 1
														}, this.options.geocodingQueryParams), function (t) {
														for (var a = [], o = t.length - 1; o >= 0; o--) {
															for (var r = t[o].boundingbox, s = 0; s < 4; s++)
																r[s] = parseFloat(r[s]);
															a[o] = {
																icon: t[o].icon,
																name: t[o].display_name,
																html: this.options.htmlTemplate ? this.options.htmlTemplate(t[o]) : void 0,
																bbox: i.latLngBounds([r[0], r[2]], [r[1], r[3]]),
																center: i.latLng(t[o].lat, t[o].lon),
																properties: t[o]
															}
														}
														e.call(n, a)
													}, this, "json_callback")
												},
												reverse: function (t, e, n, o) {
													a.jsonp(this.options.serviceUrl + "reverse", i.extend({
															lat: t.lat,
															lon: t.lng,
															zoom: Math.round(Math.log(e / 256) / Math.log(2)),
															addressdetails: 1,
															format: "json"
														}, this.options.reverseQueryParams), function (t) {
														var e,
														a = [];
														t && t.lat && t.lon && (e = i.latLng(t.lat, t.lon), a.push({
																name: t.display_name,
																html: this.options.htmlTemplate ? this.options.htmlTemplate(t) : void 0,
																center: e,
																bounds: i.latLngBounds(e, e),
																properties: t
															})),
														n.call(o, a)
													}, this, "json_callback")
												}
											}),
											factory: function (t) {
												return new i.Control.Geocoder.Nominatim(t)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							10: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													serviceUrl: "https://photon.komoot.de/api/",
													reverseUrl: "https://photon.komoot.de/reverse/",
													nameProperties: ["name", "street", "suburb", "hamlet", "town", "city", "state", "country"]
												},
												initialize: function (t) {
													i.setOptions(this, t)
												},
												geocode: function (t, e, n) {
													var o = i.extend({
															q: t
														}, this.options.geocodingQueryParams);
													a.getJSON(this.options.serviceUrl, o, i.bind(function (t) {
															e.call(n, this._decodeFeatures(t))
														}, this))
												},
												suggest: function (t, e, n) {
													return this.geocode(t, e, n)
												},
												reverse: function (t, e, n, o) {
													var r = i.extend({
															lat: t.lat,
															lon: t.lng
														}, this.options.geocodingQueryParams);
													a.getJSON(this.options.reverseUrl, r, i.bind(function (t) {
															n.call(o, this._decodeFeatures(t))
														}, this))
												},
												_decodeFeatures: function (t) {
													var e,
													n,
													a,
													o,
													r,
													s,
													l = [];
													if (t && t.features)
														for (e = 0; e < t.features.length; e++)
															n = t.features[e], a = n.geometry.coordinates, o = i.latLng(a[1], a[0]), r = n.properties.extent, s = r ? i.latLngBounds([r[1], r[0]], [r[3], r[2]]) : i.latLngBounds(o, o), l.push({
																name: this._deocodeFeatureName(n),
																center: o,
																bbox: s,
																properties: n.properties
															});
													return l
												},
												_deocodeFeatureName: function (t) {
													var e,
													n;
													for (e = 0; !n && e < this.options.nameProperties.length; e++)
														n = t.properties[this.options.nameProperties[e]];
													return n
												}
											}),
											factory: function (t) {
												return new i.Control.Geocoder.Photon(t)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							11: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("../util");
										e.exports = {
											class: i.Class.extend({
												options: {
													serviceUrl: "https://api.what3words.com/v2/"
												},
												initialize: function (t) {
													this._accessToken = t
												},
												geocode: function (t, e, n) {
													a.getJSON(this.options.serviceUrl + "forward", {
														key: this._accessToken,
														addr: t.split(/\s+/).join(".")
													}, function (t) {
														var a,
														o,
														r = [];
														t.hasOwnProperty("geometry") && (a = i.latLng(t.geometry.lat, t.geometry.lng), o = i.latLngBounds(a, a), r[0] = {
																name: t.words,
																bbox: o,
																center: a
															}),
														e.call(n, r)
													})
												},
												suggest: function (t, e, n) {
													return this.geocode(t, e, n)
												},
												reverse: function (t, e, n, o) {
													a.getJSON(this.options.serviceUrl + "reverse", {
														key: this._accessToken,
														coords: [t.lat, t.lng].join(",")
													}, function (t) {
														var e,
														a,
														r = [];
														200 == t.status.status && (e = i.latLng(t.geometry.lat, t.geometry.lng), a = i.latLngBounds(e, e), r[0] = {
																name: t.words,
																bbox: a,
																center: e
															}),
														n.call(o, r)
													})
												}
											}),
											factory: function (t) {
												return new i.Control.Geocoder.What3Words(t)
											}
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"../util": 13
								}
							],
							12: [function (t, e, n) {
									(function (n) {
										var i = "undefined" != typeof window ? window.L : void 0 !== n ? n.L : null,
										a = t("./control"),
										o = t("./geocoders/nominatim"),
										r = t("./geocoders/bing"),
										s = t("./geocoders/mapquest"),
										l = t("./geocoders/mapbox"),
										d = t("./geocoders/what3words"),
										u = t("./geocoders/google"),
										h = t("./geocoders/photon"),
										c = t("./geocoders/mapzen"),
										m = t("./geocoders/arcgis"),
										f = t("./geocoders/here");
										e.exports = i.Util.extend(a.class, {
												Nominatim: o.class,
												nominatim: o.factory,
												Bing: r.class,
												bing: r.factory,
												MapQuest: s.class,
												mapQuest: s.factory,
												Mapbox: l.class,
												mapbox: l.factory,
												What3Words: d.class,
												what3words: d.factory,
												Google: u.class,
												google: u.factory,
												Photon: h.class,
												photon: h.factory,
												Mapzen: c.class,
												mapzen: c.factory,
												ArcGis: m.class,
												arcgis: m.factory,
												HERE: f.class,
												here: f.factory
											}),
										i.Util.extend(i.Control, {
											Geocoder: e.exports,
											geocoder: a.factory
										})
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {
									"./control": 1,
									"./geocoders/arcgis": 2,
									"./geocoders/bing": 3,
									"./geocoders/google": 4,
									"./geocoders/here": 5,
									"./geocoders/mapbox": 6,
									"./geocoders/mapquest": 7,
									"./geocoders/mapzen": 8,
									"./geocoders/nominatim": 9,
									"./geocoders/photon": 10,
									"./geocoders/what3words": 11
								}
							],
							13: [function (t, e, n) {
									(function (t) {
										var n = "undefined" != typeof window ? window.L : void 0 !== t ? t.L : null,
										i = 0,
										a = function () {
											function t(t) {
												return i[t]
											}
											var e = /[&<>"'`]/g,
											n = /[&<>"'`]/,
											i = {
												"&": "&amp;",
												"<": "&lt;",
												">": "&gt;",
												'"': "&quot;",
												"'": "&#x27;",
												"`": "&#x60;"
											};
											return function (i) {
												return null == i ? "" : i ? (i = "" + i, n.test(i) ? i.replace(e, t) : i) : i + ""
											}
										}
										();
										e.exports = {
											jsonp: function (t, e, a, o, r) {
												var s = "_l_geocoder_" + i++;
												e[r || "callback"] = s,
												window[s] = n.Util.bind(a, o);
												var l = document.createElement("script");
												l.type = "text/javascript",
												l.src = t + n.Util.getParamString(e),
												l.id = s,
												document.getElementsByTagName("head")[0].appendChild(l)
											},
											getJSON: function (t, e, i) {
												var a = new XMLHttpRequest;
												a.onreadystatechange = function () {
													if (4 === a.readyState)
														return 200 !== a.status && 304 !== a.status ? void i("") : void i(JSON.parse(a.response))
												},
												a.open("GET", t + n.Util.getParamString(e), !0),
												a.setRequestHeader("Accept", "application/json"),
												a.send(null)
											},
											template: function (t, e) {
												return t.replace(/\{ *([\w_]+) *\}/g, function (t, n) {
													var i = e[n];
													return void 0 === i ? i = "" : "function" == typeof i && (i = i(e)),
													a(i)
												})
											},
											htmlEscape: a
										}
									}).call(this, void 0 !== a ? a : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
								}, {}
							]
						}, {}, [12])(12)
					})
				}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {}
		],
		15: [function (t, e, n) {
				function i(t, e, n) {
					function i(t) {
						return t >= 200 && t < 300 || 304 === t
					}
					function a() {
						void 0 === s.status || i(s.status) ? e.call(s, null, s) : e.call(s, s, null)
					}
					var o = !1;
					if (void 0 === window.XMLHttpRequest)
						return e(Error("Browser not supported"));
					if (void 0 === n) {
						var r = t.match(/^\s*https?:\/\/[^\/]*/);
						n = r && r[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
					}
					var s = new window.XMLHttpRequest;
					if (n && !("withCredentials" in s)) {
						s = new window.XDomainRequest;
						var l = e;
						e = function () {
							if (o)
								l.apply(this, arguments);
							else {
								var t = this,
								e = arguments;
								setTimeout(function () {
									l.apply(t, e)
								}, 0)
							}
						}
					}
					return "onload" in s ? s.onload = a : s.onreadystatechange = function () {
						4 === s.readyState && a()
					},
					s.onerror = function (t) {
						e.call(this, t || !0, null),
						e = function () {}
					},
					s.onprogress = function () {},
					s.ontimeout = function (t) {
						e.call(this, t, null),
						e = function () {}
					},
					s.onabort = function (t) {
						e.call(this, t, null),
						e = function () {}
					},
					s.open("GET", t, !0),
					s.send(null),
					o = !0,
					s
				}
				void 0 !== e && (e.exports = i)
			}, {}
		],
		16: [function (t, e, n) {
				function i(t, e) {
					t = Math.round(t * e),
					(t <<= 1) < 0 && (t = ~t);
					for (var n = ""; t >= 32; )
						n += String.fromCharCode(63 + (32 | 31 & t)), t >>= 5;
					return n += String.fromCharCode(t + 63)
				}
				var a = {};
				a.decode = function (t, e) {
					for (var n, i, a = 0, o = 0, r = 0, s = [], l = 0, d = 0, u = null, h = Math.pow(10, e || 5); a < t.length; ) {
						u = null,
						l = 0,
						d = 0;
						do {
							u = t.charCodeAt(a++) - 63,
							d |= (31 & u) << l,
							l += 5
						} while (u >= 32);
						n = 1 & d ? ~(d >> 1) : d >> 1,
						l = d = 0;
						do {
							u = t.charCodeAt(a++) - 63,
							d |= (31 & u) << l,
							l += 5
						} while (u >= 32);
						i = 1 & d ? ~(d >> 1) : d >> 1,
						o += n,
						r += i,
						s.push([o / h, r / h])
					}
					return s
				},
				a.encode = function (t, e) {
					if (!t.length)
						return "";
					for (var n = Math.pow(10, e || 5), a = i(t[0][0], n) + i(t[0][1], n), o = 1; o < t.length; o++) {
						var r = t[o],
						s = t[o - 1];
						a += i(r[0] - s[0], n),
						a += i(r[1] - s[1], n)
					}
					return a
				},
				void 0 !== typeof e && (e.exports = a)
			}, {}
		],
		17: [function (t, e, n) {
				!function () {
					"use strict";
					L.Routing = L.Routing || {},
					L.Routing.Autocomplete = L.Class.extend({
							options: {
								timeout: 500,
								blurTimeout: 100,
								noResultsMessage: "No results found."
							},
							initialize: function (t, e, n, i) {
								L.setOptions(this, i),
								this._elem = t,
								this._resultFn = i.resultFn ? L.Util.bind(i.resultFn, i.resultContext) : null,
								this._autocomplete = i.autocompleteFn ? L.Util.bind(i.autocompleteFn, i.autocompleteContext) : null,
								this._selectFn = L.Util.bind(e, n),
								this._container = L.DomUtil.create("div", "leaflet-routing-geocoder-result"),
								this._resultTable = L.DomUtil.create("table", "", this._container),
								L.DomEvent.addListener(this._elem, "input", this._keyPressed, this),
								L.DomEvent.addListener(this._elem, "keypress", this._keyPressed, this),
								L.DomEvent.addListener(this._elem, "keydown", this._keyDown, this),
								L.DomEvent.addListener(this._elem, "blur", function () {
									this._isOpen && this.close()
								}, this)
							},
							close: function () {
								L.DomUtil.removeClass(this._container, "leaflet-routing-geocoder-result-open"),
								this._isOpen = !1
							},
							_open: function () {
								var t = this._elem.getBoundingClientRect();
								if (!this._container.parentElement) {
									var e = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
									n = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
									this._container.style.left = t.left + e + "px",
									this._container.style.top = t.bottom + n + "px",
									this._container.style.width = t.right - t.left + "px",
									document.body.appendChild(this._container)
								}
								L.DomUtil.addClass(this._container, "leaflet-routing-geocoder-result-open"),
								this._isOpen = !0
							},
							_setResults: function (t) {
								var e,
								n,
								i,
								a;
								for (delete this._selection, this._results = t; this._resultTable.firstChild; )
									this._resultTable.removeChild(this._resultTable.firstChild);
								for (e = 0; e < t.length; e++)
									n = L.DomUtil.create("tr", "", this._resultTable), n.setAttribute("data-result-index", e), i = L.DomUtil.create("td", "", n), a = document.createTextNode(t[e].name), i.appendChild(a), L.DomEvent.addListener(i, "mousedown", L.DomEvent.preventDefault), L.DomEvent.addListener(i, "click", this._createClickListener(t[e]));
								e || (n = L.DomUtil.create("tr", "", this._resultTable), i = L.DomUtil.create("td", "leaflet-routing-geocoder-no-results", n), i.innerHTML = this.options.noResultsMessage),
								this._open(),
								t.length > 0 && this._select(1)
							},
							_createClickListener: function (t) {
								var e = this._resultSelected(t);
								return L.bind(function () {
									this._elem.blur(),
									e()
								}, this)
							},
							_resultSelected: function (t) {
								return L.bind(function () {
									this.close(),
									this._elem.value = t.name,
									this._lastCompletedText = t.name,
									this._selectFn(t)
								}, this)
							},
							_keyPressed: function (t) {
								var e;
								return this._isOpen && 13 === t.keyCode && this._selection ? (e = parseInt(this._selection.getAttribute("data-result-index"), 10), this._resultSelected(this._results[e])(), void L.DomEvent.preventDefault(t)) : 13 === t.keyCode ? void this._complete(this._resultFn, !0) : this._autocomplete && document.activeElement === this._elem ? (this._timer && clearTimeout(this._timer), void(this._timer = setTimeout(L.Util.bind(function () {
													this._complete(this._autocomplete)
												}, this), this.options.timeout))) : void this._unselect()
							},
							_select: function (t) {
								var e = this._selection;
								e && (L.DomUtil.removeClass(e.firstChild, "leaflet-routing-geocoder-selected"), e = e[t > 0 ? "nextSibling" : "previousSibling"]),
								e || (e = this._resultTable[t > 0 ? "firstChild" : "lastChild"]),
								e && (L.DomUtil.addClass(e.firstChild, "leaflet-routing-geocoder-selected"), this._selection = e)
							},
							_unselect: function () {
								this._selection && L.DomUtil.removeClass(this._selection.firstChild, "leaflet-routing-geocoder-selected"),
								delete this._selection
							},
							_keyDown: function (t) {
								if (this._isOpen)
									switch (t.keyCode) {
									case 27:
										return this.close(),
										void L.DomEvent.preventDefault(t);
									case 38:
										return this._select(-1),
										void L.DomEvent.preventDefault(t);
									case 40:
										return this._select(1),
										void L.DomEvent.preventDefault(t)
									}
							},
							_complete: function (t, e) {
								function n(t) {
									this._lastCompletedText = i,
									e && 1 === t.length ? this._resultSelected(t[0])() : this._setResults(t)
								}
								var i = this._elem.value;
								i && (i !== this._lastCompletedText ? t(i, n, this) : e && n.call(this, this._results))
							}
						})
				}
				()
			}, {}
		],
		18: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.extend(n.Routing, t("./L.Routing.Itinerary")),
					n.extend(n.Routing, t("./L.Routing.Line")),
					n.extend(n.Routing, t("./L.Routing.Plan")),
					n.extend(n.Routing, t("./L.Routing.OSRMv1")),
					n.extend(n.Routing, t("./L.Routing.Mapbox")),
					n.extend(n.Routing, t("./L.Routing.ErrorControl")),
					n.Routing.Control = n.Routing.Itinerary.extend({
							options: {
								fitSelectedRoutes: "smart",
								routeLine: function (t, e) {
									return n.Routing.line(t, e)
								},
								autoRoute: !0,
								routeWhileDragging: !1,
								routeDragInterval: 500,
								waypointMode: "connect",
								showAlternatives: !1,
								defaultErrorHandler: function (t) {
									console.error("Routing error:", t.error)
								}
							},
							initialize: function (t) {
								n.Util.setOptions(this, t),
								this._router = this.options.router || new n.Routing.OSRMv1(t),
								this._plan = this.options.plan || n.Routing.plan(this.options.waypoints, t),
								this._requestCount = 0,
								n.Routing.Itinerary.prototype.initialize.call(this, t),
								this.on("routeselected", this._routeSelected, this),
								this.options.defaultErrorHandler && this.on("routingerror", this.options.defaultErrorHandler),
								this._plan.on("waypointschanged", this._onWaypointsChanged, this),
								t.routeWhileDragging && this._setupRouteDragging(),
								this.options.autoRoute && this.route()
							},
							onAdd: function (t) {
								var e = n.Routing.Itinerary.prototype.onAdd.call(this, t);
								return this._map = t,
								this._map.addLayer(this._plan),
								this._map.on("zoomend", function () {
									if (this._selectedRoute && this._router.requiresMoreDetail) {
										var t = this._map;
										this._router.requiresMoreDetail(this._selectedRoute, t.getZoom(), t.getBounds()) && this.route({
											callback: n.bind(function (t, e) {
												var n;
												if (!t) {
													for (n = 0; n < e.length; n++)
														this._routes[n].properties = e[n].properties;
													this._updateLineCallback(t, e)
												}
											}, this),
											simplifyGeometry: !1,
											geometryOnly: !0
										})
									}
								}, this),
								this._plan.options.geocoder && e.insertBefore(this._plan.createGeocoders(), e.firstChild),
								e
							},
							onRemove: function (t) {
								return this._line && t.removeLayer(this._line),
								t.removeLayer(this._plan),
								n.Routing.Itinerary.prototype.onRemove.call(this, t)
							},
							getWaypoints: function () {
								return this._plan.getWaypoints()
							},
							setWaypoints: function (t) {
								return this._plan.setWaypoints(t),
								this
							},
							spliceWaypoints: function () {
								return this._plan.spliceWaypoints.apply(this._plan, arguments)
							},
							getPlan: function () {
								return this._plan
							},
							getRouter: function () {
								return this._router
							},
							_routeSelected: function (t) {
								var e = this._selectedRoute = t.route,
								n = this.options.showAlternatives && t.alternatives,
								i = this.options.fitSelectedRoutes,
								a = "smart" === i && !this._waypointsVisible() || "smart" !== i && i;
								this._updateLines({
									route: e,
									alternatives: n
								}),
								a && this._map.fitBounds(this._line.getBounds()),
								"snap" === this.options.waypointMode && (this._plan.off("waypointschanged", this._onWaypointsChanged, this), this.setWaypoints(e.waypoints), this._plan.on("waypointschanged", this._onWaypointsChanged, this))
							},
							_waypointsVisible: function () {
								var t,
								e,
								i,
								a,
								o,
								r = this.getWaypoints();
								try {
									for (t = this._map.getSize(), a = 0; a < r.length; a++)
										o = this._map.latLngToLayerPoint(r[a].latLng), e ? e.extend(o) : e = n.bounds([o]);
									return i = e.getSize(),
									(i.x > t.x / 5 || i.y > t.y / 5) && this._waypointsInViewport()
								} catch (t) {
									return !1
								}
							},
							_waypointsInViewport: function () {
								var t,
								e,
								n = this.getWaypoints();
								try {
									t = this._map.getBounds()
								} catch (t) {
									return !1
								}
								for (e = 0; e < n.length; e++)
									if (t.contains(n[e].latLng))
										return !0;
								return !1
							},
							_updateLines: function (t) {
								var e = void 0 === this.options.addWaypoints || this.options.addWaypoints;
								this._clearLines(),
								this._alternatives = [],
								t.alternatives && t.alternatives.forEach(function (t, e) {
									this._alternatives[e] = this.options.routeLine(t, n.extend({
												isAlternative: !0
											}, this.options.altLineOptions || this.options.lineOptions)),
									this._alternatives[e].addTo(this._map),
									this._hookAltEvents(this._alternatives[e])
								}, this),
								this._line = this.options.routeLine(t.route, n.extend({
											addWaypoints: e,
											extendToWaypoints: "connect" === this.options.waypointMode
										}, this.options.lineOptions)),
								this._line.addTo(this._map),
								this._hookEvents(this._line)
							},
							_hookEvents: function (t) {
								t.on("linetouched", function (t) {
									this._plan.dragNewWaypoint(t)
								}, this)
							},
							_hookAltEvents: function (t) {
								t.on("linetouched", function (t) {
									var e = this._routes.slice(),
									n = e.splice(t.target._route.routesIndex, 1)[0];
									this.fire("routeselected", {
										route: n,
										alternatives: e
									})
								}, this)
							},
							_onWaypointsChanged: function (t) {
								this.options.autoRoute && this.route({}),
								this._plan.isReady() || (this._clearLines(), this._clearAlts()),
								this.fire("waypointschanged", {
									waypoints: t.waypoints
								})
							},
							_setupRouteDragging: function () {
								var t,
								e = 0;
								this._plan.on("waypointdrag", n.bind(function (i) {
										t = i.waypoints,
										e || (e = setTimeout(n.bind(function () {
														this.route({
															waypoints: t,
															geometryOnly: !0,
															callback: n.bind(this._updateLineCallback, this)
														}),
														e = void 0
													}, this), this.options.routeDragInterval))
									}, this)),
								this._plan.on("waypointdragend", function () {
									e && (clearTimeout(e), e = void 0),
									this.route()
								}, this)
							},
							_updateLineCallback: function (t, e) {
								if (t)
									this._clearLines();
								else {
									e = e.slice();
									var n = e.splice(this._selectedRoute.routesIndex, 1)[0];
									this._updateLines({
										route: n,
										alternatives: e
									})
								}
							},
							route: function (t) {
								var e,
								n = ++this._requestCount;
								t = t || {},
								this._plan.isReady() && (this.options.useZoomParameter && (t.z = this._map && this._map.getZoom()), e = t && t.waypoints || this._plan.getWaypoints(), this.fire("routingstart", {
										waypoints: e
									}), this._router.route(e, t.callback || function (i, a) {
										if (n === this._requestCount) {
											if (this._clearLines(), this._clearAlts(), i)
												return void this.fire("routingerror", {
													error: i
												});
											if (a.forEach(function (t, e) {
													t.routesIndex = e
												}), t.geometryOnly) {
												var o = a.splice(0, 1)[0];
												this._routeSelected({
													route: o,
													alternatives: a
												})
											} else
												this.fire("routesfound", {
													waypoints: e,
													routes: a
												}), this.setAlternatives(a)
										}
									}, this, t))
							},
							_clearLines: function () {
								if (this._line && (this._map.removeLayer(this._line), delete this._line), this._alternatives && this._alternatives.length) {
									for (var t in this._alternatives)
										this._map.removeLayer(this._alternatives[t]);
									this._alternatives = []
								}
							}
						}),
					n.Routing.control = function (t) {
						return new n.Routing.Control(t)
					},
					e.exports = n.Routing
				}
				()
			}, {
				"./L.Routing.ErrorControl": 19,
				"./L.Routing.Itinerary": 22,
				"./L.Routing.Line": 24,
				"./L.Routing.Mapbox": 26,
				"./L.Routing.OSRMv1": 27,
				"./L.Routing.Plan": 28,
				leaflet: 31
			}
		],
		19: [function (t, e, n) {
				!function () {
					"use strict";
					L.Routing = L.Routing || {},
					L.Routing.ErrorControl = L.Control.extend({
							options: {
								header: "Routing error",
								formatMessage: function (t) {
									return t.status < 0 ? "Calculating the route caused an error. Technical description follows: <code><pre>" + t.message + "</pre></code" : "The route could not be calculated. " + t.message
								}
							},
							initialize: function (t, e) {
								L.Control.prototype.initialize.call(this, e),
								t.on("routingerror", L.bind(function (t) {
										this._element && (this._element.children[1].innerHTML = this.options.formatMessage(t.error), this._element.style.visibility = "visible")
									}, this)).on("routingstart", L.bind(function () {
										this._element && (this._element.style.visibility = "hidden")
									}, this))
							},
							onAdd: function () {
								var t;
								return this._element = L.DomUtil.create("div", "leaflet-bar leaflet-routing-error"),
								this._element.style.visibility = "hidden",
								t = L.DomUtil.create("h3", null, this._element),
								L.DomUtil.create("span", null, this._element),
								t.innerHTML = this.options.header,
								this._element
							},
							onRemove: function () {
								delete this._element
							}
						}),
					L.Routing.errorControl = function (t, e) {
						return new L.Routing.ErrorControl(t, e)
					}
				}
				()
			}, {}
		],
		20: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.extend(n.Routing, t("./L.Routing.Localization")),
					n.Routing.Formatter = n.Class.extend({
							options: {
								units: "metric",
								unitNames: null,
								language: "en",
								roundingSensitivity: 1,
								distanceTemplate: "{value} {unit}"
							},
							initialize: function (t) {
								n.setOptions(this, t);
								var e = n.Util.isArray(this.options.language) ? this.options.language : [this.options.language, "en"];
								this._localization = new n.Routing.Localization(e)
							},
							formatDistance: function (t, e) {
								var i,
								a,
								o,
								r = this.options.unitNames || this._localization.localize("units"),
								s = e <= 0,
								l = s ? function (t) {
									return t
								}
								 : n.bind(this._round, this);
								return "imperial" === this.options.units ? (a = t / .9144, o = a >= 1e3 ? {
										value: l(t / 1609.344, e),
										unit: r.miles
									}
									 : {
									value: l(a, e),
									unit: r.yards
								}) : (i = l(t, e), o = {
										value: i >= 1e3 ? i / 1e3 : i,
										unit: i >= 1e3 ? r.kilometers : r.meters
									}),
								s && (o.value = o.value.toFixed(-e)),
								n.Util.template(this.options.distanceTemplate, o)
							},
							_round: function (t, e) {
								var n = e || this.options.roundingSensitivity,
								i = Math.pow(10, (Math.floor(t / n) + "").length - 1),
								a = Math.floor(t / i),
								o = a > 5 ? i : i / 2;
								return Math.round(t / o) * o
							},
							formatTime: function (t) {
								var e = this.options.unitNames || this._localization.localize("units");
								return t = 30 * Math.round(t / 30),
								t > 86400 ? Math.round(t / 3600) + " " + e.hours : t > 3600 ? Math.floor(t / 3600) + " " + e.hours + " " + Math.round(t % 3600 / 60) + " " + e.minutes : t > 300 ? Math.round(t / 60) + " " + e.minutes : t > 60 ? Math.floor(t / 60) + " " + e.minutes + (t % 60 != 0 ? " " + t % 60 + " " + e.seconds : "") : t + " " + e.seconds
							},
							formatInstruction: function (t, e) {
								return void 0 === t.text ? this.capitalize(n.Util.template(this._getInstructionTemplate(t, e), n.extend({}, t, {
											exitStr: t.exit ? this._localization.localize("formatOrder")(t.exit) : "",
											dir: this._localization.localize(["directions", t.direction]),
											modifier: this._localization.localize(["directions", t.modifier])
										}))) : t.text
							},
							getIconName: function (t, e) {
								switch (t.type) {
								case "Head":
									if (0 === e)
										return "depart";
									break;
								case "WaypointReached":
									return "via";
								case "Roundabout":
									return "enter-roundabout";
								case "DestinationReached":
									return "arrive"
								}
								switch (t.modifier) {
								case "Straight":
									return "continue";
								case "SlightRight":
									return "bear-right";
								case "Right":
									return "turn-right";
								case "SharpRight":
									return "sharp-right";
								case "TurnAround":
								case "Uturn":
									return "u-turn";
								case "SharpLeft":
									return "sharp-left";
								case "Left":
									return "turn-left";
								case "SlightLeft":
									return "bear-left"
								}
							},
							capitalize: function (t) {
								return t.charAt(0).toUpperCase() + t.substring(1)
							},
							_getInstructionTemplate: function (t, e) {
								var n = "Straight" === t.type ? 0 === e ? "Head" : "Continue" : t.type,
								i = this._localization.localize(["instructions", n]);
								return i || (i = [this._localization.localize(["directions", n]), " " + this._localization.localize(["instructions", "Onto"])]),
								i[0] + (i.length > 1 && t.road ? i[1] : "")
							}
						}),
					e.exports = n.Routing
				}
				()
			}, {
				"./L.Routing.Localization": 25,
				leaflet: 31
			}
		],
		21: [function (t, e, n) {
				!function () {
					"use strict";
					function n(t) {
						t.setSelectionRange ? t.setSelectionRange(0, 9999) : t.select()
					}
					var i = t("leaflet");
					i.Routing = i.Routing || {},
					i.extend(i.Routing, t("./L.Routing.Autocomplete")),
					i.Routing.GeocoderElement = i.Class.extend({
							includes: i.Mixin.Events,
							options: {
								createGeocoder: function (t, e, n) {
									var a = i.DomUtil.create("div", "leaflet-routing-geocoder"),
									o = i.DomUtil.create("input", "", a),
									r = n.addWaypoints ? i.DomUtil.create("span", "leaflet-routing-remove-waypoint", a) : void 0;
									return o.disabled = !n.addWaypoints, {
										container: a,
										input: o,
										closeButton: r
									}
								},
								geocoderPlaceholder: function (t, e, n) {
									var a = new i.Routing.Localization(n.options.language).localize("ui");
									return 0 === t ? a.startPlaceholder : t < e - 1 ? i.Util.template(a.viaPlaceholder, {
										viaNumber: t
									}) : a.endPlaceholder
								},
								geocoderClass: function () {
									return ""
								},
								waypointNameFallback: function (t) {
									var e = t.lat < 0 ? "S" : "N",
									n = t.lng < 0 ? "W" : "E";
									return e + (Math.round(1e4 * Math.abs(t.lat)) / 1e4).toString() + ", " + n + (Math.round(1e4 * Math.abs(t.lng)) / 1e4).toString()
								},
								maxGeocoderTolerance: 200,
								autocompleteOptions: {},
								language: "en"
							},
							initialize: function (t, e, a, o) {
								i.setOptions(this, o);
								var r = this.options.createGeocoder(e, a, this.options),
								s = r.closeButton,
								l = r.input;
								l.setAttribute("placeholder", this.options.geocoderPlaceholder(e, a, this)),
								l.className = this.options.geocoderClass(e, a),
								this._element = r,
								this._waypoint = t,
								this.update(),
								l.value = t.name,
								i.DomEvent.addListener(l, "click", function () {
									n(this)
								}, l),
								s && i.DomEvent.addListener(s, "click", function () {
									this.fire("delete", {
										waypoint: this._waypoint
									})
								}, this),
								new i.Routing.Autocomplete(l, function (e) {
									l.value = e.name,
									t.name = e.name,
									t.latLng = e.center,
									this.fire("geocoded", {
										waypoint: t,
										value: e
									})
								}, this, i.extend({
										resultFn: this.options.geocoder.geocode,
										resultContext: this.options.geocoder,
										autocompleteFn: this.options.geocoder.suggest,
										autocompleteContext: this.options.geocoder
									}, this.options.autocompleteOptions))
							},
							getContainer: function () {
								return this._element.container
							},
							setValue: function (t) {
								this._element.input.value = t
							},
							update: function (t) {
								var e,
								n = this._waypoint;
								n.name = n.name || "",
								!n.latLng || !t && n.name || (e = this.options.waypointNameFallback(n.latLng), this.options.geocoder && this.options.geocoder.reverse ? this.options.geocoder.reverse(n.latLng, 67108864, function (t) {
										t.length > 0 && t[0].center.distanceTo(n.latLng) < this.options.maxGeocoderTolerance ? n.name = t[0].name : n.name = e,
										this._update()
									}, this) : (n.name = e, this._update()))
							},
							focus: function () {
								var t = this._element.input;
								t.focus(),
								n(t)
							},
							_update: function () {
								var t = this._waypoint,
								e = t && t.name ? t.name : "";
								this.setValue(e),
								this.fire("reversegeocoded", {
									waypoint: t,
									value: e
								})
							}
						}),
					i.Routing.geocoderElement = function (t, e, n, a) {
						return new i.Routing.GeocoderElement(t, e, n, a)
					},
					e.exports = i.Routing
				}
				()
			}, {
				"./L.Routing.Autocomplete": 17,
				leaflet: 31
			}
		],
		22: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.extend(n.Routing, t("./L.Routing.Formatter")),
					n.extend(n.Routing, t("./L.Routing.ItineraryBuilder")),
					n.Routing.Itinerary = n.Control.extend({
							includes: n.Mixin.Events,
							options: {
								pointMarkerStyle: {
									radius: 5,
									color: "#03f",
									fillColor: "white",
									opacity: 1,
									fillOpacity: .7
								},
								summaryTemplate: "<h2>{name}</h2><h3>{distance}, {time}</h3>",
								timeTemplate: "{time}",
								containerClassName: "",
								alternativeClassName: "",
								minimizedClassName: "",
								itineraryClassName: "",
								totalDistanceRoundingSensitivity: -1,
								show: !0,
								collapsible: void 0,
								collapseBtn: function (t) {
									var e = n.DomUtil.create("span", t.options.collapseBtnClass);
									n.DomEvent.on(e, "click", t._toggle, t),
									t._container.insertBefore(e, t._container.firstChild)
								},
								collapseBtnClass: "leaflet-routing-collapse-btn"
							},
							initialize: function (t) {
								n.setOptions(this, t),
								this._formatter = this.options.formatter || new n.Routing.Formatter(this.options),
								this._itineraryBuilder = this.options.itineraryBuilder || new n.Routing.ItineraryBuilder({
										containerClassName: this.options.itineraryClassName
									})
							},
							onAdd: function (t) {
								var e = this.options.collapsible;
								return e = e || void 0 === e && t.getSize().x <= 640,
								this._container = n.DomUtil.create("div", "leaflet-routing-container leaflet-bar " + (this.options.show ? "" : "leaflet-routing-container-hide ") + (e ? "leaflet-routing-collapsible " : "") + this.options.containerClassName),
								this._altContainer = this.createAlternativesContainer(),
								this._container.appendChild(this._altContainer),
								n.DomEvent.disableClickPropagation(this._container),
								n.DomEvent.addListener(this._container, "mousewheel", function (t) {
									n.DomEvent.stopPropagation(t)
								}),
								e && this.options.collapseBtn(this),
								this._container
							},
							onRemove: function () {},
							createAlternativesContainer: function () {
								return n.DomUtil.create("div", "leaflet-routing-alternatives-container")
							},
							setAlternatives: function (t) {
								var e,
								n,
								i;
								for (this._clearAlts(), this._routes = t, e = 0; e < this._routes.length; e++)
									n = this._routes[e], i = this._createAlternative(n, e), this._altContainer.appendChild(i), this._altElements.push(i);
								return this._selectRoute({
									route: this._routes[0],
									alternatives: this._routes.slice(1)
								}),
								this
							},
							show: function () {
								n.DomUtil.removeClass(this._container, "leaflet-routing-container-hide")
							},
							hide: function () {
								n.DomUtil.addClass(this._container, "leaflet-routing-container-hide")
							},
							_toggle: function () {
								this[n.DomUtil.hasClass(this._container, "leaflet-routing-container-hide") ? "show" : "hide"]()
							},
							_createAlternative: function (t, e) {
								var i = n.DomUtil.create("div", "leaflet-routing-alt " + this.options.alternativeClassName + (e > 0 ? " leaflet-routing-alt-minimized " + this.options.minimizedClassName : "")),
								a = this.options.summaryTemplate,
								o = n.extend({
										name: t.name,
										distance: this._formatter.formatDistance(t.summary.totalDistance, this.options.totalDistanceRoundingSensitivity),
										time: this._formatter.formatTime(t.summary.totalTime)
									}, t);
								return i.innerHTML = "function" == typeof a ? a(o) : n.Util.template(a, o),
								n.DomEvent.addListener(i, "click", this._onAltClicked, this),
								this.on("routeselected", this._selectAlt, this),
								i.appendChild(this._createItineraryContainer(t)),
								i
							},
							_clearAlts: function () {
								for (var t = this._altContainer; t && t.firstChild; )
									t.removeChild(t.firstChild);
								this._altElements = []
							},
							_createItineraryContainer: function (t) {
								var e,
								n,
								i,
								a,
								o,
								r,
								s = this._itineraryBuilder.createContainer(),
								l = this._itineraryBuilder.createStepsContainer();
								for (s.appendChild(l), e = 0; e < t.instructions.length; e++)
									n = t.instructions[e], o = this._formatter.formatInstruction(n, e), a = this._formatter.formatDistance(n.distance), r = this._formatter.getIconName(n, e), i = this._itineraryBuilder.createStep(o, a, r, l), this._addRowListeners(i, t.coordinates[n.index]);
								return s
							},
							_addRowListeners: function (t, e) {
								n.DomEvent.addListener(t, "mouseover", function () {
									this._marker = n.circleMarker(e, this.options.pointMarkerStyle).addTo(this._map)
								}, this),
								n.DomEvent.addListener(t, "mouseout", function () {
									this._marker && (this._map.removeLayer(this._marker), delete this._marker)
								}, this),
								n.DomEvent.addListener(t, "click", function (t) {
									this._map.panTo(e),
									n.DomEvent.stopPropagation(t)
								}, this)
							},
							_onAltClicked: function (t) {
								for (var e = t.target || window.event.srcElement; !n.DomUtil.hasClass(e, "leaflet-routing-alt"); )
									e = e.parentElement;
								var i = this._altElements.indexOf(e),
								a = this._routes.slice(),
								o = a.splice(i, 1)[0];
								this.fire("routeselected", {
									route: o,
									alternatives: a
								})
							},
							_selectAlt: function (t) {
								var e,
								i,
								a,
								o;
								if (e = this._altElements[t.route.routesIndex], n.DomUtil.hasClass(e, "leaflet-routing-alt-minimized"))
									for (i = 0; i < this._altElements.length; i++)
										a = this._altElements[i], o = i === t.route.routesIndex ? "removeClass" : "addClass", n.DomUtil[o](a, "leaflet-routing-alt-minimized"), this.options.minimizedClassName && n.DomUtil[o](a, this.options.minimizedClassName), i !== t.route.routesIndex && (a.scrollTop = 0);
								n.DomEvent.stop(t)
							},
							_selectRoute: function (t) {
								this._marker && (this._map.removeLayer(this._marker), delete this._marker),
								this.fire("routeselected", t)
							}
						}),
					n.Routing.itinerary = function (t) {
						return new n.Routing.Itinerary(t)
					},
					e.exports = n.Routing
				}
				()
			}, {
				"./L.Routing.Formatter": 20,
				"./L.Routing.ItineraryBuilder": 23,
				leaflet: 31
			}
		],
		23: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.Routing.ItineraryBuilder = n.Class.extend({
							options: {
								containerClassName: ""
							},
							initialize: function (t) {
								n.setOptions(this, t)
							},
							createContainer: function (t) {
								var e = n.DomUtil.create("table", t || ""),
								i = n.DomUtil.create("colgroup", "", e);
								return n.DomUtil.create("col", "leaflet-routing-instruction-icon", i),
								n.DomUtil.create("col", "leaflet-routing-instruction-text", i),
								n.DomUtil.create("col", "leaflet-routing-instruction-distance", i),
								e
							},
							createStepsContainer: function () {
								return n.DomUtil.create("tbody", "")
							},
							createStep: function (t, e, i, a) {
								var o,
								r,
								s = n.DomUtil.create("tr", "", a);
								return r = n.DomUtil.create("td", "", s),
								o = n.DomUtil.create("span", "leaflet-routing-icon leaflet-routing-icon-" + i, r),
								r.appendChild(o),
								r = n.DomUtil.create("td", "", s),
								r.appendChild(document.createTextNode(t)),
								r = n.DomUtil.create("td", "", s),
								r.appendChild(document.createTextNode(e)),
								s
							}
						}),
					e.exports = n.Routing
				}
				()
			}, {
				leaflet: 31
			}
		],
		24: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.Routing.Line = n.LayerGroup.extend({
							includes: n.Mixin.Events,
							options: {
								styles: [{
										color: "black",
										opacity: .15,
										weight: 9
									}, {
										color: "white",
										opacity: .8,
										weight: 6
									}, {
										color: "red",
										opacity: 1,
										weight: 2
									}
								],
								missingRouteStyles: [{
										color: "black",
										opacity: .15,
										weight: 7
									}, {
										color: "white",
										opacity: .6,
										weight: 4
									}, {
										color: "gray",
										opacity: .8,
										weight: 2,
										dashArray: "7,12"
									}
								],
								addWaypoints: !0,
								extendToWaypoints: !0,
								missingRouteTolerance: 10
							},
							initialize: function (t, e) {
								n.setOptions(this, e),
								n.LayerGroup.prototype.initialize.call(this, e),
								this._route = t,
								this.options.extendToWaypoints && this._extendToWaypoints(),
								this._addSegment(t.coordinates, this.options.styles, this.options.addWaypoints)
							},
							getBounds: function () {
								return n.latLngBounds(this._route.coordinates)
							},
							_findWaypointIndices: function () {
								var t,
								e = this._route.inputWaypoints,
								n = [];
								for (t = 0; t < e.length; t++)
									n.push(this._findClosestRoutePoint(e[t].latLng));
								return n
							},
							_findClosestRoutePoint: function (t) {
								var e,
								n,
								i,
								a = Number.MAX_VALUE;
								for (n = this._route.coordinates.length - 1; n >= 0; n--)
									(i = t.distanceTo(this._route.coordinates[n])) < a && (e = n, a = i);
								return e
							},
							_extendToWaypoints: function () {
								var t,
								e,
								i,
								a = this._route.inputWaypoints,
								o = this._getWaypointIndices();
								for (t = 0; t < a.length; t++)
									e = a[t].latLng, i = n.latLng(this._route.coordinates[o[t]]), e.distanceTo(i) > this.options.missingRouteTolerance && this._addSegment([e, i], this.options.missingRouteStyles)
							},
							_addSegment: function (t, e, i) {
								var a,
								o;
								for (a = 0; a < e.length; a++)
									o = n.polyline(t, e[a]), this.addLayer(o), i && o.on("mousedown", this._onLineTouched, this)
							},
							_findNearestWpBefore: function (t) {
								for (var e = this._getWaypointIndices(), n = e.length - 1; n >= 0 && e[n] > t; )
									n--;
								return n
							},
							_onLineTouched: function (t) {
								var e = this._findNearestWpBefore(this._findClosestRoutePoint(t.latlng));
								this.fire("linetouched", {
									afterIndex: e,
									latlng: t.latlng
								})
							},
							_getWaypointIndices: function () {
								return this._wpIndices || (this._wpIndices = this._route.waypointIndices || this._findWaypointIndices()),
								this._wpIndices
							}
						}),
					n.Routing.line = function (t, e) {
						return new n.Routing.Line(t, e)
					},
					e.exports = n.Routing
				}
				()
			}, {
				leaflet: 31
			}
		],
		25: [function (t, e, n) {
				!function () {
					"use strict";
					L.Routing = L.Routing || {},
					L.Routing.Localization = L.Class.extend({
							initialize: function (t) {
								this._langs = L.Util.isArray(t) ? t : [t, "en"];
								for (var e = 0, n = this._langs.length; e < n; e++)
									if (!L.Routing.Localization[this._langs[e]])
										throw new Error('No localization for language "' + this._langs[e] + '".')
							},
							localize: function (t) {
								var e,
								n,
								i;
								t = L.Util.isArray(t) ? t : [t];
								for (var a = 0, o = this._langs.length; a < o; a++) {
									e = L.Routing.Localization[this._langs[a]];
									for (var r = 0, s = t.length; e && r < s; r++)
										n = t[r], i = e[n], e = i;
									if (i)
										return i
								}
							}
						}),
					L.Routing.Localization = L.extend(L.Routing.Localization, {
							en: {
								directions: {
									N: "north",
									NE: "northeast",
									E: "east",
									SE: "southeast",
									S: "south",
									SW: "southwest",
									W: "west",
									NW: "northwest",
									SlightRight: "slight right",
									Right: "right",
									SharpRight: "sharp right",
									SlightLeft: "slight left",
									Left: "left",
									SharpLeft: "sharp left",
									Uturn: "Turn around"
								},
								instructions: {
									Head: ["Head {dir}", " on {road}"],
									Continue: ["Continue {dir}"],
									TurnAround: ["Turn around"],
									WaypointReached: ["Waypoint reached"],
									Roundabout: ["Take the {exitStr} exit in the roundabout", " onto {road}"],
									DestinationReached: ["Destination reached"],
									Fork: ["At the fork, turn {modifier}", " onto {road}"],
									Merge: ["Merge {modifier}", " onto {road}"],
									OnRamp: ["Turn {modifier} on the ramp", " onto {road}"],
									OffRamp: ["Take the ramp on the {modifier}", " onto {road}"],
									EndOfRoad: ["Turn {modifier} at the end of the road", " onto {road}"],
									Onto: "onto {road}"
								},
								formatOrder: function (t) {
									var e = t % 10 - 1,
									n = ["st", "nd", "rd"];
									return n[e] ? t + n[e] : t + "th"
								},
								ui: {
									startPlaceholder: "Start",
									viaPlaceholder: "Via {viaNumber}",
									endPlaceholder: "End"
								},
								units: {
									meters: "m",
									kilometers: "km",
									yards: "yd",
									miles: "mi",
									hours: "h",
									minutes: "min",
									seconds: "s"
								}
							},
							de: {
								directions: {
									N: "Norden",
									NE: "Nordosten",
									E: "Osten",
									SE: "Südosten",
									S: "Süden",
									SW: "Südwesten",
									W: "Westen",
									NW: "Nordwesten"
								},
								instructions: {
									Head: ["Richtung {dir}", " auf {road}"],
									Continue: ["Geradeaus Richtung {dir}", " auf {road}"],
									SlightRight: ["Leicht rechts abbiegen", " auf {road}"],
									Right: ["Rechts abbiegen", " auf {road}"],
									SharpRight: ["Scharf rechts abbiegen", " auf {road}"],
									TurnAround: ["Wenden"],
									SharpLeft: ["Scharf links abbiegen", " auf {road}"],
									Left: ["Links abbiegen", " auf {road}"],
									SlightLeft: ["Leicht links abbiegen", " auf {road}"],
									WaypointReached: ["Zwischenhalt erreicht"],
									Roundabout: ["Nehmen Sie die {exitStr} Ausfahrt im Kreisverkehr", " auf {road}"],
									DestinationReached: ["Sie haben ihr Ziel erreicht"]
								},
								formatOrder: function (t) {
									return t + "."
								},
								ui: {
									startPlaceholder: "Start",
									viaPlaceholder: "Via {viaNumber}",
									endPlaceholder: "Ziel"
								}
							},
							sv: {
								directions: {
									N: "norr",
									NE: "nordost",
									E: "öst",
									SE: "sydost",
									S: "syd",
									SW: "sydväst",
									W: "väst",
									NW: "nordväst",
									SlightRight: "svagt höger",
									Right: "höger",
									SharpRight: "skarpt höger",
									SlightLeft: "svagt vänster",
									Left: "vänster",
									SharpLeft: "skarpt vänster",
									Uturn: "Vänd"
								},
								instructions: {
									Head: ["Åk åt {dir}", " till {road}"],
									Continue: ["Fortsätt {dir}"],
									SlightRight: ["Svagt höger", " till {road}"],
									Right: ["Sväng höger", " till {road}"],
									SharpRight: ["Skarpt höger", " till {road}"],
									TurnAround: ["Vänd"],
									SharpLeft: ["Skarpt vänster", " till {road}"],
									Left: ["Sväng vänster", " till {road}"],
									SlightLeft: ["Svagt vänster", " till {road}"],
									WaypointReached: ["Viapunkt nådd"],
									Roundabout: ["Tag {exitStr} avfarten i rondellen", " till {road}"],
									DestinationReached: ["Framme vid resans mål"],
									Fork: ["Tag av {modifier}", " till {road}"],
									Merge: ["Anslut {modifier} ", " till {road}"],
									OnRamp: ["Tag påfarten {modifier}", " till {road}"],
									OffRamp: ["Tag avfarten {modifier}", " till {road}"],
									EndOfRoad: ["Sväng {modifier} vid vägens slut", " till {road}"],
									Onto: "till {road}"
								},
								formatOrder: function (t) {
									return ["första", "andra", "tredje", "fjärde", "femte", "sjätte", "sjunde", "åttonde", "nionde", "tionde"][t - 1]
								},
								ui: {
									startPlaceholder: "Från",
									viaPlaceholder: "Via {viaNumber}",
									endPlaceholder: "Till"
								}
							},
							sp: {
								directions: {
									N: "norte",
									NE: "noreste",
									E: "este",
									SE: "sureste",
									S: "sur",
									SW: "suroeste",
									W: "oeste",
									NW: "noroeste"
								},
								instructions: {
									Head: ["Derecho {dir}", " sobre {road}"],
									Continue: ["Continuar {dir}", " en {road}"],
									SlightRight: ["Leve giro a la derecha", " sobre {road}"],
									Right: ["Derecha", " sobre {road}"],
									SharpRight: ["Giro pronunciado a la derecha", " sobre {road}"],
									TurnAround: ["Dar vuelta"],
									SharpLeft: ["Giro pronunciado a la izquierda", " sobre {road}"],
									Left: ["Izquierda", " en {road}"],
									SlightLeft: ["Leve giro a la izquierda", " en {road}"],
									WaypointReached: ["Llegó a un punto del camino"],
									Roundabout: ["Tomar {exitStr} salida en la rotonda", " en {road}"],
									DestinationReached: ["Llegada a destino"]
								},
								formatOrder: function (t) {
									return t + "º"
								},
								ui: {
									startPlaceholder: "Inicio",
									viaPlaceholder: "Via {viaNumber}",
									endPlaceholder: "Destino"
								}
							},
							nl: {
								directions: {
									N: "noordelijke",
									NE: "noordoostelijke",
									E: "oostelijke",
									SE: "zuidoostelijke",
									S: "zuidelijke",
									SW: "zuidewestelijke",
									W: "westelijke",
									NW: "noordwestelijke"
								},
								instructions: {
									Head: ["Vertrek in {dir} richting", " de {road} op"],
									Continue: ["Ga in {dir} richting", " de {road} op"],
									SlightRight: ["Volg de weg naar rechts", " de {road} op"],
									Right: ["Ga rechtsaf", " de {road} op"],
									SharpRight: ["Ga scherpe bocht naar rechts", " de {road} op"],
									TurnAround: ["Keer om"],
									SharpLeft: ["Ga scherpe bocht naar links", " de {road} op"],
									Left: ["Ga linksaf", " de {road} op"],
									SlightLeft: ["Volg de weg naar links", " de {road} op"],
									WaypointReached: ["Aangekomen bij tussenpunt"],
									Roundabout: ["Neem de {exitStr} afslag op de rotonde", " de {road} op"],
									DestinationReached: ["Aangekomen op eindpunt"]
								},
								formatOrder: function (t) {
									return 1 === t || t >= 20 ? t + "ste" : t + "de"
								},
								ui: {
									startPlaceholder: "Vertrekpunt",
									viaPlaceholder: "Via {viaNumber}",
									endPlaceholder: "Bestemming"
								}
							},
							fr: {
								directions: {
									N: "nord",
									NE: "nord-est",
									E: "est",
									SE: "sud-est",
									S: "sud",
									SW: "sud-ouest",
									W: "ouest",
									NW: "nord-ouest"
								},
								instructions: {
									Head: ["Tout droit au {dir}", " sur {road}"],
									Continue: ["Continuer au {dir}", " sur {road}"],
									SlightRight: ["Légèrement à droite", " sur {road}"],
									Right: ["A droite", " sur {road}"],
									SharpRight: ["Complètement à droite", " sur {road}"],
									TurnAround: ["Faire demi-tour"],
									SharpLeft: ["Complètement à gauche", " sur {road}"],
									Left: ["A gauche", " sur {road}"],
									SlightLeft: ["Légèrement à gauche", " sur {road}"],
									WaypointReached: ["Point d'étape atteint"],
									Roundabout: ["Au rond-point, prenez la {exitStr} sortie", " sur {road}"],
									DestinationReached: ["Destination atteinte"]
								},
								formatOrder: function (t) {
									return t + "º"
								},
								ui: {
									startPlaceholder: "Départ",
									viaPlaceholder: "Intermédiaire {viaNumber}",
									endPlaceholder: "Arrivée"
								}
							},
							it: {
								directions: {
									N: "nord",
									NE: "nord-est",
									E: "est",
									SE: "sud-est",
									S: "sud",
									SW: "sud-ovest",
									W: "ovest",
									NW: "nord-ovest"
								},
								instructions: {
									Head: ["Dritto verso {dir}", " su {road}"],
									Continue: ["Continuare verso {dir}", " su {road}"],
									SlightRight: ["Mantenere la destra", " su {road}"],
									Right: ["A destra", " su {road}"],
									SharpRight: ["Strettamente a destra", " su {road}"],
									TurnAround: ["Fare inversione di marcia"],
									SharpLeft: ["Strettamente a sinistra", " su {road}"],
									Left: ["A sinistra", " sur {road}"],
									SlightLeft: ["Mantenere la sinistra", " su {road}"],
									WaypointReached: ["Punto di passaggio raggiunto"],
									Roundabout: ["Alla rotonda, prendere la {exitStr} uscita"],
									DestinationReached: ["Destinazione raggiunta"]
								},
								formatOrder: function (t) {
									return t + "º"
								},
								ui: {
									startPlaceholder: "Partenza",
									viaPlaceholder: "Intermedia {viaNumber}",
									endPlaceholder: "Destinazione"
								}
							},
							pt: {
								directions: {
									N: "norte",
									NE: "nordeste",
									E: "leste",
									SE: "sudeste",
									S: "sul",
									SW: "sudoeste",
									W: "oeste",
									NW: "noroeste"
								},
								instructions: {
									Head: ["Siga {dir}", " na {road}"],
									Continue: ["Continue {dir}", " na {road}"],
									SlightRight: ["Curva ligeira a direita", " na {road}"],
									Right: ["Curva a direita", " na {road}"],
									SharpRight: ["Curva fechada a direita", " na {road}"],
									TurnAround: ["Retorne"],
									SharpLeft: ["Curva fechada a esquerda", " na {road}"],
									Left: ["Curva a esquerda", " na {road}"],
									SlightLeft: ["Curva ligueira a esquerda", " na {road}"],
									WaypointReached: ["Ponto de interesse atingido"],
									Roundabout: ["Pegue a {exitStr} saída na rotatória", " na {road}"],
									DestinationReached: ["Destino atingido"]
								},
								formatOrder: function (t) {
									return t + "º"
								},
								ui: {
									startPlaceholder: "Origem",
									viaPlaceholder: "Intermédio {viaNumber}",
									endPlaceholder: "Destino"
								}
							},
							sk: {
								directions: {
									N: "sever",
									NE: "serverovýchod",
									E: "východ",
									SE: "juhovýchod",
									S: "juh",
									SW: "juhozápad",
									W: "západ",
									NW: "serverozápad"
								},
								instructions: {
									Head: ["Mierte na {dir}", " na {road}"],
									Continue: ["Pokračujte na {dir}", " na {road}"],
									SlightRight: ["Mierne doprava", " na {road}"],
									Right: ["Doprava", " na {road}"],
									SharpRight: ["Prudko doprava", " na {road}"],
									TurnAround: ["Otočte sa"],
									SharpLeft: ["Prudko doľava", " na {road}"],
									Left: ["Doľava", " na {road}"],
									SlightLeft: ["Mierne doľava", " na {road}"],
									WaypointReached: ["Ste v prejazdovom bode."],
									Roundabout: ["Odbočte na {exitStr} výjazde", " na {road}"],
									DestinationReached: ["Prišli ste do cieľa."]
								},
								formatOrder: function (t) {
									var e = t % 10 - 1,
									n = [".", ".", "."];
									return n[e] ? t + n[e] : t + "."
								},
								ui: {
									startPlaceholder: "Začiatok",
									viaPlaceholder: "Cez {viaNumber}",
									endPlaceholder: "Koniec"
								}
							},
							el: {
								directions: {
									N: "βόρεια",
									NE: "βορειοανατολικά",
									E: "ανατολικά",
									SE: "νοτιοανατολικά",
									S: "νότια",
									SW: "νοτιοδυτικά",
									W: "δυτικά",
									NW: "βορειοδυτικά"
								},
								instructions: {
									Head: ["Κατευθυνθείτε {dir}", " στην {road}"],
									Continue: ["Συνεχίστε {dir}", " στην {road}"],
									SlightRight: ["Ελαφρώς δεξιά", " στην {road}"],
									Right: ["Δεξιά", " στην {road}"],
									SharpRight: ["Απότομη δεξιά στροφή", " στην {road}"],
									TurnAround: ["Κάντε αναστροφή"],
									SharpLeft: ["Απότομη αριστερή στροφή", " στην {road}"],
									Left: ["Αριστερά", " στην {road}"],
									SlightLeft: ["Ελαφρώς αριστερά", " στην {road}"],
									WaypointReached: ["Φτάσατε στο σημείο αναφοράς"],
									Roundabout: ["Ακολουθήστε την {exitStr} έξοδο στο κυκλικό κόμβο", " στην {road}"],
									DestinationReached: ["Φτάσατε στον προορισμό σας"]
								},
								formatOrder: function (t) {
									return t + "º"
								},
								ui: {
									startPlaceholder: "Αφετηρία",
									viaPlaceholder: "μέσω {viaNumber}",
									endPlaceholder: "Προορισμός"
								}
							}
						}),
					e.exports = L.Routing
				}
				()
			}, {}
		],
		26: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.extend(n.Routing, t("./L.Routing.OSRMv1")),
					n.Routing.Mapbox = n.Routing.OSRMv1.extend({
							options: {
								serviceUrl: "https://api.mapbox.com/directions/v5",
								profile: "mapbox/driving",
								useHints: !1
							},
							initialize: function (t, e) {
								n.Routing.OSRMv1.prototype.initialize.call(this, e),
								this.options.requestParameters = this.options.requestParameters || {},
								this.options.requestParameters.access_token = t
							}
						}),
					n.Routing.mapbox = function (t, e) {
						return new n.Routing.Mapbox(t, e)
					},
					e.exports = n.Routing
				}
				()
			}, {
				"./L.Routing.OSRMv1": 27,
				leaflet: 31
			}
		],
		27: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet"),
					i = t("corslite"),
					a = t("polyline");
					n.Routing = n.Routing || {},
					n.extend(n.Routing, t("./L.Routing.Waypoint")),
					n.Routing.OSRMv1 = n.Class.extend({
							options: {
								serviceUrl: "https://router.project-osrm.org/route/v1",
								profile: "driving",
								timeout: 3e4,
								routingOptions: {
									alternatives: !0,
									steps: !0
								},
								polylinePrecision: 5,
								useHints: !0
							},
							initialize: function (t) {
								n.Util.setOptions(this, t),
								this._hints = {
									locations: {}
								}
							},
							route: function (t, e, a, o) {
								var r,
								s,
								l,
								d,
								u = !1,
								h = [];
								for (o = n.extend({}, this.options.routingOptions, o), r = this.buildRouteUrl(t, o), this.options.requestParameters && (r += n.Util.getParamString(this.options.requestParameters, r)), s = setTimeout(function () {
											u = !0,
											e.call(a || e, {
												status: -1,
												message: "OSRM request timed out."
											})
										}, this.options.timeout), d = 0; d < t.length; d++)
									l = t[d], h.push(new n.Routing.Waypoint(l.latLng, l.name, l.options));
								return i(r, n.bind(function (t, n) {
										var i,
										r,
										l;
										if (clearTimeout(s), !u) {
											if (r = "HTTP request failed: " + t, l = -1, !t)
												try {
													i = JSON.parse(n.responseText);
													try {
														return this._routeDone(i, h, o, e, a)
													} catch (t) {
														l = -3,
														r = t.toString()
													}
												} catch (t) {
													l = -2,
													r = "Error parsing OSRM response: " + t.toString()
												}
											e.call(a || e, {
												status: l,
												message: r
											})
										}
									}, this)),
								this
							},
							requiresMoreDetail: function (t, e, n) {
								if (!t.properties.isSimplified)
									return !1;
								var i,
								a = t.inputWaypoints;
								for (i = 0; i < a.length; ++i)
									if (!n.contains(a[i].latLng))
										return !0;
								return !1
							},
							_routeDone: function (t, e, n, i, a) {
								var o,
								r,
								s,
								l = [];
								if (a = a || i, "Ok" !== t.code)
									return void i.call(a, {
										status: t.code
									});
								for (o = this._toWaypoints(e, t.waypoints), r = 0; r < t.routes.length; r++)
									s = this._convertRoute(t.routes[r]), s.inputWaypoints = e, s.waypoints = o, s.properties = {
										isSimplified: !n || !n.geometryOnly || n.simplifyGeometry
									},
								l.push(s);
								this._saveHintData(t.waypoints, e),
								i.call(a, null, l)
							},
							_convertRoute: function (t) {
								var e,
								n,
								i,
								a,
								o,
								r,
								s,
								l = {
									name: "",
									coordinates: [],
									instructions: [],
									summary: {
										totalDistance: t.distance,
										totalTime: t.duration
									}
								},
								d = [],
								u = 0,
								h = t.legs.length,
								c = t.legs[0].steps.length > 0;
								for (e = 0; e < h; e++)
									for (i = t.legs[e], d.push(i.summary && i.summary.charAt(0).toUpperCase() + i.summary.substring(1)), n = 0; n < i.steps.length; n++)
										a = i.steps[n], o = this._decodePolyline(a.geometry), l.coordinates.push.apply(l.coordinates, o), r = this._maneuverToInstructionType(a.maneuver, e === h - 1), s = this._maneuverToModifier(a.maneuver), r && l.instructions.push({
											type: r,
											distance: a.distance,
											time: a.duration,
											road: a.name,
											direction: this._bearingToDirection(a.maneuver.bearing_after),
											exit: a.maneuver.exit,
											index: u,
											mode: a.mode,
											modifier: s
										}), u += o.length;
								return l.name = d.join(", "),
								c || (l.coordinates = this._decodePolyline(t.geometry)),
								l
							},
							_bearingToDirection: function (t) {
								return ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(t / 45) % 8]
							},
							_maneuverToInstructionType: function (t, e) {
								switch (t.type) {
								case "new name":
									return "Continue";
								case "depart":
									return "Head";
								case "arrive":
									return e ? "DestinationReached" : "WaypointReached";
								case "roundabout":
								case "rotary":
									return "Roundabout";
								case "merge":
								case "fork":
								case "on ramp":
								case "off ramp":
								case "end of road":
									return this._camelCase(t.type);
								default:
									return this._camelCase(t.modifier)
								}
							},
							_maneuverToModifier: function (t) {
								var e = t.modifier;
								switch (t.type) {
								case "merge":
								case "fork":
								case "on ramp":
								case "off ramp":
								case "end of road":
									e = this._leftOrRight(e)
								}
								return e && this._camelCase(e)
							},
							_camelCase: function (t) {
								for (var e = t.split(" "), n = "", i = 0, a = e.length; i < a; i++)
									n += e[i].charAt(0).toUpperCase() + e[i].substring(1);
								return n
							},
							_leftOrRight: function (t) {
								return t.indexOf("left") >= 0 ? "Left" : "Right"
							},
							_decodePolyline: function (t) {
								var e,
								i = a.decode(t, this.options.polylinePrecision),
								o = new Array(i.length);
								for (e = i.length - 1; e >= 0; e--)
									o[e] = n.latLng(i[e]);
								return o
							},
							_toWaypoints: function (t, e) {
								var i,
								a,
								o = [];
								for (i = 0; i < e.length; i++)
									a = e[i].location, o.push(n.Routing.waypoint(n.latLng(a[1], a[0]), t[i].name, t[i].options));
								return o
							},
							buildRouteUrl: function (t, e) {
								for (var n, i, a, o = [], r = [], s = !0, l = 0; l < t.length; l++)
									n = t[l], i = n.latLng, o.push(i.lng + "," + i.lat), r.push(this._hints.locations[this._locationKey(i)] || "");
								return a = !(e && e.geometryOnly),
								this.options.serviceUrl + "/" + this.options.profile + "/" + o.join(";") + "?" + (e.geometryOnly ? e.simplifyGeometry ? "" : "overview=full" : "overview=false") + "&alternatives=" + s.toString() + "&steps=" + a.toString() + (this.options.useHints ? "&hints=" + r.join(";") : "") + (e.allowUTurns ? "&continue_straight=" + !e.allowUTurns : "")
							},
							_locationKey: function (t) {
								return t.lat + "," + t.lng
							},
							_saveHintData: function (t, e) {
								var n;
								this._hints = {
									locations: {}
								};
								for (var i = t.length - 1; i >= 0; i--)
									n = e[i].latLng, this._hints.locations[this._locationKey(n)] = t[i].hint
							}
						}),
					n.Routing.osrmv1 = function (t) {
						return new n.Routing.OSRMv1(t)
					},
					e.exports = n.Routing
				}
				()
			}, {
				"./L.Routing.Waypoint": 29,
				corslite: 15,
				leaflet: 31,
				polyline: 16
			}
		],
		28: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.extend(n.Routing, t("./L.Routing.GeocoderElement")),
					n.extend(n.Routing, t("./L.Routing.Waypoint")),
					n.Routing.Plan = (n.Layer || n.Class).extend({
						includes: n.Mixin.Events,
						options: {
							dragStyles: [{
									color: "black",
									opacity: .15,
									weight: 9
								}, {
									color: "white",
									opacity: .8,
									weight: 6
								}, {
									color: "red",
									opacity: 1,
									weight: 2,
									dashArray: "7,12"
								}
							],
							draggableWaypoints: !0,
							routeWhileDragging: !1,
							addWaypoints: !0,
							reverseWaypoints: !1,
							addButtonClassName: "",
							language: "en",
							createGeocoderElement: n.Routing.geocoderElement,
							createMarker: function (t, e) {
								var i = {
									draggable: this.draggableWaypoints
								};
								return n.marker(e.latLng, i)
							},
							geocodersClassName: ""
						},
						initialize: function (t, e) {
							n.Util.setOptions(this, e),
							this._waypoints = [],
							this.setWaypoints(t)
						},
						isReady: function () {
							var t;
							for (t = 0; t < this._waypoints.length; t++)
								if (!this._waypoints[t].latLng)
									return !1;
							return !0
						},
						getWaypoints: function () {
							var t,
							e = [];
							for (t = 0; t < this._waypoints.length; t++)
								e.push(this._waypoints[t]);
							return e
						},
						setWaypoints: function (t) {
							var e = [0, this._waypoints.length].concat(t);
							return this.spliceWaypoints.apply(this, e),
							this
						},
						spliceWaypoints: function () {
							var t,
							e = [arguments[0], arguments[1]];
							for (t = 2; t < arguments.length; t++)
								e.push(arguments[t] && arguments[t].hasOwnProperty("latLng") ? arguments[t] : n.Routing.waypoint(arguments[t]));
							for ([].splice.apply(this._waypoints, e); this._waypoints.length < 2; )
								this.spliceWaypoints(this._waypoints.length, 0, null);
							this._updateMarkers(),
							this._fireChanged.apply(this, e)
						},
						onAdd: function (t) {
							this._map = t,
							this._updateMarkers()
						},
						onRemove: function () {
							var t;
							if (this._removeMarkers(), this._newWp)
								for (t = 0; t < this._newWp.lines.length; t++)
									this._map.removeLayer(this._newWp.lines[t]);
							delete this._map
						},
						createGeocoders: function () {
							var t,
							e,
							i = n.DomUtil.create("div", "leaflet-routing-geocoders " + this.options.geocodersClassName),
							a = this._waypoints;
							return this._geocoderContainer = i,
							this._geocoderElems = [],
							this.options.addWaypoints && (t = n.DomUtil.create("button", "leaflet-routing-add-waypoint " + this.options.addButtonClassName, i), t.setAttribute("type", "button"), n.DomEvent.addListener(t, "click", function () {
									this.spliceWaypoints(a.length, 0, null)
								}, this)),
							this.options.reverseWaypoints && (e = n.DomUtil.create("button", "leaflet-routing-reverse-waypoints", i), e.setAttribute("type", "button"), n.DomEvent.addListener(e, "click", function () {
									this._waypoints.reverse(),
									this.setWaypoints(this._waypoints)
								}, this)),
							this._updateGeocoders(),
							this.on("waypointsspliced", this._updateGeocoders),
							i
						},
						_createGeocoder: function (t) {
							var e = this.options.createGeocoderElement(this._waypoints[t], t, this._waypoints.length, this.options);
							return e.on("delete", function () {
								t > 0 || this._waypoints.length > 2 ? this.spliceWaypoints(t, 1) : this.spliceWaypoints(t, 1, new n.Routing.Waypoint)
							}, this).on("geocoded", function (e) {
								this._updateMarkers(),
								this._fireChanged(),
								this._focusGeocoder(t + 1),
								this.fire("waypointgeocoded", {
									waypointIndex: t,
									waypoint: e.waypoint
								})
							}, this).on("reversegeocoded", function (e) {
								this.fire("waypointgeocoded", {
									waypointIndex: t,
									waypoint: e.waypoint
								})
							}, this),
							e
						},
						_updateGeocoders: function () {
							var t,
							e,
							n = [];
							for (t = 0; t < this._geocoderElems.length; t++)
								this._geocoderContainer.removeChild(this._geocoderElems[t].getContainer());
							for (t = this._waypoints.length - 1; t >= 0; t--)
								e = this._createGeocoder(t), this._geocoderContainer.insertBefore(e.getContainer(), this._geocoderContainer.firstChild), n.push(e);
							this._geocoderElems = n.reverse()
						},
						_removeMarkers: function () {
							var t;
							if (this._markers)
								for (t = 0; t < this._markers.length; t++)
									this._markers[t] && this._map.removeLayer(this._markers[t]);
							this._markers = []
						},
						_updateMarkers: function () {
							var t,
							e;
							if (this._map)
								for (this._removeMarkers(), t = 0; t < this._waypoints.length; t++)
									this._waypoints[t].latLng ? (e = this.options.createMarker(t, this._waypoints[t], this._waypoints.length)) && (e.addTo(this._map), this.options.draggableWaypoints && this._hookWaypointEvents(e, t)) : e = null, this._markers.push(e)
						},
						_fireChanged: function () {
							this.fire("waypointschanged", {
								waypoints: this.getWaypoints()
							}),
							arguments.length >= 2 && this.fire("waypointsspliced", {
								index: Array.prototype.shift.call(arguments),
								nRemoved: Array.prototype.shift.call(arguments),
								added: arguments
							})
						},
						_hookWaypointEvents: function (t, e, i) {
							var a,
							o,
							r = function (t) {
								return i ? t.latlng : t.target.getLatLng()
							},
							s = n.bind(function (t) {
									this.fire("waypointdragstart", {
										index: e,
										latlng: r(t)
									})
								}, this),
							l = n.bind(function (t) {
									this._waypoints[e].latLng = r(t),
									this.fire("waypointdrag", {
										index: e,
										latlng: r(t)
									})
								}, this),
							d = n.bind(function (t) {
									this._waypoints[e].latLng = r(t),
									this._waypoints[e].name = "",
									this._geocoderElems && this._geocoderElems[e].update(!0),
									this.fire("waypointdragend", {
										index: e,
										latlng: r(t)
									}),
									this._fireChanged()
								}, this);
							i ? (a = n.bind(function (t) {
										this._markers[e].setLatLng(t.latlng),
										l(t)
									}, this), o = n.bind(function (t) {
										this._map.dragging.enable(),
										this._map.off("mouseup", o),
										this._map.off("mousemove", a),
										d(t)
									}, this), this._map.dragging.disable(), this._map.on("mousemove", a), this._map.on("mouseup", o), s({
									latlng: this._waypoints[e].latLng
								})) : (t.on("dragstart", s), t.on("drag", l), t.on("dragend", d))
						},
						dragNewWaypoint: function (t) {
							var e = t.afterIndex + 1;
							this.options.routeWhileDragging ? (this.spliceWaypoints(e, 0, t.latlng), this._hookWaypointEvents(this._markers[e], e, !0)) : this._dragNewWaypoint(e, t.latlng)
						},
						_dragNewWaypoint: function (t, e) {
							var i,
							a = new n.Routing.Waypoint(e),
							o = this._waypoints[t - 1],
							r = this._waypoints[t],
							s = this.options.createMarker(t, a, this._waypoints.length + 1),
							l = [],
							d = n.bind(function (t) {
									var e;
									for (s && s.setLatLng(t.latlng), e = 0; e < l.length; e++)
										l[e].spliceLatLngs(1, 1, t.latlng)
								}, this),
							u = n.bind(function (e) {
									var n;
									for (s && this._map.removeLayer(s), n = 0; n < l.length; n++)
										this._map.removeLayer(l[n]);
									this._map.off("mousemove", d),
									this._map.off("mouseup", u),
									this.spliceWaypoints(t, 0, e.latlng)
								}, this);
							for (s && s.addTo(this._map), i = 0; i < this.options.dragStyles.length; i++)
								l.push(n.polyline([o.latLng, e, r.latLng], this.options.dragStyles[i]).addTo(this._map));
							this._map.on("mousemove", d),
							this._map.on("mouseup", u)
						},
						_focusGeocoder: function (t) {
							this._geocoderElems[t] ? this._geocoderElems[t].focus() : document.activeElement.blur()
						}
					}),
					n.Routing.plan = function (t, e) {
						return new n.Routing.Plan(t, e)
					},
					e.exports = n.Routing
				}
				()
			}, {
				"./L.Routing.GeocoderElement": 21,
				"./L.Routing.Waypoint": 29,
				leaflet: 31
			}
		],
		29: [function (t, e, n) {
				!function () {
					"use strict";
					var n = t("leaflet");
					n.Routing = n.Routing || {},
					n.Routing.Waypoint = n.Class.extend({
							options: {
								allowUTurn: !1
							},
							initialize: function (t, e, i) {
								n.Util.setOptions(this, i),
								this.latLng = n.latLng(t),
								this.name = e
							}
						}),
					n.Routing.waypoint = function (t, e, i) {
						return new n.Routing.Waypoint(t, e, i)
					},
					e.exports = n.Routing
				}
				()
			}, {
				leaflet: 31
			}
		],
		30: [function (e, n, i) {
				!function (a, o) {
					"function" == typeof t && t.amd ? t(["leaflet"], a) : "object" == typeof i && (void 0 !== o && o.L ? n.exports = a(L) : n.exports = a(e("leaflet"))),
					void 0 !== o && o.L && (o.L.Locate = a(L))
				}
				(function (t) {
					return t.Control.Locate = t.Control.extend({
							options: {
								position: "topleft",
								drawCircle: !0,
								follow: !1,
								stopFollowingOnDrag: !1,
								remainActive: !1,
								markerClass: t.circleMarker,
								circleStyle: {
									color: "#136AEC",
									fillColor: "#136AEC",
									fillOpacity: .15,
									weight: 2,
									opacity: .5
								},
								markerStyle: {
									color: "#136AEC",
									fillColor: "#2A93EE",
									fillOpacity: .7,
									weight: 2,
									opacity: .9,
									radius: 5
								},
								followCircleStyle: {},
								followMarkerStyle: {},
								icon: "fa fa-map-marker",
								iconLoading: "fa fa-spinner fa-spin",
								circlePadding: [0, 0],
								metric: !0,
								onLocationError: function (t) {
									alert(t.message)
								},
								onLocationOutsideMapBounds: function (t) {
									t.stop(),
									alert(t.options.strings.outsideMapBoundsMsg)
								},
								setView: !0,
								keepCurrentZoomLevel: !1,
								showPopup: !0,
								strings: {
									title: "Show me where I am",
									metersUnit: "meters",
									feetUnit: "feet",
									popup: "You are within {distance} {unit} from this point",
									outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
								},
								locateOptions: {
									maxZoom: 1 / 0,
									watch: !0
								}
							},
							initialize: function (e) {
								t.Map.addInitHook(function () {
									this.options.locateControl && this.addControl(this)
								});
								for (var n in e)
									"object" == typeof this.options[n] ? t.extend(this.options[n], e[n]) : this.options[n] = e[n];
								t.extend(this.options.locateOptions, {
									setView: !1
								})
							},
							_activate: function () {
								this.options.setView && (this._locateOnNextLocationFound = !0),
								this._active || this._map.locate(this.options.locateOptions),
								this._active = !0,
								this.options.follow && this._startFollowing(this._map)
							},
							_deactivate: function () {
								this._map.stopLocate(),
								this._map.off("dragstart", this._stopFollowing, this),
								this.options.follow && this._following && this._stopFollowing(this._map)
							},
							drawMarker: function (e) {
								void 0 === this._event.accuracy && (this._event.accuracy = 0);
								var n = this._event.accuracy;
								this._locateOnNextLocationFound && (this._isOutsideMapBounds() ? this.options.onLocationOutsideMapBounds(this) : this.options.keepCurrentZoomLevel || !this.options.drawCircle ? e.panTo([this._event.latitude, this._event.longitude]) : e.fitBounds(this._event.bounds, {
										padding: this.options.circlePadding,
										maxZoom: this.options.keepCurrentZoomLevel ? e.getZoom() : this.options.locateOptions.maxZoom
									}), this._locateOnNextLocationFound = !1);
								var i,
								a;
								if (this.options.drawCircle)
									if (i = this._following ? this.options.followCircleStyle : this.options.circleStyle, this._circle) {
										this._circle.setLatLng(this._event.latlng).setRadius(n);
										for (a in i)
											this._circle.options[a] = i[a]
									} else
										this._circle = t.circle(this._event.latlng, n, i).addTo(this._layer);
								var o,
								r;
								this.options.metric ? (o = n.toFixed(0), r = this.options.strings.metersUnit) : (o = (3.2808399 * n).toFixed(0), r = this.options.strings.feetUnit);
								var s;
								s = this._following ? this.options.followMarkerStyle : this.options.markerStyle,
								this._marker ? this.updateMarker(this._event.latlng, s) : this._marker = this.createMarker(this._event.latlng, s).addTo(this._layer);
								var l = this.options.strings.popup;
								this.options.showPopup && l && this._marker.bindPopup(t.Util.template(l, {
										distance: o,
										unit: r
									}))._popup.setLatLng(this._event.latlng),
								this._toggleContainerStyle()
							},
							createMarker: function (t, e) {
								return this.options.markerClass(t, e)
							},
							updateMarker: function (t, e) {
								this._marker.setLatLng(t);
								for (var n in e)
									this._marker.options[n] = e[n]
							},
							removeMarker: function () {
								this._layer.clearLayers(),
								this._marker = void 0,
								this._circle = void 0
							},
							onAdd: function (e) {
								var n = t.DomUtil.create("div", "leaflet-control-locate leaflet-bar leaflet-control");
								this._layer = new t.LayerGroup,
								this._layer.addTo(e),
								this._event = void 0;
								var i = {};
								return t.extend(i, this.options.markerStyle, this.options.followMarkerStyle),
								this.options.followMarkerStyle = i,
								i = {},
								t.extend(i, this.options.circleStyle, this.options.followCircleStyle),
								this.options.followCircleStyle = i,
								this._link = t.DomUtil.create("a", "leaflet-bar-part leaflet-bar-part-single", n),
								this._link.href = "#",
								this._link.title = this.options.strings.title,
								this._icon = t.DomUtil.create("span", this.options.icon, this._link),
								t.DomEvent.on(this._link, "click", t.DomEvent.stopPropagation).on(this._link, "click", t.DomEvent.preventDefault).on(this._link, "click", function () {
									var t = void 0 === this._event || this._map.getBounds().contains(this._event.latlng) || !this.options.setView || this._isOutsideMapBounds();
									!this.options.remainActive && this._active && t ? this.stop() : this.start()
								}, this).on(this._link, "dblclick", t.DomEvent.stopPropagation),
								this._resetVariables(),
								this.bindEvents(e),
								n
							},
							bindEvents: function (t) {
								t.on("locationfound", this._onLocationFound, this),
								t.on("locationerror", this._onLocationError, this),
								t.on("unload", this.stop, this)
							},
							start: function () {
								this._activate(),
								this._event ? this.drawMarker(this._map) : this._setClasses("requesting")
							},
							stop: function () {
								this._deactivate(),
								this._cleanClasses(),
								this._resetVariables(),
								this.removeMarker()
							},
							_onLocationError: function (t) {
								3 == t.code && this.options.locateOptions.watch || (this.stop(), this.options.onLocationError(t))
							},
							_onLocationFound: function (t) {
								this._event && this._event.latlng.lat === t.latlng.lat && this._event.latlng.lng === t.latlng.lng && this._event.accuracy === t.accuracy || this._active && (this._event = t, this.options.follow && this._following && (this._locateOnNextLocationFound = !0), this.drawMarker(this._map))
							},
							_startFollowing: function () {
								this._map.fire("startfollowing", this),
								this._following = !0,
								this.options.stopFollowingOnDrag && this._map.on("dragstart", this._stopFollowing, this)
							},
							_stopFollowing: function () {
								this._map.fire("stopfollowing", this),
								this._following = !1,
								this.options.stopFollowingOnDrag && this._map.off("dragstart", this._stopFollowing, this),
								this._toggleContainerStyle()
							},
							_isOutsideMapBounds: function () {
								return void 0 !== this._event && (this._map.options.maxBounds && !this._map.options.maxBounds.contains(this._event.latlng))
							},
							_toggleContainerStyle: function () {
								this._container && (this._following ? this._setClasses("following") : this._setClasses("active"))
							},
							_setClasses: function (e) {
								"requesting" == e ? (t.DomUtil.removeClasses(this._container, "active following"), t.DomUtil.addClasses(this._container, "requesting"), t.DomUtil.removeClasses(this._icon, this.options.icon), t.DomUtil.addClasses(this._icon, this.options.iconLoading)) : "active" == e ? (t.DomUtil.removeClasses(this._container, "requesting following"), t.DomUtil.addClasses(this._container, "active"), t.DomUtil.removeClasses(this._icon, this.options.iconLoading), t.DomUtil.addClasses(this._icon, this.options.icon)) : "following" == e && (t.DomUtil.removeClasses(this._container, "requesting"), t.DomUtil.addClasses(this._container, "active following"), t.DomUtil.removeClasses(this._icon, this.options.iconLoading), t.DomUtil.addClasses(this._icon, this.options.icon))
							},
							_cleanClasses: function () {
								t.DomUtil.removeClass(this._container, "requesting"),
								t.DomUtil.removeClass(this._container, "active"),
								t.DomUtil.removeClass(this._container, "following"),
								t.DomUtil.removeClasses(this._icon, this.options.iconLoading),
								t.DomUtil.addClasses(this._icon, this.options.icon)
							},
							_resetVariables: function () {
								this._active = !1,
								this._locateOnNextLocationFound = this.options.setView,
								this._following = !1
							}
						}),
					t.control.locate = function (e) {
						return new t.Control.Locate(e)
					},
					function () {
						var e = function (e, n, i) {
							i = i.split(" "),
							i.forEach(function (i) {
								t.DomUtil[e].call(this, n, i)
							})
						};
						t.DomUtil.addClasses = function (t, n) {
							e("addClass", t, n)
						},
						t.DomUtil.removeClasses = function (t, n) {
							e("removeClass", t, n)
						}
					}
					(),
					t.Control.Locate
				}, window)
			}, {
				leaflet: 31
			}
		],
		31: [function (e, n, i) {
				!function (e, i, a) {
					var o = e.L,
					r = {};
					r.version = "0.7.7",
					"object" == typeof n && "object" == typeof n.exports ? n.exports = r : "function" == typeof t && t.amd && t(r),
					r.noConflict = function () {
						return e.L = o,
						this
					},
					e.L = r,
					r.Util = {
						extend: function (t) {
							var e,
							n,
							i,
							a,
							o = Array.prototype.slice.call(arguments, 1);
							for (n = 0, i = o.length; n < i; n++) {
								a = o[n] || {};
								for (e in a)
									a.hasOwnProperty(e) && (t[e] = a[e])
							}
							return t
						},
						bind: function (t, e) {
							var n = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
							return function () {
								return t.apply(e, n || arguments)
							}
						},
						stamp: function () {
							var t = 0,
							e = "_leaflet_id";
							return function (n) {
								return n[e] = n[e] || ++t,
								n[e]
							}
						}
						(),
						invokeEach: function (t, e, n) {
							var i,
							a;
							if ("object" == typeof t) {
								a = Array.prototype.slice.call(arguments, 3);
								for (i in t)
									e.apply(n, [i, t[i]].concat(a));
								return !0
							}
							return !1
						},
						limitExecByInterval: function (t, e, n) {
							var i,
							a;
							return function o() {
								var r = arguments;
								if (i)
									return void(a = !0);
								i = !0,
								setTimeout(function () {
									i = !1,
									a && (o.apply(n, r), a = !1)
								}, e),
								t.apply(n, r)
							}
						},
						falseFn: function () {
							return !1
						},
						formatNum: function (t, e) {
							var n = Math.pow(10, e || 5);
							return Math.round(t * n) / n
						},
						trim: function (t) {
							return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
						},
						splitWords: function (t) {
							return r.Util.trim(t).split(/\s+/)
						},
						setOptions: function (t, e) {
							return t.options = r.extend({}, t.options, e),
							t.options
						},
						getParamString: function (t, e, n) {
							var i = [];
							for (var a in t)
								i.push(encodeURIComponent(n ? a.toUpperCase() : a) + "=" + encodeURIComponent(t[a]));
							return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
						},
						template: function (t, e) {
							return t.replace(/\{ *([\w_]+) *\}/g, function (t, n) {
								var i = e[n];
								if (void 0 === i)
									throw new Error("No value provided for variable " + t);
								return "function" == typeof i && (i = i(e)),
								i
							})
						},
						isArray: Array.isArray || function (t) {
							return "[object Array]" === Object.prototype.toString.call(t)
						},
						emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
					},
					function () {
						function t(t) {
							var n,
							i,
							a = ["webkit", "moz", "o", "ms"];
							for (n = 0; n < a.length && !i; n++)
								i = e[a[n] + t];
							return i
						}
						function n(t) {
							var n = +new Date,
							a = Math.max(0, 16 - (n - i));
							return i = n + a,
							e.setTimeout(t, a)
						}
						var i = 0,
						a = e.requestAnimationFrame || t("RequestAnimationFrame") || n,
						o = e.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function (t) {
							e.clearTimeout(t)
						};
						r.Util.requestAnimFrame = function (t, i, o, s) {
							if (t = r.bind(t, i), !o || a !== n)
								return a.call(e, t, s);
							t()
						},
						r.Util.cancelAnimFrame = function (t) {
							t && o.call(e, t)
						}
					}
					(),
					r.extend = r.Util.extend,
					r.bind = r.Util.bind,
					r.stamp = r.Util.stamp,
					r.setOptions = r.Util.setOptions,
					r.Class = function () {},
					r.Class.extend = function (t) {
						var e = function () {
							this.initialize && this.initialize.apply(this, arguments),
							this._initHooks && this.callInitHooks()
						},
						n = function () {};
						n.prototype = this.prototype;
						var i = new n;
						i.constructor = e,
						e.prototype = i;
						for (var a in this)
							this.hasOwnProperty(a) && "prototype" !== a && (e[a] = this[a]);
						t.statics && (r.extend(e, t.statics), delete t.statics),
						t.includes && (r.Util.extend.apply(null, [i].concat(t.includes)), delete t.includes),
						t.options && i.options && (t.options = r.extend({}, i.options, t.options)),
						r.extend(i, t),
						i._initHooks = [];
						var o = this;
						return e.__super__ = o.prototype,
						i.callInitHooks = function () {
							if (!this._initHooksCalled) {
								o.prototype.callInitHooks && o.prototype.callInitHooks.call(this),
								this._initHooksCalled = !0;
								for (var t = 0, e = i._initHooks.length; t < e; t++)
									i._initHooks[t].call(this)
							}
						},
						e
					},
					r.Class.include = function (t) {
						r.extend(this.prototype, t)
					},
					r.Class.mergeOptions = function (t) {
						r.extend(this.prototype.options, t)
					},
					r.Class.addInitHook = function (t) {
						var e = Array.prototype.slice.call(arguments, 1),
						n = "function" == typeof t ? t : function () {
							this[t].apply(this, e)
						};
						this.prototype._initHooks = this.prototype._initHooks || [],
						this.prototype._initHooks.push(n)
					};
					var s = "_leaflet_events";
					r.Mixin = {},
					r.Mixin.Events = {
						addEventListener: function (t, e, n) {
							if (r.Util.invokeEach(t, this.addEventListener, this, e, n))
								return this;
							var i,
							a,
							o,
							l,
							d,
							u,
							h,
							c = this[s] = this[s] || {},
							m = n && n !== this && r.stamp(n);
							for (t = r.Util.splitWords(t), i = 0, a = t.length; i < a; i++)
								o = {
									action: e,
									context: n || this
								},
							l = t[i],
							m ? (d = l + "_idx", u = d + "_len", h = c[d] = c[d] || {}, h[m] || (h[m] = [], c[u] = (c[u] || 0) + 1), h[m].push(o)) : (c[l] = c[l] || [], c[l].push(o));
							return this
						},
						hasEventListeners: function (t) {
							var e = this[s];
							return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
						},
						removeEventListener: function (t, e, n) {
							if (!this[s])
								return this;
							if (!t)
								return this.clearAllEventListeners();
							if (r.Util.invokeEach(t, this.removeEventListener, this, e, n))
								return this;
							var i,
							a,
							o,
							l,
							d,
							u,
							h,
							c,
							m,
							f = this[s],
							p = n && n !== this && r.stamp(n);
							for (t = r.Util.splitWords(t), i = 0, a = t.length; i < a; i++)
								if (o = t[i], u = o + "_idx", h = u + "_len", c = f[u], e) {
									if (l = p && c ? c[p] : f[o]) {
										for (d = l.length - 1; d >= 0; d--)
											l[d].action !== e || n && l[d].context !== n || (m = l.splice(d, 1), m[0].action = r.Util.falseFn);
										n && c && 0 === l.length && (delete c[p], f[h]--)
									}
								} else
									delete f[o], delete f[u], delete f[h];
							return this
						},
						clearAllEventListeners: function () {
							return delete this[s],
							this
						},
						fireEvent: function (t, e) {
							if (!this.hasEventListeners(t))
								return this;
							var n,
							i,
							a,
							o,
							l,
							d = r.Util.extend({}, e, {
									type: t,
									target: this
								}),
							u = this[s];
							if (u[t])
								for (n = u[t].slice(), i = 0, a = n.length; i < a; i++)
									n[i].action.call(n[i].context, d);
							o = u[t + "_idx"];
							for (l in o)
								if (n = o[l].slice())
									for (i = 0, a = n.length; i < a; i++)
										n[i].action.call(n[i].context, d);
							return this
						},
						addOneTimeEventListener: function (t, e, n) {
							if (r.Util.invokeEach(t, this.addOneTimeEventListener, this, e, n))
								return this;
							var i = r.bind(function () {
									this.removeEventListener(t, e, n).removeEventListener(t, i, n)
								}, this);
							return this.addEventListener(t, e, n).addEventListener(t, i, n)
						}
					},
					r.Mixin.Events.on = r.Mixin.Events.addEventListener,
					r.Mixin.Events.off = r.Mixin.Events.removeEventListener,
					r.Mixin.Events.once = r.Mixin.Events.addOneTimeEventListener,
					r.Mixin.Events.fire = r.Mixin.Events.fireEvent,
					function () {
						var t = "ActiveXObject" in e,
						n = t && !i.addEventListener,
						a = navigator.userAgent.toLowerCase(),
						o = -1 !== a.indexOf("webkit"),
						s = -1 !== a.indexOf("chrome"),
						l = -1 !== a.indexOf("phantom"),
						d = -1 !== a.indexOf("android"),
						u = -1 !== a.search("android [23]"),
						h = -1 !== a.indexOf("gecko"),
						c = typeof orientation != void 0 + "",
						m = !e.PointerEvent && e.MSPointerEvent,
						f = e.PointerEvent && e.navigator.pointerEnabled || m,
						p = "devicePixelRatio" in e && e.devicePixelRatio > 1 || "matchMedia" in e && e.matchMedia("(min-resolution:144dpi)") && e.matchMedia("(min-resolution:144dpi)").matches,
						g = i.documentElement,
						_ = t && "transition" in g.style,
						y = "WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix && !u,
						v = "MozPerspective" in g.style,
						w = "OTransition" in g.style,
						b = !e.L_DISABLE_3D && (_ || y || v || w) && !l,
						k = !e.L_NO_TOUCH && !l && (f || "ontouchstart" in e || e.DocumentTouch && i instanceof e.DocumentTouch);
						r.Browser = {
							ie: t,
							ielt9: n,
							webkit: o,
							gecko: h && !o && !e.opera && !t,
							android: d,
							android23: u,
							chrome: s,
							ie3d: _,
							webkit3d: y,
							gecko3d: v,
							opera3d: w,
							any3d: b,
							mobile: c,
							mobileWebkit: c && o,
							mobileWebkit3d: c && y,
							mobileOpera: c && e.opera,
							touch: k,
							msPointer: m,
							pointer: f,
							retina: p
						}
					}
					(),
					r.Point = function (t, e, n) {
						this.x = n ? Math.round(t) : t,
						this.y = n ? Math.round(e) : e
					},
					r.Point.prototype = {
						clone: function () {
							return new r.Point(this.x, this.y)
						},
						add: function (t) {
							return this.clone()._add(r.point(t))
						},
						_add: function (t) {
							return this.x += t.x,
							this.y += t.y,
							this
						},
						subtract: function (t) {
							return this.clone()._subtract(r.point(t))
						},
						_subtract: function (t) {
							return this.x -= t.x,
							this.y -= t.y,
							this
						},
						divideBy: function (t) {
							return this.clone()._divideBy(t)
						},
						_divideBy: function (t) {
							return this.x /= t,
							this.y /= t,
							this
						},
						multiplyBy: function (t) {
							return this.clone()._multiplyBy(t)
						},
						_multiplyBy: function (t) {
							return this.x *= t,
							this.y *= t,
							this
						},
						round: function () {
							return this.clone()._round()
						},
						_round: function () {
							return this.x = Math.round(this.x),
							this.y = Math.round(this.y),
							this
						},
						floor: function () {
							return this.clone()._floor()
						},
						_floor: function () {
							return this.x = Math.floor(this.x),
							this.y = Math.floor(this.y),
							this
						},
						distanceTo: function (t) {
							t = r.point(t);
							var e = t.x - this.x,
							n = t.y - this.y;
							return Math.sqrt(e * e + n * n)
						},
						equals: function (t) {
							return t = r.point(t),
							t.x === this.x && t.y === this.y
						},
						contains: function (t) {
							return t = r.point(t),
							Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
						},
						toString: function () {
							return "Point(" + r.Util.formatNum(this.x) + ", " + r.Util.formatNum(this.y) + ")"
						}
					},
					r.point = function (t, e, n) {
						return t instanceof r.Point ? t : r.Util.isArray(t) ? new r.Point(t[0], t[1]) : void 0 === t || null === t ? t : new r.Point(t, e, n)
					},
					r.Bounds = function (t, e) {
						if (t)
							for (var n = e ? [t, e] : t, i = 0, a = n.length; i < a; i++)
								this.extend(n[i])
					},
					r.Bounds.prototype = {
						extend: function (t) {
							return t = r.point(t),
							this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()),
							this
						},
						getCenter: function (t) {
							return new r.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
						},
						getBottomLeft: function () {
							return new r.Point(this.min.x, this.max.y)
						},
						getTopRight: function () {
							return new r.Point(this.max.x, this.min.y)
						},
						getSize: function () {
							return this.max.subtract(this.min)
						},
						contains: function (t) {
							var e,
							n;
							return t = "number" == typeof t[0] || t instanceof r.Point ? r.point(t) : r.bounds(t),
							t instanceof r.Bounds ? (e = t.min, n = t.max) : e = n = t,
							e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
						},
						intersects: function (t) {
							t = r.bounds(t);
							var e = this.min,
							n = this.max,
							i = t.min,
							a = t.max,
							o = a.x >= e.x && i.x <= n.x,
							s = a.y >= e.y && i.y <= n.y;
							return o && s
						},
						isValid: function () {
							return !(!this.min || !this.max)
						}
					},
					r.bounds = function (t, e) {
						return !t || t instanceof r.Bounds ? t : new r.Bounds(t, e)
					},
					r.Transformation = function (t, e, n, i) {
						this._a = t,
						this._b = e,
						this._c = n,
						this._d = i
					},
					r.Transformation.prototype = {
						transform: function (t, e) {
							return this._transform(t.clone(), e)
						},
						_transform: function (t, e) {
							return e = e || 1,
							t.x = e * (this._a * t.x + this._b),
							t.y = e * (this._c * t.y + this._d),
							t
						},
						untransform: function (t, e) {
							return e = e || 1,
							new r.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
						}
					},
					r.DomUtil = {
						get: function (t) {
							return "string" == typeof t ? i.getElementById(t) : t
						},
						getStyle: function (t, e) {
							var n = t.style[e];
							if (!n && t.currentStyle && (n = t.currentStyle[e]), (!n || "auto" === n) && i.defaultView) {
								var a = i.defaultView.getComputedStyle(t, null);
								n = a ? a[e] : null
							}
							return "auto" === n ? null : n
						},
						getViewportOffset: function (t) {
							var e,
							n = 0,
							a = 0,
							o = t,
							s = i.body,
							l = i.documentElement;
							do {
								if (n += o.offsetTop || 0, a += o.offsetLeft || 0, n += parseInt(r.DomUtil.getStyle(o, "borderTopWidth"), 10) || 0, a += parseInt(r.DomUtil.getStyle(o, "borderLeftWidth"), 10) || 0, e = r.DomUtil.getStyle(o, "position"), o.offsetParent === s && "absolute" === e)
									break;
								if ("fixed" === e) {
									n += s.scrollTop || l.scrollTop || 0,
									a += s.scrollLeft || l.scrollLeft || 0;
									break
								}
								if ("relative" === e && !o.offsetLeft) {
									var d = r.DomUtil.getStyle(o, "width"),
									u = r.DomUtil.getStyle(o, "max-width"),
									h = o.getBoundingClientRect();
									"none" === d && "none" === u || (a += h.left + o.clientLeft),
									n += h.top + (s.scrollTop || l.scrollTop || 0);
									break
								}
								o = o.offsetParent
							} while (o);
							o = t;
							do {
								if (o === s)
									break;
								n -= o.scrollTop || 0,
								a -= o.scrollLeft || 0,
								o = o.parentNode
							} while (o);
							return new r.Point(a, n)
						},
						documentIsLtr: function () {
							return r.DomUtil._docIsLtrCached || (r.DomUtil._docIsLtrCached = !0, r.DomUtil._docIsLtr = "ltr" === r.DomUtil.getStyle(i.body, "direction")),
							r.DomUtil._docIsLtr
						},
						create: function (t, e, n) {
							var a = i.createElement(t);
							return a.className = e,
							n && n.appendChild(a),
							a
						},
						hasClass: function (t, e) {
							if (void 0 !== t.classList)
								return t.classList.contains(e);
							var n = r.DomUtil._getClass(t);
							return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
						},
						addClass: function (t, e) {
							if (void 0 !== t.classList)
								for (var n = r.Util.splitWords(e), i = 0, a = n.length; i < a; i++)
									t.classList.add(n[i]);
							else if (!r.DomUtil.hasClass(t, e)) {
								var o = r.DomUtil._getClass(t);
								r.DomUtil._setClass(t, (o ? o + " " : "") + e)
							}
						},
						removeClass: function (t, e) {
							void 0 !== t.classList ? t.classList.remove(e) : r.DomUtil._setClass(t, r.Util.trim((" " + r.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
						},
						_setClass: function (t, e) {
							void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
						},
						_getClass: function (t) {
							return void 0 === t.className.baseVal ? t.className : t.className.baseVal
						},
						setOpacity: function (t, e) {
							if ("opacity" in t.style)
								t.style.opacity = e;
							else if ("filter" in t.style) {
								var n = !1,
								i = "DXImageTransform.Microsoft.Alpha";
								try {
									n = t.filters.item(i)
								} catch (t) {
									if (1 === e)
										return
								}
								e = Math.round(100 * e),
								n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
							}
						},
						testProp: function (t) {
							for (var e = i.documentElement.style, n = 0; n < t.length; n++)
								if (t[n]in e)
									return t[n];
							return !1
						},
						getTranslateString: function (t) {
							var e = r.Browser.webkit3d,
							n = "translate" + (e ? "3d" : "") + "(",
							i = (e ? ",0" : "") + ")";
							return n + t.x + "px," + t.y + "px" + i
						},
						getScaleString: function (t, e) {
							return r.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))) + " scale(" + t + ") "
						},
						setPosition: function (t, e, n) {
							t._leaflet_pos = e,
							!n && r.Browser.any3d ? t.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
						},
						getPosition: function (t) {
							return t._leaflet_pos
						}
					},
					r.DomUtil.TRANSFORM = r.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
					r.DomUtil.TRANSITION = r.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
					r.DomUtil.TRANSITION_END = "webkitTransition" === r.DomUtil.TRANSITION || "OTransition" === r.DomUtil.TRANSITION ? r.DomUtil.TRANSITION + "End" : "transitionend",
					function () {
						if ("onselectstart" in i)
							r.extend(r.DomUtil, {
								disableTextSelection: function () {
									r.DomEvent.on(e, "selectstart", r.DomEvent.preventDefault)
								},
								enableTextSelection: function () {
									r.DomEvent.off(e, "selectstart", r.DomEvent.preventDefault)
								}
							});
						else {
							var t = r.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
							r.extend(r.DomUtil, {
								disableTextSelection: function () {
									if (t) {
										var e = i.documentElement.style;
										this._userSelect = e[t],
										e[t] = "none"
									}
								},
								enableTextSelection: function () {
									t && (i.documentElement.style[t] = this._userSelect, delete this._userSelect)
								}
							})
						}
						r.extend(r.DomUtil, {
							disableImageDrag: function () {
								r.DomEvent.on(e, "dragstart", r.DomEvent.preventDefault)
							},
							enableImageDrag: function () {
								r.DomEvent.off(e, "dragstart", r.DomEvent.preventDefault)
							}
						})
					}
					(),
					r.LatLng = function (t, e, n) {
						if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e))
							throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
						this.lat = t,
						this.lng = e,
						void 0 !== n && (this.alt = parseFloat(n))
					},
					r.extend(r.LatLng, {
						DEG_TO_RAD: Math.PI / 180,
						RAD_TO_DEG: 180 / Math.PI,
						MAX_MARGIN: 1e-9
					}),
					r.LatLng.prototype = {
						equals: function (t) {
							return !!t && (t = r.latLng(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= r.LatLng.MAX_MARGIN)
						},
						toString: function (t) {
							return "LatLng(" + r.Util.formatNum(this.lat, t) + ", " + r.Util.formatNum(this.lng, t) + ")"
						},
						distanceTo: function (t) {
							t = r.latLng(t);
							var e = r.LatLng.DEG_TO_RAD,
							n = (t.lat - this.lat) * e,
							i = (t.lng - this.lng) * e,
							a = this.lat * e,
							o = t.lat * e,
							s = Math.sin(n / 2),
							l = Math.sin(i / 2),
							d = s * s + l * l * Math.cos(a) * Math.cos(o);
							return 12756274 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
						},
						wrap: function (t, e) {
							var n = this.lng;
							return t = t || -180,
							e = e || 180,
							n = (n + e) % (e - t) + (n < t || n === e ? e : t),
							new r.LatLng(this.lat, n)
						}
					},
					r.latLng = function (t, e) {
						return t instanceof r.LatLng ? t : r.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new r.LatLng(t[0], t[1], t[2]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new r.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : void 0 === e ? null : new r.LatLng(t, e)
					},
					r.LatLngBounds = function (t, e) {
						if (t)
							for (var n = e ? [t, e] : t, i = 0, a = n.length; i < a; i++)
								this.extend(n[i])
					},
					r.LatLngBounds.prototype = {
						extend: function (t) {
							if (!t)
								return this;
							var e = r.latLng(t);
							return t = null !== e ? e : r.latLngBounds(t),
							t instanceof r.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new r.LatLng(t.lat, t.lng), this._northEast = new r.LatLng(t.lat, t.lng)) : t instanceof r.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)),
							this
						},
						pad: function (t) {
							var e = this._southWest,
							n = this._northEast,
							i = Math.abs(e.lat - n.lat) * t,
							a = Math.abs(e.lng - n.lng) * t;
							return new r.LatLngBounds(new r.LatLng(e.lat - i, e.lng - a), new r.LatLng(n.lat + i, n.lng + a))
						},
						getCenter: function () {
							return new r.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
						},
						getSouthWest: function () {
							return this._southWest
						},
						getNorthEast: function () {
							return this._northEast
						},
						getNorthWest: function () {
							return new r.LatLng(this.getNorth(), this.getWest())
						},
						getSouthEast: function () {
							return new r.LatLng(this.getSouth(), this.getEast())
						},
						getWest: function () {
							return this._southWest.lng
						},
						getSouth: function () {
							return this._southWest.lat
						},
						getEast: function () {
							return this._northEast.lng
						},
						getNorth: function () {
							return this._northEast.lat
						},
						contains: function (t) {
							t = "number" == typeof t[0] || t instanceof r.LatLng ? r.latLng(t) : r.latLngBounds(t);
							var e,
							n,
							i = this._southWest,
							a = this._northEast;
							return t instanceof r.LatLngBounds ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t,
							e.lat >= i.lat && n.lat <= a.lat && e.lng >= i.lng && n.lng <= a.lng
						},
						intersects: function (t) {
							t = r.latLngBounds(t);
							var e = this._southWest,
							n = this._northEast,
							i = t.getSouthWest(),
							a = t.getNorthEast(),
							o = a.lat >= e.lat && i.lat <= n.lat,
							s = a.lng >= e.lng && i.lng <= n.lng;
							return o && s
						},
						toBBoxString: function () {
							return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
						},
						equals: function (t) {
							return !!t && (t = r.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()))
						},
						isValid: function () {
							return !(!this._southWest || !this._northEast)
						}
					},
					r.latLngBounds = function (t, e) {
						return !t || t instanceof r.LatLngBounds ? t : new r.LatLngBounds(t, e)
					},
					r.Projection = {},
					r.Projection.SphericalMercator = {
						MAX_LATITUDE: 85.0511287798,
						project: function (t) {
							var e = r.LatLng.DEG_TO_RAD,
							n = this.MAX_LATITUDE,
							i = Math.max(Math.min(n, t.lat), -n),
							a = t.lng * e,
							o = i * e;
							return o = Math.log(Math.tan(Math.PI / 4 + o / 2)),
							new r.Point(a, o)
						},
						unproject: function (t) {
							var e = r.LatLng.RAD_TO_DEG,
							n = t.x * e,
							i = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
							return new r.LatLng(i, n)
						}
					},
					r.Projection.LonLat = {
						project: function (t) {
							return new r.Point(t.lng, t.lat)
						},
						unproject: function (t) {
							return new r.LatLng(t.y, t.x)
						}
					},
					r.CRS = {
						latLngToPoint: function (t, e) {
							var n = this.projection.project(t),
							i = this.scale(e);
							return this.transformation._transform(n, i)
						},
						pointToLatLng: function (t, e) {
							var n = this.scale(e),
							i = this.transformation.untransform(t, n);
							return this.projection.unproject(i)
						},
						project: function (t) {
							return this.projection.project(t)
						},
						scale: function (t) {
							return 256 * Math.pow(2, t)
						},
						getSize: function (t) {
							var e = this.scale(t);
							return r.point(e, e)
						}
					},
					r.CRS.Simple = r.extend({}, r.CRS, {
							projection: r.Projection.LonLat,
							transformation: new r.Transformation(1, 0, -1, 0),
							scale: function (t) {
								return Math.pow(2, t)
							}
						}),
					r.CRS.EPSG3857 = r.extend({}, r.CRS, {
							code: "EPSG:3857",
							projection: r.Projection.SphericalMercator,
							transformation: new r.Transformation(.5 / Math.PI, .5,  - .5 / Math.PI, .5),
							project: function (t) {
								return this.projection.project(t).multiplyBy(6378137)
							}
						}),
					r.CRS.EPSG900913 = r.extend({}, r.CRS.EPSG3857, {
							code: "EPSG:900913"
						}),
					r.CRS.EPSG4326 = r.extend({}, r.CRS, {
							code: "EPSG:4326",
							projection: r.Projection.LonLat,
							transformation: new r.Transformation(1 / 360, .5, -1 / 360, .5)
						}),
					r.Map = r.Class.extend({
							includes: r.Mixin.Events,
							options: {
								crs: r.CRS.EPSG3857,
								fadeAnimation: r.DomUtil.TRANSITION && !r.Browser.android23,
								trackResize: !0,
								markerZoomAnimation: r.DomUtil.TRANSITION && r.Browser.any3d
							},
							initialize: function (t, e) {
								e = r.setOptions(this, e),
								this._initContainer(t),
								this._initLayout(),
								this._onResize = r.bind(this._onResize, this),
								this._initEvents(),
								e.maxBounds && this.setMaxBounds(e.maxBounds),
								e.center && void 0 !== e.zoom && this.setView(r.latLng(e.center), e.zoom, {
									reset: !0
								}),
								this._handlers = [],
								this._layers = {},
								this._zoomBoundLayers = {},
								this._tileLayersNum = 0,
								this.callInitHooks(),
								this._addLayers(e.layers)
							},
							setView: function (t, e) {
								return e = void 0 === e ? this.getZoom() : e,
								this._resetView(r.latLng(t), this._limitZoom(e)),
								this
							},
							setZoom: function (t, e) {
								return this._loaded ? this.setView(this.getCenter(), t, {
									zoom: e
								}) : (this._zoom = this._limitZoom(t), this)
							},
							zoomIn: function (t, e) {
								return this.setZoom(this._zoom + (t || 1), e)
							},
							zoomOut: function (t, e) {
								return this.setZoom(this._zoom - (t || 1), e)
							},
							setZoomAround: function (t, e, n) {
								var i = this.getZoomScale(e),
								a = this.getSize().divideBy(2),
								o = t instanceof r.Point ? t : this.latLngToContainerPoint(t),
								s = o.subtract(a).multiplyBy(1 - 1 / i),
								l = this.containerPointToLatLng(a.add(s));
								return this.setView(l, e, {
									zoom: n
								})
							},
							fitBounds: function (t, e) {
								e = e || {},
								t = t.getBounds ? t.getBounds() : r.latLngBounds(t);
								var n = r.point(e.paddingTopLeft || e.padding || [0, 0]),
								i = r.point(e.paddingBottomRight || e.padding || [0, 0]),
								a = this.getBoundsZoom(t, !1, n.add(i));
								a = e.maxZoom ? Math.min(e.maxZoom, a) : a;
								var o = i.subtract(n).divideBy(2),
								s = this.project(t.getSouthWest(), a),
								l = this.project(t.getNorthEast(), a),
								d = this.unproject(s.add(l).divideBy(2).add(o), a);
								return this.setView(d, a, e)
							},
							fitWorld: function (t) {
								return this.fitBounds([[-90, -180], [90, 180]], t)
							},
							panTo: function (t, e) {
								return this.setView(t, this._zoom, {
									pan: e
								})
							},
							panBy: function (t) {
								return this.fire("movestart"),
								this._rawPanBy(r.point(t)),
								this.fire("move"),
								this.fire("moveend")
							},
							setMaxBounds: function (t) {
								return t = r.latLngBounds(t),
								this.options.maxBounds = t,
								t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
							},
							panInsideBounds: function (t, e) {
								var n = this.getCenter(),
								i = this._limitCenter(n, this._zoom, t);
								return n.equals(i) ? this : this.panTo(i, e)
							},
							addLayer: function (t) {
								var e = r.stamp(t);
								return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
							},
							removeLayer: function (t) {
								var e = r.stamp(t);
								return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
										layer: t
									}), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && r.TileLayer && t instanceof r.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
							},
							hasLayer: function (t) {
								return !!t && r.stamp(t)in this._layers
							},
							eachLayer: function (t, e) {
								for (var n in this._layers)
									t.call(e, this._layers[n]);
								return this
							},
							invalidateSize: function (t) {
								if (!this._loaded)
									return this;
								t = r.extend({
										animate: !1,
										pan: !0
									}, !0 === t ? {
										animate: !0
									}
										 : t);
								var e = this.getSize();
								this._sizeChanged = !0,
								this._initialCenter = null;
								var n = this.getSize(),
								i = e.divideBy(2).round(),
								a = n.divideBy(2).round(),
								o = i.subtract(a);
								return o.x || o.y ? (t.animate && t.pan ? this.panBy(o) : (t.pan && this._rawPanBy(o), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(r.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
										oldSize: e,
										newSize: n
									})) : this
							},
							addHandler: function (t, e) {
								if (!e)
									return this;
								var n = this[t] = new e(this);
								return this._handlers.push(n),
								this.options[t] && n.enable(),
								this
							},
							remove: function () {
								this._loaded && this.fire("unload"),
								this._initEvents("off");
								try {
									delete this._container._leaflet
								} catch (t) {
									this._container._leaflet = void 0
								}
								return this._clearPanes(),
								this._clearControlPos && this._clearControlPos(),
								this._clearHandlers(),
								this
							},
							getCenter: function () {
								return this._checkIfLoaded(),
								this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
							},
							getZoom: function () {
								return this._zoom
							},
							getBounds: function () {
								var t = this.getPixelBounds(),
								e = this.unproject(t.getBottomLeft()),
								n = this.unproject(t.getTopRight());
								return new r.LatLngBounds(e, n)
							},
							getMinZoom: function () {
								return void 0 === this.options.minZoom ? void 0 === this._layersMinZoom ? 0 : this._layersMinZoom : this.options.minZoom
							},
							getMaxZoom: function () {
								return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
							},
							getBoundsZoom: function (t, e, n) {
								t = r.latLngBounds(t);
								var i,
								a = this.getMinZoom() - (e ? 1 : 0),
								o = this.getMaxZoom(),
								s = this.getSize(),
								l = t.getNorthWest(),
								d = t.getSouthEast(),
								u = !0;
								n = r.point(n || [0, 0]);
								do {
									a++,
									i = this.project(d, a).subtract(this.project(l, a)).add(n),
									u = e ? i.x < s.x || i.y < s.y : s.contains(i)
								} while (u && a <= o);
								return u && e ? null : e ? a : a - 1
							},
							getSize: function () {
								return this._size && !this._sizeChanged || (this._size = new r.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1),
								this._size.clone()
							},
							getPixelBounds: function () {
								var t = this._getTopLeftPoint();
								return new r.Bounds(t, t.add(this.getSize()))
							},
							getPixelOrigin: function () {
								return this._checkIfLoaded(),
								this._initialTopLeftPoint
							},
							getPanes: function () {
								return this._panes
							},
							getContainer: function () {
								return this._container
							},
							getZoomScale: function (t) {
								var e = this.options.crs;
								return e.scale(t) / e.scale(this._zoom)
							},
							getScaleZoom: function (t) {
								return this._zoom + Math.log(t) / Math.LN2
							},
							project: function (t, e) {
								return e = void 0 === e ? this._zoom : e,
								this.options.crs.latLngToPoint(r.latLng(t), e)
							},
							unproject: function (t, e) {
								return e = void 0 === e ? this._zoom : e,
								this.options.crs.pointToLatLng(r.point(t), e)
							},
							layerPointToLatLng: function (t) {
								var e = r.point(t).add(this.getPixelOrigin());
								return this.unproject(e)
							},
							latLngToLayerPoint: function (t) {
								return this.project(r.latLng(t))._round()._subtract(this.getPixelOrigin())
							},
							containerPointToLayerPoint: function (t) {
								return r.point(t).subtract(this._getMapPanePos())
							},
							layerPointToContainerPoint: function (t) {
								return r.point(t).add(this._getMapPanePos())
							},
							containerPointToLatLng: function (t) {
								var e = this.containerPointToLayerPoint(r.point(t));
								return this.layerPointToLatLng(e)
							},
							latLngToContainerPoint: function (t) {
								return this.layerPointToContainerPoint(this.latLngToLayerPoint(r.latLng(t)))
							},
							mouseEventToContainerPoint: function (t) {
								return r.DomEvent.getMousePosition(t, this._container)
							},
							mouseEventToLayerPoint: function (t) {
								return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
							},
							mouseEventToLatLng: function (t) {
								return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
							},
							_initContainer: function (t) {
								var e = this._container = r.DomUtil.get(t);
								if (!e)
									throw new Error("Map container not found.");
								if (e._leaflet)
									throw new Error("Map container is already initialized.");
								e._leaflet = !0
							},
							_initLayout: function () {
								var t = this._container;
								r.DomUtil.addClass(t, "leaflet-container" + (r.Browser.touch ? " leaflet-touch" : "") + (r.Browser.retina ? " leaflet-retina" : "") + (r.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
								var e = r.DomUtil.getStyle(t, "position");
								"absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
								this._initPanes(),
								this._initControlPos && this._initControlPos()
							},
							_initPanes: function () {
								var t = this._panes = {};
								this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container),
								this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane),
								t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane),
								t.shadowPane = this._createPane("leaflet-shadow-pane"),
								t.overlayPane = this._createPane("leaflet-overlay-pane"),
								t.markerPane = this._createPane("leaflet-marker-pane"),
								t.popupPane = this._createPane("leaflet-popup-pane");
								var e = " leaflet-zoom-hide";
								this.options.markerZoomAnimation || (r.DomUtil.addClass(t.markerPane, e), r.DomUtil.addClass(t.shadowPane, e), r.DomUtil.addClass(t.popupPane, e))
							},
							_createPane: function (t, e) {
								return r.DomUtil.create("div", t, e || this._panes.objectsPane)
							},
							_clearPanes: function () {
								this._container.removeChild(this._mapPane)
							},
							_addLayers: function (t) {
								t = t ? r.Util.isArray(t) ? t : [t] : [];
								for (var e = 0, n = t.length; e < n; e++)
									this.addLayer(t[e])
							},
							_resetView: function (t, e, n, i) {
								var a = this._zoom !== e;
								i || (this.fire("movestart"), a && this.fire("zoomstart")),
								this._zoom = e,
								this._initialCenter = t,
								this._initialTopLeftPoint = this._getNewTopLeftPoint(t),
								n ? this._initialTopLeftPoint._add(this._getMapPanePos()) : r.DomUtil.setPosition(this._mapPane, new r.Point(0, 0)),
								this._tileLayersToLoad = this._tileLayersNum;
								var o = !this._loaded;
								this._loaded = !0,
								this.fire("viewreset", {
									hard: !n
								}),
								o && (this.fire("load"), this.eachLayer(this._layerAdd, this)),
								this.fire("move"),
								(a || i) && this.fire("zoomend"),
								this.fire("moveend", {
									hard: !n
								})
							},
							_rawPanBy: function (t) {
								r.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
							},
							_getZoomSpan: function () {
								return this.getMaxZoom() - this.getMinZoom()
							},
							_updateZoomLevels: function () {
								var t,
								e = 1 / 0,
								n = -1 / 0,
								i = this._getZoomSpan();
								for (t in this._zoomBoundLayers) {
									var a = this._zoomBoundLayers[t];
									isNaN(a.options.minZoom) || (e = Math.min(e, a.options.minZoom)),
									isNaN(a.options.maxZoom) || (n = Math.max(n, a.options.maxZoom))
								}
								void 0 === t ? this._layersMaxZoom = this._layersMinZoom = void 0 : (this._layersMaxZoom = n, this._layersMinZoom = e),
								i !== this._getZoomSpan() && this.fire("zoomlevelschange")
							},
							_panInsideMaxBounds: function () {
								this.panInsideBounds(this.options.maxBounds)
							},
							_checkIfLoaded: function () {
								if (!this._loaded)
									throw new Error("Set map center and zoom first.")
							},
							_initEvents: function (t) {
								if (r.DomEvent) {
									t = t || "on",
									r.DomEvent[t](this._container, "click", this._onMouseClick, this);
									var n,
									i,
									a = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
									for (n = 0, i = a.length; n < i; n++)
										r.DomEvent[t](this._container, a[n], this._fireMouseEvent, this);
									this.options.trackResize && r.DomEvent[t](e, "resize", this._onResize, this)
								}
							},
							_onResize: function () {
								r.Util.cancelAnimFrame(this._resizeRequest),
								this._resizeRequest = r.Util.requestAnimFrame(function () {
										this.invalidateSize({
											debounceMoveend: !0
										})
									}, this, !1, this._container)
							},
							_onMouseClick: function (t) {
								!this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || r.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
							},
							_fireMouseEvent: function (t) {
								if (this._loaded && !r.DomEvent._skipped(t)) {
									var e = t.type;
									if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
										"contextmenu" === e && r.DomEvent.preventDefault(t);
										var n = this.mouseEventToContainerPoint(t),
										i = this.containerPointToLayerPoint(n),
										a = this.layerPointToLatLng(i);
										this.fire(e, {
											latlng: a,
											layerPoint: i,
											containerPoint: n,
											originalEvent: t
										})
									}
								}
							},
							_onTileLayerLoad: function () {
								this._tileLayersToLoad--,
								this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
							},
							_clearHandlers: function () {
								for (var t = 0, e = this._handlers.length; t < e; t++)
									this._handlers[t].disable()
							},
							whenReady: function (t, e) {
								return this._loaded ? t.call(e || this, this) : this.on("load", t, e),
								this
							},
							_layerAdd: function (t) {
								t.onAdd(this),
								this.fire("layeradd", {
									layer: t
								})
							},
							_getMapPanePos: function () {
								return r.DomUtil.getPosition(this._mapPane)
							},
							_moved: function () {
								var t = this._getMapPanePos();
								return t && !t.equals([0, 0])
							},
							_getTopLeftPoint: function () {
								return this.getPixelOrigin().subtract(this._getMapPanePos())
							},
							_getNewTopLeftPoint: function (t, e) {
								var n = this.getSize()._divideBy(2);
								return this.project(t, e)._subtract(n)._round()
							},
							_latLngToNewLayerPoint: function (t, e, n) {
								var i = this._getNewTopLeftPoint(n, e).add(this._getMapPanePos());
								return this.project(t, e)._subtract(i)
							},
							_getCenterLayerPoint: function () {
								return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
							},
							_getCenterOffset: function (t) {
								return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
							},
							_limitCenter: function (t, e, n) {
								if (!n)
									return t;
								var i = this.project(t, e),
								a = this.getSize().divideBy(2),
								o = new r.Bounds(i.subtract(a), i.add(a)),
								s = this._getBoundsOffset(o, n, e);
								return this.unproject(i.add(s), e)
							},
							_limitOffset: function (t, e) {
								if (!e)
									return t;
								var n = this.getPixelBounds(),
								i = new r.Bounds(n.min.add(t), n.max.add(t));
								return t.add(this._getBoundsOffset(i, e))
							},
							_getBoundsOffset: function (t, e, n) {
								var i = this.project(e.getNorthWest(), n).subtract(t.min),
								a = this.project(e.getSouthEast(), n).subtract(t.max),
								o = this._rebound(i.x, -a.x),
								s = this._rebound(i.y, -a.y);
								return new r.Point(o, s)
							},
							_rebound: function (t, e) {
								return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
							},
							_limitZoom: function (t) {
								var e = this.getMinZoom(),
								n = this.getMaxZoom();
								return Math.max(e, Math.min(n, t))
							}
						}),
					r.map = function (t, e) {
						return new r.Map(t, e)
					},
					r.Projection.Mercator = {
						MAX_LATITUDE: 85.0840591556,
						R_MINOR: 6356752.314245179,
						R_MAJOR: 6378137,
						project: function (t) {
							var e = r.LatLng.DEG_TO_RAD,
							n = this.MAX_LATITUDE,
							i = Math.max(Math.min(n, t.lat), -n),
							a = this.R_MAJOR,
							o = this.R_MINOR,
							s = t.lng * e * a,
							l = i * e,
							d = o / a,
							u = Math.sqrt(1 - d * d),
							h = u * Math.sin(l);
							h = Math.pow((1 - h) / (1 + h), .5 * u);
							var c = Math.tan(.5 * (.5 * Math.PI - l)) / h;
							return l = -a * Math.log(c),
							new r.Point(s, l)
						},
						unproject: function (t) {
							for (var e, n = r.LatLng.RAD_TO_DEG, i = this.R_MAJOR, a = this.R_MINOR, o = t.x * n / i, s = a / i, l = Math.sqrt(1 - s * s), d = Math.exp(-t.y / i), u = Math.PI / 2 - 2 * Math.atan(d), h = 15, c = .1; Math.abs(c) > 1e-7 && --h > 0; )
								e = l * Math.sin(u), c = Math.PI / 2 - 2 * Math.atan(d * Math.pow((1 - e) / (1 + e), .5 * l)) - u, u += c;
							return new r.LatLng(u * n, o)
						}
					},
					r.CRS.EPSG3395 = r.extend({}, r.CRS, {
							code: "EPSG:3395",
							projection: r.Projection.Mercator,
							transformation: function () {
								var t = r.Projection.Mercator,
								e = t.R_MAJOR,
								n = .5 / (Math.PI * e);
								return new r.Transformation(n, .5, -n, .5)
							}
							()
						}),
					r.TileLayer = r.Class.extend({
							includes: r.Mixin.Events,
							options: {
								minZoom: 0,
								maxZoom: 18,
								tileSize: 256,
								subdomains: "abc",
								errorTileUrl: "",
								attribution: "",
								zoomOffset: 0,
								opacity: 1,
								unloadInvisibleTiles: r.Browser.mobile,
								updateWhenIdle: r.Browser.mobile
							},
							initialize: function (t, e) {
								e = r.setOptions(this, e),
								e.detectRetina && r.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--),
								e.bounds && (e.bounds = r.latLngBounds(e.bounds)),
								this._url = t;
								var n = this.options.subdomains;
								"string" == typeof n && (this.options.subdomains = n.split(""))
							},
							onAdd: function (t) {
								this._map = t,
								this._animated = t._zoomAnimated,
								this._initContainer(),
								t.on({
									viewreset: this._reset,
									moveend: this._update
								}, this),
								this._animated && t.on({
									zoomanim: this._animateZoom,
									zoomend: this._endZoomAnim
								}, this),
								this.options.updateWhenIdle || (this._limitedUpdate = r.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)),
								this._reset(),
								this._update()
							},
							addTo: function (t) {
								return t.addLayer(this),
								this
							},
							onRemove: function (t) {
								this._container.parentNode.removeChild(this._container),
								t.off({
									viewreset: this._reset,
									moveend: this._update
								}, this),
								this._animated && t.off({
									zoomanim: this._animateZoom,
									zoomend: this._endZoomAnim
								}, this),
								this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this),
								this._container = null,
								this._map = null
							},
							bringToFront: function () {
								var t = this._map._panes.tilePane;
								return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)),
								this
							},
							bringToBack: function () {
								var t = this._map._panes.tilePane;
								return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)),
								this
							},
							getAttribution: function () {
								return this.options.attribution
							},
							getContainer: function () {
								return this._container
							},
							setOpacity: function (t) {
								return this.options.opacity = t,
								this._map && this._updateOpacity(),
								this
							},
							setZIndex: function (t) {
								return this.options.zIndex = t,
								this._updateZIndex(),
								this
							},
							setUrl: function (t, e) {
								return this._url = t,
								e || this.redraw(),
								this
							},
							redraw: function () {
								return this._map && (this._reset({
										hard: !0
									}), this._update()),
								this
							},
							_updateZIndex: function () {
								this._container && void 0 !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
							},
							_setAutoZIndex: function (t, e) {
								var n,
								i,
								a,
								o = t.children,
								r = -e(1 / 0, -1 / 0);
								for (i = 0, a = o.length; i < a; i++)
									o[i] !== this._container && (n = parseInt(o[i].style.zIndex, 10), isNaN(n) || (r = e(r, n)));
								this.options.zIndex = this._container.style.zIndex = (isFinite(r) ? r : 0) + e(1, -1)
							},
							_updateOpacity: function () {
								var t,
								e = this._tiles;
								if (r.Browser.ielt9)
									for (t in e)
										r.DomUtil.setOpacity(e[t], this.options.opacity);
								else
									r.DomUtil.setOpacity(this._container, this.options.opacity)
							},
							_initContainer: function () {
								var t = this._map._panes.tilePane;
								if (!this._container) {
									if (this._container = r.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
										this._bgBuffer = r.DomUtil.create("div", "leaflet-tile-container", this._container),
										this._tileContainer = r.DomUtil.create("div", "leaflet-tile-container", this._container)
									} else
										this._tileContainer = this._container;
									t.appendChild(this._container),
									this.options.opacity < 1 && this._updateOpacity()
								}
							},
							_reset: function (t) {
								for (var e in this._tiles)
									this.fire("tileunload", {
										tile: this._tiles[e]
									});
								this._tiles = {},
								this._tilesToLoad = 0,
								this.options.reuseTiles && (this._unusedTiles = []),
								this._tileContainer.innerHTML = "",
								this._animated && t && t.hard && this._clearBgBuffer(),
								this._initContainer()
							},
							_getTileSize: function () {
								var t = this._map,
								e = t.getZoom() + this.options.zoomOffset,
								n = this.options.maxNativeZoom,
								i = this.options.tileSize;
								return n && e > n && (i = Math.round(t.getZoomScale(e) / t.getZoomScale(n) * i)),
								i
							},
							_update: function () {
								if (this._map) {
									var t = this._map,
									e = t.getPixelBounds(),
									n = t.getZoom(),
									i = this._getTileSize();
									if (!(n > this.options.maxZoom || n < this.options.minZoom)) {
										var a = r.bounds(e.min.divideBy(i)._floor(), e.max.divideBy(i)._floor());
										this._addTilesFromCenterOut(a),
										(this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(a)
									}
								}
							},
							_addTilesFromCenterOut: function (t) {
								var e,
								n,
								a,
								o = [],
								s = t.getCenter();
								for (e = t.min.y; e <= t.max.y; e++)
									for (n = t.min.x; n <= t.max.x; n++)
										a = new r.Point(n, e), this._tileShouldBeLoaded(a) && o.push(a);
								var l = o.length;
								if (0 !== l) {
									o.sort(function (t, e) {
										return t.distanceTo(s) - e.distanceTo(s)
									});
									var d = i.createDocumentFragment();
									for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += l, n = 0; n < l; n++)
										this._addTile(o[n], d);
									this._tileContainer.appendChild(d)
								}
							},
							_tileShouldBeLoaded: function (t) {
								if (t.x + ":" + t.y in this._tiles)
									return !1;
								var e = this.options;
								if (!e.continuousWorld) {
									var n = this._getWrapTileNum();
									if (e.noWrap && (t.x < 0 || t.x >= n.x) || t.y < 0 || t.y >= n.y)
										return !1
								}
								if (e.bounds) {
									var i = this._getTileSize(),
									a = t.multiplyBy(i),
									o = a.add([i, i]),
									r = this._map.unproject(a),
									s = this._map.unproject(o);
									if (e.continuousWorld || e.noWrap || (r = r.wrap(), s = s.wrap()), !e.bounds.intersects([r, s]))
										return !1
								}
								return !0
							},
							_removeOtherTiles: function (t) {
								var e,
								n,
								i,
								a;
								for (a in this._tiles)
									e = a.split(":"), n = parseInt(e[0], 10), i = parseInt(e[1], 10), (n < t.min.x || n > t.max.x || i < t.min.y || i > t.max.y) && this._removeTile(a)
							},
							_removeTile: function (t) {
								var e = this._tiles[t];
								this.fire("tileunload", {
									tile: e,
									url: e.src
								}),
								this.options.reuseTiles ? (r.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e),
								r.Browser.android || (e.onload = null, e.src = r.Util.emptyImageUrl),
								delete this._tiles[t]
							},
							_addTile: function (t, e) {
								var n = this._getTilePos(t),
								i = this._getTile();
								r.DomUtil.setPosition(i, n, r.Browser.chrome),
								this._tiles[t.x + ":" + t.y] = i,
								this._loadTile(i, t),
								i.parentNode !== this._tileContainer && e.appendChild(i)
							},
							_getZoomForUrl: function () {
								var t = this.options,
								e = this._map.getZoom();
								return t.zoomReverse && (e = t.maxZoom - e),
								e += t.zoomOffset,
								t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
							},
							_getTilePos: function (t) {
								var e = this._map.getPixelOrigin(),
								n = this._getTileSize();
								return t.multiplyBy(n).subtract(e)
							},
							getTileUrl: function (t) {
								return r.Util.template(this._url, r.extend({
										s: this._getSubdomain(t),
										z: t.z,
										x: t.x,
										y: t.y
									}, this.options))
							},
							_getWrapTileNum: function () {
								return this._map.options.crs.getSize(this._map.getZoom()).divideBy(this._getTileSize())._floor()
							},
							_adjustTilePoint: function (t) {
								var e = this._getWrapTileNum();
								this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x),
								this.options.tms && (t.y = e.y - t.y - 1),
								t.z = this._getZoomForUrl()
							},
							_getSubdomain: function (t) {
								var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
								return this.options.subdomains[e]
							},
							_getTile: function () {
								if (this.options.reuseTiles && this._unusedTiles.length > 0) {
									var t = this._unusedTiles.pop();
									return this._resetTile(t),
									t
								}
								return this._createTile()
							},
							_resetTile: function () {},
							_createTile: function () {
								var t = r.DomUtil.create("img", "leaflet-tile");
								return t.style.width = t.style.height = this._getTileSize() + "px",
								t.galleryimg = "no",
								t.onselectstart = t.onmousemove = r.Util.falseFn,
								r.Browser.ielt9 && void 0 !== this.options.opacity && r.DomUtil.setOpacity(t, this.options.opacity),
								r.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"),
								t
							},
							_loadTile: function (t, e) {
								t._layer = this,
								t.onload = this._tileOnLoad,
								t.onerror = this._tileOnError,
								this._adjustTilePoint(e),
								t.src = this.getTileUrl(e),
								this.fire("tileloadstart", {
									tile: t,
									url: t.src
								})
							},
							_tileLoaded: function () {
								this._tilesToLoad--,
								this._animated && r.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"),
								this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(r.bind(this._clearBgBuffer, this), 500)))
							},
							_tileOnLoad: function () {
								var t = this._layer;
								this.src !== r.Util.emptyImageUrl && (r.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
										tile: this,
										url: this.src
									})),
								t._tileLoaded()
							},
							_tileOnError: function () {
								var t = this._layer;
								t.fire("tileerror", {
									tile: this,
									url: this.src
								});
								var e = t.options.errorTileUrl;
								e && (this.src = e),
								t._tileLoaded()
							}
						}),
					r.tileLayer = function (t, e) {
						return new r.TileLayer(t, e)
					},
					r.TileLayer.WMS = r.TileLayer.extend({
							defaultWmsParams: {
								service: "WMS",
								request: "GetMap",
								version: "1.1.1",
								layers: "",
								styles: "",
								format: "image/jpeg",
								transparent: !1
							},
							initialize: function (t, e) {
								this._url = t;
								var n = r.extend({}, this.defaultWmsParams),
								i = e.tileSize || this.options.tileSize;
								e.detectRetina && r.Browser.retina ? n.width = n.height = 2 * i : n.width = n.height = i;
								for (var a in e)
									this.options.hasOwnProperty(a) || "crs" === a || (n[a] = e[a]);
								this.wmsParams = n,
								r.setOptions(this, e)
							},
							onAdd: function (t) {
								this._crs = this.options.crs || t.options.crs,
								this._wmsVersion = parseFloat(this.wmsParams.version);
								var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
								this.wmsParams[e] = this._crs.code,
								r.TileLayer.prototype.onAdd.call(this, t)
							},
							getTileUrl: function (t) {
								var e = this._map,
								n = this.options.tileSize,
								i = t.multiplyBy(n),
								a = i.add([n, n]),
								o = this._crs.project(e.unproject(i, t.z)),
								s = this._crs.project(e.unproject(a, t.z)),
								l = this._wmsVersion >= 1.3 && this._crs === r.CRS.EPSG4326 ? [s.y, o.x, o.y, s.x].join(",") : [o.x, s.y, s.x, o.y].join(","),
								d = r.Util.template(this._url, {
										s: this._getSubdomain(t)
									});
								return d + r.Util.getParamString(this.wmsParams, d, !0) + "&BBOX=" + l
							},
							setParams: function (t, e) {
								return r.extend(this.wmsParams, t),
								e || this.redraw(),
								this
							}
						}),
					r.tileLayer.wms = function (t, e) {
						return new r.TileLayer.WMS(t, e)
					},
					r.TileLayer.Canvas = r.TileLayer.extend({
							options: {
								async: !1
							},
							initialize: function (t) {
								r.setOptions(this, t)
							},
							redraw: function () {
								this._map && (this._reset({
										hard: !0
									}), this._update());
								for (var t in this._tiles)
									this._redrawTile(this._tiles[t]);
								return this
							},
							_redrawTile: function (t) {
								this.drawTile(t, t._tilePoint, this._map._zoom)
							},
							_createTile: function () {
								var t = r.DomUtil.create("canvas", "leaflet-tile");
								return t.width = t.height = this.options.tileSize,
								t.onselectstart = t.onmousemove = r.Util.falseFn,
								t
							},
							_loadTile: function (t, e) {
								t._layer = this,
								t._tilePoint = e,
								this._redrawTile(t),
								this.options.async || this.tileDrawn(t)
							},
							drawTile: function () {},
							tileDrawn: function (t) {
								this._tileOnLoad.call(t)
							}
						}),
					r.tileLayer.canvas = function (t) {
						return new r.TileLayer.Canvas(t)
					},
					r.ImageOverlay = r.Class.extend({
							includes: r.Mixin.Events,
							options: {
								opacity: 1
							},
							initialize: function (t, e, n) {
								this._url = t,
								this._bounds = r.latLngBounds(e),
								r.setOptions(this, n)
							},
							onAdd: function (t) {
								this._map = t,
								this._image || this._initImage(),
								t._panes.overlayPane.appendChild(this._image),
								t.on("viewreset", this._reset, this),
								t.options.zoomAnimation && r.Browser.any3d && t.on("zoomanim", this._animateZoom, this),
								this._reset()
							},
							onRemove: function (t) {
								t.getPanes().overlayPane.removeChild(this._image),
								t.off("viewreset", this._reset, this),
								t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
							},
							addTo: function (t) {
								return t.addLayer(this),
								this
							},
							setOpacity: function (t) {
								return this.options.opacity = t,
								this._updateOpacity(),
								this
							},
							bringToFront: function () {
								return this._image && this._map._panes.overlayPane.appendChild(this._image),
								this
							},
							bringToBack: function () {
								var t = this._map._panes.overlayPane;
								return this._image && t.insertBefore(this._image, t.firstChild),
								this
							},
							setUrl: function (t) {
								this._url = t,
								this._image.src = this._url
							},
							getAttribution: function () {
								return this.options.attribution
							},
							_initImage: function () {
								this._image = r.DomUtil.create("img", "leaflet-image-layer"),
								this._map.options.zoomAnimation && r.Browser.any3d ? r.DomUtil.addClass(this._image, "leaflet-zoom-animated") : r.DomUtil.addClass(this._image, "leaflet-zoom-hide"),
								this._updateOpacity(),
								r.extend(this._image, {
									galleryimg: "no",
									onselectstart: r.Util.falseFn,
									onmousemove: r.Util.falseFn,
									onload: r.bind(this._onImageLoad, this),
									src: this._url
								})
							},
							_animateZoom: function (t) {
								var e = this._map,
								n = this._image,
								i = e.getZoomScale(t.zoom),
								a = this._bounds.getNorthWest(),
								o = this._bounds.getSouthEast(),
								s = e._latLngToNewLayerPoint(a, t.zoom, t.center),
								l = e._latLngToNewLayerPoint(o, t.zoom, t.center)._subtract(s),
								d = s._add(l._multiplyBy(.5 * (1 - 1 / i)));
								n.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(d) + " scale(" + i + ") "
							},
							_reset: function () {
								var t = this._image,
								e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
								n = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
								r.DomUtil.setPosition(t, e),
								t.style.width = n.x + "px",
								t.style.height = n.y + "px"
							},
							_onImageLoad: function () {
								this.fire("load")
							},
							_updateOpacity: function () {
								r.DomUtil.setOpacity(this._image, this.options.opacity)
							}
						}),
					r.imageOverlay = function (t, e, n) {
						return new r.ImageOverlay(t, e, n)
					},
					r.Icon = r.Class.extend({
							options: {
								className: ""
							},
							initialize: function (t) {
								r.setOptions(this, t)
							},
							createIcon: function (t) {
								return this._createIcon("icon", t)
							},
							createShadow: function (t) {
								return this._createIcon("shadow", t)
							},
							_createIcon: function (t, e) {
								var n = this._getIconUrl(t);
								if (!n) {
									if ("icon" === t)
										throw new Error("iconUrl not set in Icon options (see the docs).");
									return null
								}
								var i;
								return i = e && "IMG" === e.tagName ? this._createImg(n, e) : this._createImg(n),
								this._setIconStyles(i, t),
								i
							},
							_setIconStyles: function (t, e) {
								var n,
								i = this.options,
								a = r.point(i[e + "Size"]);
								n = "shadow" === e ? r.point(i.shadowAnchor || i.iconAnchor) : r.point(i.iconAnchor),
								!n && a && (n = a.divideBy(2, !0)),
								t.className = "leaflet-marker-" + e + " " + i.className,
								n && (t.style.marginLeft = -n.x + "px", t.style.marginTop = -n.y + "px"),
								a && (t.style.width = a.x + "px", t.style.height = a.y + "px")
							},
							_createImg: function (t, e) {
								return e = e || i.createElement("img"),
								e.src = t,
								e
							},
							_getIconUrl: function (t) {
								return r.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
							}
						}),
					r.icon = function (t) {
						return new r.Icon(t)
					},
					r.Icon.Default = r.Icon.extend({
							options: {
								iconSize: [25, 41],
								iconAnchor: [12, 41],
								popupAnchor: [1, -34],
								shadowSize: [41, 41]
							},
							_getIconUrl: function (t) {
								var e = t + "Url";
								if (this.options[e])
									return this.options[e];
								r.Browser.retina && "icon" === t && (t += "-2x");
								var n = r.Icon.Default.imagePath;
								if (!n)
									throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
								return n + "/marker-" + t + ".png"
							}
						}),
					r.Icon.Default.imagePath = function () {
						var t,
						e,
						n,
						a,
						o = i.getElementsByTagName("script"),
						r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
						for (t = 0, e = o.length; t < e; t++)
							if (n = o[t].src, n.match(r))
								return a = n.split(r)[0], (a ? a + "/" : "") + "images"
					}
					(),
					r.Marker = r.Class.extend({
							includes: r.Mixin.Events,
							options: {
								icon: new r.Icon.Default,
								title: "",
								alt: "",
								clickable: !0,
								draggable: !1,
								keyboard: !0,
								zIndexOffset: 0,
								opacity: 1,
								riseOnHover: !1,
								riseOffset: 250
							},
							initialize: function (t, e) {
								r.setOptions(this, e),
								this._latlng = r.latLng(t)
							},
							onAdd: function (t) {
								this._map = t,
								t.on("viewreset", this.update, this),
								this._initIcon(),
								this.update(),
								this.fire("add"),
								t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
							},
							addTo: function (t) {
								return t.addLayer(this),
								this
							},
							onRemove: function (t) {
								this.dragging && this.dragging.disable(),
								this._removeIcon(),
								this._removeShadow(),
								this.fire("remove"),
								t.off({
									viewreset: this.update,
									zoomanim: this._animateZoom
								}, this),
								this._map = null
							},
							getLatLng: function () {
								return this._latlng
							},
							setLatLng: function (t) {
								return this._latlng = r.latLng(t),
								this.update(),
								this.fire("move", {
									latlng: this._latlng
								})
							},
							setZIndexOffset: function (t) {
								return this.options.zIndexOffset = t,
								this.update(),
								this
							},
							setIcon: function (t) {
								return this.options.icon = t,
								this._map && (this._initIcon(), this.update()),
								this._popup && this.bindPopup(this._popup),
								this
							},
							update: function () {
								return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng).round()),
								this
							},
							_initIcon: function () {
								var t = this.options,
								e = this._map,
								n = e.options.zoomAnimation && e.options.markerZoomAnimation,
								i = n ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
								a = t.icon.createIcon(this._icon),
								o = !1;
								a !== this._icon && (this._icon && this._removeIcon(), o = !0, t.title && (a.title = t.title), t.alt && (a.alt = t.alt)),
								r.DomUtil.addClass(a, i),
								t.keyboard && (a.tabIndex = "0"),
								this._icon = a,
								this._initInteraction(),
								t.riseOnHover && r.DomEvent.on(a, "mouseover", this._bringToFront, this).on(a, "mouseout", this._resetZIndex, this);
								var s = t.icon.createShadow(this._shadow),
								l = !1;
								s !== this._shadow && (this._removeShadow(), l = !0),
								s && r.DomUtil.addClass(s, i),
								this._shadow = s,
								t.opacity < 1 && this._updateOpacity();
								var d = this._map._panes;
								o && d.markerPane.appendChild(this._icon),
								s && l && d.shadowPane.appendChild(this._shadow)
							},
							_removeIcon: function () {
								this.options.riseOnHover && r.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex),
								this._map._panes.markerPane.removeChild(this._icon),
								this._icon = null
							},
							_removeShadow: function () {
								this._shadow && this._map._panes.shadowPane.removeChild(this._shadow),
								this._shadow = null
							},
							_setPos: function (t) {
								r.DomUtil.setPosition(this._icon, t),
								this._shadow && r.DomUtil.setPosition(this._shadow, t),
								this._zIndex = t.y + this.options.zIndexOffset,
								this._resetZIndex()
							},
							_updateZIndex: function (t) {
								this._icon.style.zIndex = this._zIndex + t
							},
							_animateZoom: function (t) {
								var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
								this._setPos(e)
							},
							_initInteraction: function () {
								if (this.options.clickable) {
									var t = this._icon,
									e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
									r.DomUtil.addClass(t, "leaflet-clickable"),
									r.DomEvent.on(t, "click", this._onMouseClick, this),
									r.DomEvent.on(t, "keypress", this._onKeyPress, this);
									for (var n = 0; n < e.length; n++)
										r.DomEvent.on(t, e[n], this._fireMouseEvent, this);
									r.Handler.MarkerDrag && (this.dragging = new r.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
								}
							},
							_onMouseClick: function (t) {
								var e = this.dragging && this.dragging.moved();
								(this.hasEventListeners(t.type) || e) && r.DomEvent.stopPropagation(t),
								e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
									originalEvent: t,
									latlng: this._latlng
								})
							},
							_onKeyPress: function (t) {
								13 === t.keyCode && this.fire("click", {
									originalEvent: t,
									latlng: this._latlng
								})
							},
							_fireMouseEvent: function (t) {
								this.fire(t.type, {
									originalEvent: t,
									latlng: this._latlng
								}),
								"contextmenu" === t.type && this.hasEventListeners(t.type) && r.DomEvent.preventDefault(t),
								"mousedown" !== t.type ? r.DomEvent.stopPropagation(t) : r.DomEvent.preventDefault(t)
							},
							setOpacity: function (t) {
								return this.options.opacity = t,
								this._map && this._updateOpacity(),
								this
							},
							_updateOpacity: function () {
								r.DomUtil.setOpacity(this._icon, this.options.opacity),
								this._shadow && r.DomUtil.setOpacity(this._shadow, this.options.opacity)
							},
							_bringToFront: function () {
								this._updateZIndex(this.options.riseOffset)
							},
							_resetZIndex: function () {
								this._updateZIndex(0)
							}
						}),
					r.marker = function (t, e) {
						return new r.Marker(t, e)
					},
					r.DivIcon = r.Icon.extend({
							options: {
								iconSize: [12, 12],
								className: "leaflet-div-icon",
								html: !1
							},
							createIcon: function (t) {
								var e = t && "DIV" === t.tagName ? t : i.createElement("div"),
								n = this.options;
								return !1 !== n.html ? e.innerHTML = n.html : e.innerHTML = "",
								n.bgPos && (e.style.backgroundPosition = -n.bgPos.x + "px " + -n.bgPos.y + "px"),
								this._setIconStyles(e, "icon"),
								e
							},
							createShadow: function () {
								return null
							}
						}),
					r.divIcon = function (t) {
						return new r.DivIcon(t)
					},
					r.Map.mergeOptions({
						closePopupOnClick: !0
					}),
					r.Popup = r.Class.extend({
							includes: r.Mixin.Events,
							options: {
								minWidth: 50,
								maxWidth: 300,
								autoPan: !0,
								closeButton: !0,
								offset: [0, 7],
								autoPanPadding: [5, 5],
								keepInView: !1,
								className: "",
								zoomAnimation: !0
							},
							initialize: function (t, e) {
								r.setOptions(this, t),
								this._source = e,
								this._animated = r.Browser.any3d && this.options.zoomAnimation,
								this._isOpen = !1
							},
							onAdd: function (t) {
								this._map = t,
								this._container || this._initLayout();
								var e = t.options.fadeAnimation;
								e && r.DomUtil.setOpacity(this._container, 0),
								t._panes.popupPane.appendChild(this._container),
								t.on(this._getEvents(), this),
								this.update(),
								e && r.DomUtil.setOpacity(this._container, 1),
								this.fire("open"),
								t.fire("popupopen", {
									popup: this
								}),
								this._source && this._source.fire("popupopen", {
									popup: this
								})
							},
							addTo: function (t) {
								return t.addLayer(this),
								this
							},
							openOn: function (t) {
								return t.openPopup(this),
								this
							},
							onRemove: function (t) {
								t._panes.popupPane.removeChild(this._container),
								r.Util.falseFn(this._container.offsetWidth),
								t.off(this._getEvents(), this),
								t.options.fadeAnimation && r.DomUtil.setOpacity(this._container, 0),
								this._map = null,
								this.fire("close"),
								t.fire("popupclose", {
									popup: this
								}),
								this._source && this._source.fire("popupclose", {
									popup: this
								})
							},
							getLatLng: function () {
								return this._latlng
							},
							setLatLng: function (t) {
								return this._latlng = r.latLng(t),
								this._map && (this._updatePosition(), this._adjustPan()),
								this
							},
							getContent: function () {
								return this._content
							},
							setContent: function (t) {
								return this._content = t,
								this.update(),
								this
							},
							update: function () {
								this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
							},
							_getEvents: function () {
								var t = {
									viewreset: this._updatePosition
								};
								return this._animated && (t.zoomanim = this._zoomAnimation),
								("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
								this.options.keepInView && (t.moveend = this._adjustPan),
								t
							},
							_close: function () {
								this._map && this._map.closePopup(this)
							},
							_initLayout: function () {
								var t,
								e = "leaflet-popup",
								n = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
								i = this._container = r.DomUtil.create("div", n);
								this.options.closeButton && (t = this._closeButton = r.DomUtil.create("a", e + "-close-button", i), t.href = "#close", t.innerHTML = "&#215;", r.DomEvent.disableClickPropagation(t), r.DomEvent.on(t, "click", this._onCloseButtonClick, this));
								var a = this._wrapper = r.DomUtil.create("div", e + "-content-wrapper", i);
								r.DomEvent.disableClickPropagation(a),
								this._contentNode = r.DomUtil.create("div", e + "-content", a),
								r.DomEvent.disableScrollPropagation(this._contentNode),
								r.DomEvent.on(a, "contextmenu", r.DomEvent.stopPropagation),
								this._tipContainer = r.DomUtil.create("div", e + "-tip-container", i),
								this._tip = r.DomUtil.create("div", e + "-tip", this._tipContainer)
							},
							_updateContent: function () {
								if (this._content) {
									if ("string" == typeof this._content)
										this._contentNode.innerHTML = this._content;
									else {
										for (; this._contentNode.hasChildNodes(); )
											this._contentNode.removeChild(this._contentNode.firstChild);
										this._contentNode.appendChild(this._content)
									}
									this.fire("contentupdate")
								}
							},
							_updateLayout: function () {
								var t = this._contentNode,
								e = t.style;
								e.width = "",
								e.whiteSpace = "nowrap";
								var n = t.offsetWidth;
								n = Math.min(n, this.options.maxWidth),
								n = Math.max(n, this.options.minWidth),
								e.width = n + 1 + "px",
								e.whiteSpace = "",
								e.height = "";
								var i = t.offsetHeight,
								a = this.options.maxHeight;
								a && i > a ? (e.height = a + "px", r.DomUtil.addClass(t, "leaflet-popup-scrolled")) : r.DomUtil.removeClass(t, "leaflet-popup-scrolled"),
								this._containerWidth = this._container.offsetWidth
							},
							_updatePosition: function () {
								if (this._map) {
									var t = this._map.latLngToLayerPoint(this._latlng),
									e = this._animated,
									n = r.point(this.options.offset);
									e && r.DomUtil.setPosition(this._container, t),
									this._containerBottom = -n.y - (e ? 0 : t.y),
									this._containerLeft = -Math.round(this._containerWidth / 2) + n.x + (e ? 0 : t.x),
									this._container.style.bottom = this._containerBottom + "px",
									this._container.style.left = this._containerLeft + "px"
								}
							},
							_zoomAnimation: function (t) {
								var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
								r.DomUtil.setPosition(this._container, e)
							},
							_adjustPan: function () {
								if (this.options.autoPan) {
									var t = this._map,
									e = this._container.offsetHeight,
									n = this._containerWidth,
									i = new r.Point(this._containerLeft, -e - this._containerBottom);
									this._animated && i._add(r.DomUtil.getPosition(this._container));
									var a = t.layerPointToContainerPoint(i),
									o = r.point(this.options.autoPanPadding),
									s = r.point(this.options.autoPanPaddingTopLeft || o),
									l = r.point(this.options.autoPanPaddingBottomRight || o),
									d = t.getSize(),
									u = 0,
									h = 0;
									a.x + n + l.x > d.x && (u = a.x + n - d.x + l.x),
									a.x - u - s.x < 0 && (u = a.x - s.x),
									a.y + e + l.y > d.y && (h = a.y + e - d.y + l.y),
									a.y - h - s.y < 0 && (h = a.y - s.y),
									(u || h) && t.fire("autopanstart").panBy([u, h])
								}
							},
							_onCloseButtonClick: function (t) {
								this._close(),
								r.DomEvent.stop(t)
							}
						}),
					r.popup = function (t, e) {
						return new r.Popup(t, e)
					},
					r.Map.include({
						openPopup: function (t, e, n) {
							if (this.closePopup(), !(t instanceof r.Popup)) {
								var i = t;
								t = new r.Popup(n).setLatLng(e).setContent(i)
							}
							return t._isOpen = !0,
							this._popup = t,
							this.addLayer(t)
						},
						closePopup: function (t) {
							return t && t !== this._popup || (t = this._popup, this._popup = null),
							t && (this.removeLayer(t), t._isOpen = !1),
							this
						}
					}),
					r.Marker.include({
						openPopup: function () {
							return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)),
							this
						},
						closePopup: function () {
							return this._popup && this._popup._close(),
							this
						},
						togglePopup: function () {
							return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()),
							this
						},
						bindPopup: function (t, e) {
							var n = r.point(this.options.icon.options.popupAnchor || [0, 0]);
							return n = n.add(r.Popup.prototype.options.offset),
							e && e.offset && (n = n.add(e.offset)),
							e = r.extend({
									offset: n
								}, e),
							this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0),
							t instanceof r.Popup ? (r.setOptions(t, e), this._popup = t, t._source = this) : this._popup = new r.Popup(e, this).setContent(t),
							this
						},
						setPopupContent: function (t) {
							return this._popup && this._popup.setContent(t),
							this
						},
						unbindPopup: function () {
							return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1),
							this
						},
						getPopup: function () {
							return this._popup
						},
						_movePopup: function (t) {
							this._popup.setLatLng(t.latlng)
						}
					}),
					r.LayerGroup = r.Class.extend({
							initialize: function (t) {
								this._layers = {};
								var e,
								n;
								if (t)
									for (e = 0, n = t.length; e < n; e++)
										this.addLayer(t[e])
							},
							addLayer: function (t) {
								var e = this.getLayerId(t);
								return this._layers[e] = t,
								this._map && this._map.addLayer(t),
								this
							},
							removeLayer: function (t) {
								var e = t in this._layers ? t : this.getLayerId(t);
								return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
								delete this._layers[e],
								this
							},
							hasLayer: function (t) {
								return !!t && (t in this._layers || this.getLayerId(t)in this._layers)
							},
							clearLayers: function () {
								return this.eachLayer(this.removeLayer, this),
								this
							},
							invoke: function (t) {
								var e,
								n,
								i = Array.prototype.slice.call(arguments, 1);
								for (e in this._layers)
									n = this._layers[e], n[t] && n[t].apply(n, i);
								return this
							},
							onAdd: function (t) {
								this._map = t,
								this.eachLayer(t.addLayer, t)
							},
							onRemove: function (t) {
								this.eachLayer(t.removeLayer, t),
								this._map = null
							},
							addTo: function (t) {
								return t.addLayer(this),
								this
							},
							eachLayer: function (t, e) {
								for (var n in this._layers)
									t.call(e, this._layers[n]);
								return this
							},
							getLayer: function (t) {
								return this._layers[t]
							},
							getLayers: function () {
								var t = [];
								for (var e in this._layers)
									t.push(this._layers[e]);
								return t
							},
							setZIndex: function (t) {
								return this.invoke("setZIndex", t)
							},
							getLayerId: function (t) {
								return r.stamp(t)
							}
						}),
					r.layerGroup = function (t) {
						return new r.LayerGroup(t)
					},
					r.FeatureGroup = r.LayerGroup.extend({
							includes: r.Mixin.Events,
							statics: {
								EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
							},
							addLayer: function (t) {
								return this.hasLayer(t) ? this : ("on" in t && t.on(r.FeatureGroup.EVENTS, this._propagateEvent, this), r.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
										layer: t
									}))
							},
							removeLayer: function (t) {
								return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), "off" in t && t.off(r.FeatureGroup.EVENTS, this._propagateEvent, this), r.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
										layer: t
									})) : this
							},
							bindPopup: function (t, e) {
								return this._popupContent = t,
								this._popupOptions = e,
								this.invoke("bindPopup", t, e)
							},
							openPopup: function (t) {
								for (var e in this._layers) {
									this._layers[e].openPopup(t);
									break
								}
								return this
							},
							setStyle: function (t) {
								return this.invoke("setStyle", t)
							},
							bringToFront: function () {
								return this.invoke("bringToFront")
							},
							bringToBack: function () {
								return this.invoke("bringToBack")
							},
							getBounds: function () {
								var t = new r.LatLngBounds;
								return this.eachLayer(function (e) {
									t.extend(e instanceof r.Marker ? e.getLatLng() : e.getBounds())
								}),
								t
							},
							_propagateEvent: function (t) {
								t = r.extend({
										layer: t.target,
										target: this
									}, t),
								this.fire(t.type, t)
							}
						}),
					r.featureGroup = function (t) {
						return new r.FeatureGroup(t)
					},
					r.Path = r.Class.extend({
							includes: [r.Mixin.Events],
							statics: {
								CLIP_PADDING: function () {
									var t = r.Browser.mobile ? 1280 : 2e3,
									n = (t / Math.max(e.outerWidth, e.outerHeight) - 1) / 2;
									return Math.max(0, Math.min(.5, n))
								}
								()
							},
							options: {
								stroke: !0,
								color: "#0033ff",
								dashArray: null,
								lineCap: null,
								lineJoin: null,
								weight: 5,
								opacity: .5,
								fill: !1,
								fillColor: null,
								fillOpacity: .2,
								clickable: !0
							},
							initialize: function (t) {
								r.setOptions(this, t)
							},
							onAdd: function (t) {
								this._map = t,
								this._container || (this._initElements(), this._initEvents()),
								this.projectLatlngs(),
								this._updatePath(),
								this._container && this._map._pathRoot.appendChild(this._container),
								this.fire("add"),
								t.on({
									viewreset: this.projectLatlngs,
									moveend: this._updatePath
								}, this)
							},
							addTo: function (t) {
								return t.addLayer(this),
								this
							},
							onRemove: function (t) {
								t._pathRoot.removeChild(this._container),
								this.fire("remove"),
								this._map = null,
								r.Browser.vml && (this._container = null, this._stroke = null, this._fill = null),
								t.off({
									viewreset: this.projectLatlngs,
									moveend: this._updatePath
								}, this)
							},
							projectLatlngs: function () {},
							setStyle: function (t) {
								return r.setOptions(this, t),
								this._container && this._updateStyle(),
								this
							},
							redraw: function () {
								return this._map && (this.projectLatlngs(), this._updatePath()),
								this
							}
						}),
					r.Map.include({
						_updatePathViewport: function () {
							var t = r.Path.CLIP_PADDING,
							e = this.getSize(),
							n = r.DomUtil.getPosition(this._mapPane),
							i = n.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
							a = i.add(e.multiplyBy(1 + 2 * t)._round());
							this._pathViewport = new r.Bounds(i, a)
						}
					}),
					r.Path.SVG_NS = "http://www.w3.org/2000/svg",
					r.Browser.svg = !(!i.createElementNS || !i.createElementNS(r.Path.SVG_NS, "svg").createSVGRect),
					r.Path = r.Path.extend({
							statics: {
								SVG: r.Browser.svg
							},
							bringToFront: function () {
								var t = this._map._pathRoot,
								e = this._container;
								return e && t.lastChild !== e && t.appendChild(e),
								this
							},
							bringToBack: function () {
								var t = this._map._pathRoot,
								e = this._container,
								n = t.firstChild;
								return e && n !== e && t.insertBefore(e, n),
								this
							},
							getPathString: function () {},
							_createElement: function (t) {
								return i.createElementNS(r.Path.SVG_NS, t)
							},
							_initElements: function () {
								this._map._initPathRoot(),
								this._initPath(),
								this._initStyle()
							},
							_initPath: function () {
								this._container = this._createElement("g"),
								this._path = this._createElement("path"),
								this.options.className && r.DomUtil.addClass(this._path, this.options.className),
								this._container.appendChild(this._path)
							},
							_initStyle: function () {
								this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")),
								this.options.fill && this._path.setAttribute("fill-rule", "evenodd"),
								this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents),
								this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"),
								this._updateStyle()
							},
							_updateStyle: function () {
								this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"),
								this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
							},
							_updatePath: function () {
								var t = this.getPathString();
								t || (t = "M0 0"),
								this._path.setAttribute("d", t)
							},
							_initEvents: function () {
								if (this.options.clickable) {
									!r.Browser.svg && r.Browser.vml || r.DomUtil.addClass(this._path, "leaflet-clickable"),
									r.DomEvent.on(this._container, "click", this._onMouseClick, this);
									for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++)
										r.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
								}
							},
							_onMouseClick: function (t) {
								this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
							},
							_fireMouseEvent: function (t) {
								if (this._map && this.hasEventListeners(t.type)) {
									var e = this._map,
									n = e.mouseEventToContainerPoint(t),
									i = e.containerPointToLayerPoint(n),
									a = e.layerPointToLatLng(i);
									this.fire(t.type, {
										latlng: a,
										layerPoint: i,
										containerPoint: n,
										originalEvent: t
									}),
									"contextmenu" === t.type && r.DomEvent.preventDefault(t),
									"mousemove" !== t.type && r.DomEvent.stopPropagation(t)
								}
							}
						}),
					r.Map.include({
						_initPathRoot: function () {
							this._pathRoot || (this._pathRoot = r.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && r.Browser.any3d ? (r.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
										zoomanim: this._animatePathZoom,
										zoomend: this._endPathZoom
									})) : r.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
						},
						_animatePathZoom: function (t) {
							var e = this.getZoomScale(t.zoom),
							n = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
							this._pathRoot.style[r.DomUtil.TRANSFORM] = r.DomUtil.getTranslateString(n) + " scale(" + e + ") ",
							this._pathZooming = !0
						},
						_endPathZoom: function () {
							this._pathZooming = !1
						},
						_updateSvgViewport: function () {
							if (!this._pathZooming) {
								this._updatePathViewport();
								var t = this._pathViewport,
								e = t.min,
								n = t.max,
								i = n.x - e.x,
								a = n.y - e.y,
								o = this._pathRoot,
								s = this._panes.overlayPane;
								r.Browser.mobileWebkit && s.removeChild(o),
								r.DomUtil.setPosition(o, e),
								o.setAttribute("width", i),
								o.setAttribute("height", a),
								o.setAttribute("viewBox", [e.x, e.y, i, a].join(" ")),
								r.Browser.mobileWebkit && s.appendChild(o)
							}
						}
					}),
					r.Path.include({
						bindPopup: function (t, e) {
							return t instanceof r.Popup ? this._popup = t : (this._popup && !e || (this._popup = new r.Popup(e, this)), this._popup.setContent(t)),
							this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0),
							this
						},
						unbindPopup: function () {
							return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1),
							this
						},
						openPopup: function (t) {
							return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
									latlng: t
								})),
							this
						},
						closePopup: function () {
							return this._popup && this._popup._close(),
							this
						},
						_openPopup: function (t) {
							this._popup.setLatLng(t.latlng),
							this._map.openPopup(this._popup)
						}
					}),
					r.Browser.vml = !r.Browser.svg && function () {
						try {
							var t = i.createElement("div");
							t.innerHTML = '<v:shape adj="1"/>';
							var e = t.firstChild;
							return e.style.behavior = "url(#default#VML)",
							e && "object" == typeof e.adj
						} catch (t) {
							return !1
						}
					}
					(),
					r.Path = r.Browser.svg || !r.Browser.vml ? r.Path : r.Path.extend({
							statics: {
								VML: !0,
								CLIP_PADDING: .02
							},
							_createElement: function () {
								try {
									return i.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
									function (t) {
										return i.createElement("<lvml:" + t + ' class="lvml">')
									}
								} catch (t) {
									return function (t) {
										return i.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
									}
								}
							}
							(),
							_initPath: function () {
								var t = this._container = this._createElement("shape");
								r.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")),
								this.options.clickable && r.DomUtil.addClass(t, "leaflet-clickable"),
								t.coordsize = "1 1",
								this._path = this._createElement("path"),
								t.appendChild(this._path),
								this._map._pathRoot.appendChild(t)
							},
							_initStyle: function () {
								this._updateStyle()
							},
							_updateStyle: function () {
								var t = this._stroke,
								e = this._fill,
								n = this.options,
								i = this._container;
								i.stroked = n.stroke,
								i.filled = n.fill,
								n.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap = "round", i.appendChild(t)), t.weight = n.weight + "px", t.color = n.color, t.opacity = n.opacity, n.dashArray ? t.dashStyle = r.Util.isArray(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : t.dashStyle = "", n.lineCap && (t.endcap = n.lineCap.replace("butt", "flat")), n.lineJoin && (t.joinstyle = n.lineJoin)) : t && (i.removeChild(t), this._stroke = null),
								n.fill ? (e || (e = this._fill = this._createElement("fill"), i.appendChild(e)), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (i.removeChild(e), this._fill = null)
							},
							_updatePath: function () {
								var t = this._container.style;
								t.display = "none",
								this._path.v = this.getPathString() + " ",
								t.display = ""
							}
						}),
					r.Map.include(r.Browser.svg || !r.Browser.vml ? {}
						 : {
						_initPathRoot: function () {
							if (!this._pathRoot) {
								var t = this._pathRoot = i.createElement("div");
								t.className = "leaflet-vml-container",
								this._panes.overlayPane.appendChild(t),
								this.on("moveend", this._updatePathViewport),
								this._updatePathViewport()
							}
						}
					}),
					r.Browser.canvas = function () {
						return !!i.createElement("canvas").getContext
					}
					(),
					r.Path = r.Path.SVG && !e.L_PREFER_CANVAS || !r.Browser.canvas ? r.Path : r.Path.extend({
							statics: {
								CANVAS: !0,
								SVG: !1
							},
							redraw: function () {
								return this._map && (this.projectLatlngs(), this._requestUpdate()),
								this
							},
							setStyle: function (t) {
								return r.setOptions(this, t),
								this._map && (this._updateStyle(), this._requestUpdate()),
								this
							},
							onRemove: function (t) {
								t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this),
								this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)),
								this._requestUpdate(),
								this.fire("remove"),
								this._map = null
							},
							_requestUpdate: function () {
								this._map && !r.Path._updateRequest && (r.Path._updateRequest = r.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
							},
							_fireMapMoveEnd: function () {
								r.Path._updateRequest = null,
								this.fire("moveend")
							},
							_initElements: function () {
								this._map._initPathRoot(),
								this._ctx = this._map._canvasCtx
							},
							_updateStyle: function () {
								var t = this.options;
								t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color),
								t.fill && (this._ctx.fillStyle = t.fillColor || t.color),
								t.lineCap && (this._ctx.lineCap = t.lineCap),
								t.lineJoin && (this._ctx.lineJoin = t.lineJoin)
							},
							_drawPath: function () {
								var t,
								e,
								n,
								i,
								a,
								o;
								for (this._ctx.beginPath(), t = 0, n = this._parts.length; t < n; t++) {
									for (e = 0, i = this._parts[t].length; e < i; e++)
										a = this._parts[t][e], o = (0 === e ? "move" : "line") + "To", this._ctx[o](a.x, a.y);
									this instanceof r.Polygon && this._ctx.closePath()
								}
							},
							_checkIfEmpty: function () {
								return !this._parts.length
							},
							_updatePath: function () {
								if (!this._checkIfEmpty()) {
									var t = this._ctx,
									e = this.options;
									this._drawPath(),
									t.save(),
									this._updateStyle(),
									e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule || "evenodd")),
									e.stroke && (t.globalAlpha = e.opacity, t.stroke()),
									t.restore()
								}
							},
							_initEvents: function () {
								this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click dblclick contextmenu", this._fireMouseEvent, this))
							},
							_fireMouseEvent: function (t) {
								this._containsPoint(t.layerPoint) && this.fire(t.type, t)
							},
							_onMouseMove: function (t) {
								this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
							}
						}),
					r.Map.include(r.Path.SVG && !e.L_PREFER_CANVAS || !r.Browser.canvas ? {}
						 : {
						_initPathRoot: function () {
							var t,
							e = this._pathRoot;
							e || (e = this._pathRoot = i.createElement("canvas"), e.style.position = "absolute", t = this._canvasCtx = e.getContext("2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(e),
								this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
						},
						_updateCanvasViewport: function () {
							if (!this._pathZooming) {
								this._updatePathViewport();
								var t = this._pathViewport,
								e = t.min,
								n = t.max.subtract(e),
								i = this._pathRoot;
								r.DomUtil.setPosition(i, e),
								i.width = n.x,
								i.height = n.y,
								i.getContext("2d").translate(-e.x, -e.y)
							}
						}
					}),
					r.LineUtil = {
						simplify: function (t, e) {
							if (!e || !t.length)
								return t.slice();
							var n = e * e;
							return t = this._reducePoints(t, n),
							t = this._simplifyDP(t, n)
						},
						pointToSegmentDistance: function (t, e, n) {
							return Math.sqrt(this._sqClosestPointOnSegment(t, e, n, !0))
						},
						closestPointOnSegment: function (t, e, n) {
							return this._sqClosestPointOnSegment(t, e, n)
						},
						_simplifyDP: function (t, e) {
							var n = t.length,
							i = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
							a = new i(n);
							a[0] = a[n - 1] = 1,
							this._simplifyDPStep(t, a, e, 0, n - 1);
							var o,
							r = [];
							for (o = 0; o < n; o++)
								a[o] && r.push(t[o]);
							return r
						},
						_simplifyDPStep: function (t, e, n, i, a) {
							var o,
							r,
							s,
							l = 0;
							for (r = i + 1; r <= a - 1; r++)
								(s = this._sqClosestPointOnSegment(t[r], t[i], t[a], !0)) > l && (o = r, l = s);
							l > n && (e[o] = 1, this._simplifyDPStep(t, e, n, i, o), this._simplifyDPStep(t, e, n, o, a))
						},
						_reducePoints: function (t, e) {
							for (var n = [t[0]], i = 1, a = 0, o = t.length; i < o; i++)
								this._sqDist(t[i], t[a]) > e && (n.push(t[i]), a = i);
							return a < o - 1 && n.push(t[o - 1]),
							n
						},
						clipSegment: function (t, e, n, i) {
							var a,
							o,
							r,
							s = i ? this._lastCode : this._getBitCode(t, n),
							l = this._getBitCode(e, n);
							for (this._lastCode = l; ; ) {
								if (!(s | l))
									return [t, e];
								if (s & l)
									return !1;
								a = s || l,
								o = this._getEdgeIntersection(t, e, a, n),
								r = this._getBitCode(o, n),
								a === s ? (t = o, s = r) : (e = o, l = r)
							}
						},
						_getEdgeIntersection: function (t, e, n, i) {
							var a = e.x - t.x,
							o = e.y - t.y,
							s = i.min,
							l = i.max;
							return 8 & n ? new r.Point(t.x + a * (l.y - t.y) / o, l.y) : 4 & n ? new r.Point(t.x + a * (s.y - t.y) / o, s.y) : 2 & n ? new r.Point(l.x, t.y + o * (l.x - t.x) / a) : 1 & n ? new r.Point(s.x, t.y + o * (s.x - t.x) / a) : void 0
						},
						_getBitCode: function (t, e) {
							var n = 0;
							return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2),
							t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8),
							n
						},
						_sqDist: function (t, e) {
							var n = e.x - t.x,
							i = e.y - t.y;
							return n * n + i * i
						},
						_sqClosestPointOnSegment: function (t, e, n, i) {
							var a,
							o = e.x,
							s = e.y,
							l = n.x - o,
							d = n.y - s,
							u = l * l + d * d;
							return u > 0 && (a = ((t.x - o) * l + (t.y - s) * d) / u, a > 1 ? (o = n.x, s = n.y) : a > 0 && (o += l * a, s += d * a)),
							l = t.x - o,
							d = t.y - s,
							i ? l * l + d * d : new r.Point(o, s)
						}
					},
					r.Polyline = r.Path.extend({
							initialize: function (t, e) {
								r.Path.prototype.initialize.call(this, e),
								this._latlngs = this._convertLatLngs(t)
							},
							options: {
								smoothFactor: 1,
								noClip: !1
							},
							projectLatlngs: function () {
								this._originalPoints = [];
								for (var t = 0, e = this._latlngs.length; t < e; t++)
									this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
							},
							getPathString: function () {
								for (var t = 0, e = this._parts.length, n = ""; t < e; t++)
									n += this._getPathPartStr(this._parts[t]);
								return n
							},
							getLatLngs: function () {
								return this._latlngs
							},
							setLatLngs: function (t) {
								return this._latlngs = this._convertLatLngs(t),
								this.redraw()
							},
							addLatLng: function (t) {
								return this._latlngs.push(r.latLng(t)),
								this.redraw()
							},
							spliceLatLngs: function () {
								var t = [].splice.apply(this._latlngs, arguments);
								return this._convertLatLngs(this._latlngs, !0),
								this.redraw(),
								t
							},
							closestLayerPoint: function (t) {
								for (var e, n, i = 1 / 0, a = this._parts, o = null, s = 0, l = a.length; s < l; s++)
									for (var d = a[s], u = 1, h = d.length; u < h; u++) {
										e = d[u - 1],
										n = d[u];
										var c = r.LineUtil._sqClosestPointOnSegment(t, e, n, !0);
										c < i && (i = c, o = r.LineUtil._sqClosestPointOnSegment(t, e, n))
									}
								return o && (o.distance = Math.sqrt(i)),
								o
							},
							getBounds: function () {
								return new r.LatLngBounds(this.getLatLngs())
							},
							_convertLatLngs: function (t, e) {
								var n,
								i,
								a = e ? t : [];
								for (n = 0, i = t.length; n < i; n++) {
									if (r.Util.isArray(t[n]) && "number" != typeof t[n][0])
										return;
									a[n] = r.latLng(t[n])
								}
								return a
							},
							_initEvents: function () {
								r.Path.prototype._initEvents.call(this)
							},
							_getPathPartStr: function (t) {
								for (var e, n = r.Path.VML, i = 0, a = t.length, o = ""; i < a; i++)
									e = t[i], n && e._round(), o += (i ? "L" : "M") + e.x + " " + e.y;
								return o
							},
							_clipPoints: function () {
								var t,
								e,
								n,
								i = this._originalPoints,
								a = i.length;
								if (this.options.noClip)
									return void(this._parts = [i]);
								this._parts = [];
								var o = this._parts,
								s = this._map._pathViewport,
								l = r.LineUtil;
								for (t = 0, e = 0; t < a - 1; t++)
									(n = l.clipSegment(i[t], i[t + 1], s, t)) && (o[e] = o[e] || [], o[e].push(n[0]), n[1] === i[t + 1] && t !== a - 2 || (o[e].push(n[1]), e++))
							},
							_simplifyPoints: function () {
								for (var t = this._parts, e = r.LineUtil, n = 0, i = t.length; n < i; n++)
									t[n] = e.simplify(t[n], this.options.smoothFactor)
							},
							_updatePath: function () {
								this._map && (this._clipPoints(), this._simplifyPoints(), r.Path.prototype._updatePath.call(this))
							}
						}),
					r.polyline = function (t, e) {
						return new r.Polyline(t, e)
					},
					r.PolyUtil = {},
					r.PolyUtil.clipPolygon = function (t, e) {
						var n,
						i,
						a,
						o,
						s,
						l,
						d,
						u,
						h,
						c = [1, 4, 2, 8],
						m = r.LineUtil;
						for (i = 0, d = t.length; i < d; i++)
							t[i]._code = m._getBitCode(t[i], e);
						for (o = 0; o < 4; o++) {
							for (u = c[o], n = [], i = 0, d = t.length, a = d - 1; i < d; a = i++)
								s = t[i], l = t[a], s._code & u ? l._code & u || (h = m._getEdgeIntersection(l, s, u, e), h._code = m._getBitCode(h, e), n.push(h)) : (l._code & u && (h = m._getEdgeIntersection(l, s, u, e), h._code = m._getBitCode(h, e), n.push(h)), n.push(s));
							t = n
						}
						return t
					},
					r.Polygon = r.Polyline.extend({
							options: {
								fill: !0
							},
							initialize: function (t, e) {
								r.Polyline.prototype.initialize.call(this, t, e),
								this._initWithHoles(t)
							},
							_initWithHoles: function (t) {
								var e,
								n,
								i;
								if (t && r.Util.isArray(t[0]) && "number" != typeof t[0][0])
									for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, n = this._holes.length; e < n; e++)
										i = this._holes[e] = this._convertLatLngs(this._holes[e]), i[0].equals(i[i.length - 1]) && i.pop();
								t = this._latlngs,
								t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
							},
							projectLatlngs: function () {
								if (r.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
									var t,
									e,
									n,
									i;
									for (t = 0, n = this._holes.length; t < n; t++)
										for (this._holePoints[t] = [], e = 0, i = this._holes[t].length; e < i; e++)
											this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
								}
							},
							setLatLngs: function (t) {
								return t && r.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : r.Polyline.prototype.setLatLngs.call(this, t)
							},
							_clipPoints: function () {
								var t = this._originalPoints,
								e = [];
								if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
									for (var n = 0, i = this._parts.length; n < i; n++) {
										var a = r.PolyUtil.clipPolygon(this._parts[n], this._map._pathViewport);
										a.length && e.push(a)
									}
									this._parts = e
								}
							},
							_getPathPartStr: function (t) {
								return r.Polyline.prototype._getPathPartStr.call(this, t) + (r.Browser.svg ? "z" : "x")
							}
						}),
					r.polygon = function (t, e) {
						return new r.Polygon(t, e)
					},
					function () {
						function t(t) {
							return r.FeatureGroup.extend({
								initialize: function (t, e) {
									this._layers = {},
									this._options = e,
									this.setLatLngs(t)
								},
								setLatLngs: function (e) {
									var n = 0,
									i = e.length;
									for (this.eachLayer(function (t) {
											n < i ? t.setLatLngs(e[n++]) : this.removeLayer(t)
										}, this); n < i; )
										this.addLayer(new t(e[n++], this._options));
									return this
								},
								getLatLngs: function () {
									var t = [];
									return this.eachLayer(function (e) {
										t.push(e.getLatLngs())
									}),
									t
								}
							})
						}
						r.MultiPolyline = t(r.Polyline),
						r.MultiPolygon = t(r.Polygon),
						r.multiPolyline = function (t, e) {
							return new r.MultiPolyline(t, e)
						},
						r.multiPolygon = function (t, e) {
							return new r.MultiPolygon(t, e)
						}
					}
					(),
					r.Rectangle = r.Polygon.extend({
							initialize: function (t, e) {
								r.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
							},
							setBounds: function (t) {
								this.setLatLngs(this._boundsToLatLngs(t))
							},
							_boundsToLatLngs: function (t) {
								return t = r.latLngBounds(t),
								[t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
							}
						}),
					r.rectangle = function (t, e) {
						return new r.Rectangle(t, e)
					},
					r.Circle = r.Path.extend({
							initialize: function (t, e, n) {
								r.Path.prototype.initialize.call(this, n),
								this._latlng = r.latLng(t),
								this._mRadius = e
							},
							options: {
								fill: !0
							},
							setLatLng: function (t) {
								return this._latlng = r.latLng(t),
								this.redraw()
							},
							setRadius: function (t) {
								return this._mRadius = t,
								this.redraw()
							},
							projectLatlngs: function () {
								var t = this._getLngRadius(),
								e = this._latlng,
								n = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
								this._point = this._map.latLngToLayerPoint(e),
								this._radius = Math.max(this._point.x - n.x, 1)
							},
							getBounds: function () {
								var t = this._getLngRadius(),
								e = this._mRadius / 40075017 * 360,
								n = this._latlng;
								return new r.LatLngBounds([n.lat - e, n.lng - t], [n.lat + e, n.lng + t])
							},
							getLatLng: function () {
								return this._latlng
							},
							getPathString: function () {
								var t = this._point,
								e = this._radius;
								return this._checkIfEmpty() ? "" : r.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
							},
							getRadius: function () {
								return this._mRadius
							},
							_getLatRadius: function () {
								return this._mRadius / 40075017 * 360
							},
							_getLngRadius: function () {
								return this._getLatRadius() / Math.cos(r.LatLng.DEG_TO_RAD * this._latlng.lat)
							},
							_checkIfEmpty: function () {
								if (!this._map)
									return !1;
								var t = this._map._pathViewport,
								e = this._radius,
								n = this._point;
								return n.x - e > t.max.x || n.y - e > t.max.y || n.x + e < t.min.x || n.y + e < t.min.y
							}
						}),
					r.circle = function (t, e, n) {
						return new r.Circle(t, e, n)
					},
					r.CircleMarker = r.Circle.extend({
							options: {
								radius: 10,
								weight: 2
							},
							initialize: function (t, e) {
								r.Circle.prototype.initialize.call(this, t, null, e),
								this._radius = this.options.radius
							},
							projectLatlngs: function () {
								this._point = this._map.latLngToLayerPoint(this._latlng)
							},
							_updateStyle: function () {
								r.Circle.prototype._updateStyle.call(this),
								this.setRadius(this.options.radius)
							},
							setLatLng: function (t) {
								return r.Circle.prototype.setLatLng.call(this, t),
								this._popup && this._popup._isOpen && this._popup.setLatLng(t),
								this
							},
							setRadius: function (t) {
								return this.options.radius = this._radius = t,
								this.redraw()
							},
							getRadius: function () {
								return this._radius
							}
						}),
					r.circleMarker = function (t, e) {
						return new r.CircleMarker(t, e)
					},
					r.Polyline.include(r.Path.CANVAS ? {
						_containsPoint: function (t, e) {
							var n,
							i,
							a,
							o,
							s,
							l,
							d = this.options.weight / 2;
							for (r.Browser.touch && (d += 10), n = 0, o = this._parts.length; n < o; n++)
								for (l = this._parts[n], i = 0, s = l.length, a = s - 1; i < s; a = i++)
									if ((e || 0 !== i) && r.LineUtil.pointToSegmentDistance(t, l[a], l[i]) <= d)
										return !0;
							return !1
						}
					}
						 : {}),
					r.Polygon.include(r.Path.CANVAS ? {
						_containsPoint: function (t) {
							var e,
							n,
							i,
							a,
							o,
							s,
							l,
							d,
							u = !1;
							if (r.Polyline.prototype._containsPoint.call(this, t, !0))
								return !0;
							for (a = 0, l = this._parts.length; a < l; a++)
								for (e = this._parts[a], o = 0, d = e.length, s = d - 1; o < d; s = o++)
									n = e[o], i = e[s], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (u = !u);
							return u
						}
					}
						 : {}),
					r.Circle.include(r.Path.CANVAS ? {
						_drawPath: function () {
							var t = this._point;
							this._ctx.beginPath(),
							this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
						},
						_containsPoint: function (t) {
							var e = this._point,
							n = this.options.stroke ? this.options.weight / 2 : 0;
							return t.distanceTo(e) <= this._radius + n
						}
					}
						 : {}),
					r.CircleMarker.include(r.Path.CANVAS ? {
						_updateStyle: function () {
							r.Path.prototype._updateStyle.call(this)
						}
					}
						 : {}),
					r.GeoJSON = r.FeatureGroup.extend({
							initialize: function (t, e) {
								r.setOptions(this, e),
								this._layers = {},
								t && this.addData(t)
							},
							addData: function (t) {
								var e,
								n,
								i,
								a = r.Util.isArray(t) ? t : t.features;
								if (a) {
									for (e = 0, n = a.length; e < n; e++)
										i = a[e], (i.geometries || i.geometry || i.features || i.coordinates) && this.addData(a[e]);
									return this
								}
								var o = this.options;
								if (!o.filter || o.filter(t)) {
									var s = r.GeoJSON.geometryToLayer(t, o.pointToLayer, o.coordsToLatLng, o);
									return s.feature = r.GeoJSON.asFeature(t),
									s.defaultOptions = s.options,
									this.resetStyle(s),
									o.onEachFeature && o.onEachFeature(t, s),
									this.addLayer(s)
								}
							},
							resetStyle: function (t) {
								var e = this.options.style;
								e && (r.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
							},
							setStyle: function (t) {
								this.eachLayer(function (e) {
									this._setLayerStyle(e, t)
								}, this)
							},
							_setLayerStyle: function (t, e) {
								"function" == typeof e && (e = e(t.feature)),
								t.setStyle && t.setStyle(e)
							}
						}),
					r.extend(r.GeoJSON, {
						geometryToLayer: function (t, e, n, i) {
							var a,
							o,
							s,
							l,
							d = "Feature" === t.type ? t.geometry : t,
							u = d.coordinates,
							h = [];
							switch (n = n || this.coordsToLatLng, d.type) {
							case "Point":
								return a = n(u),
								e ? e(t, a) : new r.Marker(a);
							case "MultiPoint":
								for (s = 0, l = u.length; s < l; s++)
									a = n(u[s]), h.push(e ? e(t, a) : new r.Marker(a));
								return new r.FeatureGroup(h);
							case "LineString":
								return o = this.coordsToLatLngs(u, 0, n),
								new r.Polyline(o, i);
							case "Polygon":
								if (2 === u.length && !u[1].length)
									throw new Error("Invalid GeoJSON object.");
								return o = this.coordsToLatLngs(u, 1, n),
								new r.Polygon(o, i);
							case "MultiLineString":
								return o = this.coordsToLatLngs(u, 1, n),
								new r.MultiPolyline(o, i);
							case "MultiPolygon":
								return o = this.coordsToLatLngs(u, 2, n),
								new r.MultiPolygon(o, i);
							case "GeometryCollection":
								for (s = 0, l = d.geometries.length; s < l; s++)
									h.push(this.geometryToLayer({
											geometry: d.geometries[s],
											type: "Feature",
											properties: t.properties
										}, e, n, i));
								return new r.FeatureGroup(h);
							default:
								throw new Error("Invalid GeoJSON object.")
							}
						},
						coordsToLatLng: function (t) {
							return new r.LatLng(t[1], t[0], t[2])
						},
						coordsToLatLngs: function (t, e, n) {
							var i,
							a,
							o,
							r = [];
							for (a = 0, o = t.length; a < o; a++)
								i = e ? this.coordsToLatLngs(t[a], e - 1, n) : (n || this.coordsToLatLng)(t[a]), r.push(i);
							return r
						},
						latLngToCoords: function (t) {
							var e = [t.lng, t.lat];
							return void 0 !== t.alt && e.push(t.alt),
							e
						},
						latLngsToCoords: function (t) {
							for (var e = [], n = 0, i = t.length; n < i; n++)
								e.push(r.GeoJSON.latLngToCoords(t[n]));
							return e
						},
						getFeature: function (t, e) {
							return t.feature ? r.extend({}, t.feature, {
								geometry: e
							}) : r.GeoJSON.asFeature(e)
						},
						asFeature: function (t) {
							return "Feature" === t.type ? t : {
								type: "Feature",
								properties: {},
								geometry: t
							}
						}
					});
					var l = {
						toGeoJSON: function () {
							return r.GeoJSON.getFeature(this, {
								type: "Point",
								coordinates: r.GeoJSON.latLngToCoords(this.getLatLng())
							})
						}
					};
					r.Marker.include(l),
					r.Circle.include(l),
					r.CircleMarker.include(l),
					r.Polyline.include({
						toGeoJSON: function () {
							return r.GeoJSON.getFeature(this, {
								type: "LineString",
								coordinates: r.GeoJSON.latLngsToCoords(this.getLatLngs())
							})
						}
					}),
					r.Polygon.include({
						toGeoJSON: function () {
							var t,
							e,
							n,
							i = [r.GeoJSON.latLngsToCoords(this.getLatLngs())];
							if (i[0].push(i[0][0]), this._holes)
								for (t = 0, e = this._holes.length; t < e; t++)
									n = r.GeoJSON.latLngsToCoords(this._holes[t]), n.push(n[0]), i.push(n);
							return r.GeoJSON.getFeature(this, {
								type: "Polygon",
								coordinates: i
							})
						}
					}),
					function () {
						function t(t) {
							return function () {
								var e = [];
								return this.eachLayer(function (t) {
									e.push(t.toGeoJSON().geometry.coordinates)
								}),
								r.GeoJSON.getFeature(this, {
									type: t,
									coordinates: e
								})
							}
						}
						r.MultiPolyline.include({
							toGeoJSON: t("MultiLineString")
						}),
						r.MultiPolygon.include({
							toGeoJSON: t("MultiPolygon")
						}),
						r.LayerGroup.include({
							toGeoJSON: function () {
								var e,
								n = this.feature && this.feature.geometry,
								i = [];
								if (n && "MultiPoint" === n.type)
									return t("MultiPoint").call(this);
								var a = n && "GeometryCollection" === n.type;
								return this.eachLayer(function (t) {
									t.toGeoJSON && (e = t.toGeoJSON(), i.push(a ? e.geometry : r.GeoJSON.asFeature(e)))
								}),
								a ? r.GeoJSON.getFeature(this, {
									geometries: i,
									type: "GeometryCollection"
								}) : {
									type: "FeatureCollection",
									features: i
								}
							}
						})
					}
					(),
					r.geoJson = function (t, e) {
						return new r.GeoJSON(t, e)
					},
					r.DomEvent = {
						addListener: function (t, e, n, i) {
							var a,
							o,
							s,
							l = r.stamp(n),
							d = "_leaflet_" + e + l;
							return t[d] ? this : (a = function (e) {
								return n.call(i || t, e || r.DomEvent._getEvent())
							}, r.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, a, l) : (r.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, a, l), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", a, !1), t.addEventListener(e, a, !1)) : "mouseenter" === e || "mouseleave" === e ? (o = a, s = "mouseenter" === e ? "mouseover" : "mouseout", a = function (e) {
										if (r.DomEvent._checkMouse(t, e))
											return o(e)
									}, t.addEventListener(s, a, !1)) : "click" === e && r.Browser.android ? (o = a, a = function (t) {
										return r.DomEvent._filterClick(t, o)
									}, t.addEventListener(e, a, !1)) : t.addEventListener(e, a, !1) : "attachEvent" in t && t.attachEvent("on" + e, a), t[d] = a, this))
						},
						removeListener: function (t, e, n) {
							var i = r.stamp(n),
							a = "_leaflet_" + e + i,
							o = t[a];
							return o ? (r.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, i) : r.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, i) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", o, !1), t.removeEventListener(e, o, !1)) : "mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout", o, !1) : t.removeEventListener(e, o, !1) : "detachEvent" in t && t.detachEvent("on" + e, o), t[a] = null, this) : this
						},
						stopPropagation: function (t) {
							return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0,
							r.DomEvent._skipped(t),
							this
						},
						disableScrollPropagation: function (t) {
							var e = r.DomEvent.stopPropagation;
							return r.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
						},
						disableClickPropagation: function (t) {
							for (var e = r.DomEvent.stopPropagation, n = r.Draggable.START.length - 1; n >= 0; n--)
								r.DomEvent.on(t, r.Draggable.START[n], e);
							return r.DomEvent.on(t, "click", r.DomEvent._fakeStop).on(t, "dblclick", e)
						},
						preventDefault: function (t) {
							return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
							this
						},
						stop: function (t) {
							return r.DomEvent.preventDefault(t).stopPropagation(t)
						},
						getMousePosition: function (t, e) {
							if (!e)
								return new r.Point(t.clientX, t.clientY);
							var n = e.getBoundingClientRect();
							return new r.Point(t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop)
						},
						getWheelDelta: function (t) {
							var e = 0;
							return t.wheelDelta && (e = t.wheelDelta / 120),
							t.detail && (e = -t.detail / 3),
							e
						},
						_skipEvents: {},
						_fakeStop: function (t) {
							r.DomEvent._skipEvents[t.type] = !0
						},
						_skipped: function (t) {
							var e = this._skipEvents[t.type];
							return this._skipEvents[t.type] = !1,
							e
						},
						_checkMouse: function (t, e) {
							var n = e.relatedTarget;
							if (!n)
								return !0;
							try {
								for (; n && n !== t; )
									n = n.parentNode
							} catch (t) {
								return !1
							}
							return n !== t
						},
						_getEvent: function () {
							var t = e.event;
							if (!t)
								for (var n = arguments.callee.caller; n && (!(t = n.arguments[0]) || e.Event !== t.constructor); )
									n = n.caller;
							return t
						},
						_filterClick: function (t, e) {
							var n = t.timeStamp || t.originalEvent.timeStamp,
							i = r.DomEvent._lastClick && n - r.DomEvent._lastClick;
							return i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? void r.DomEvent.stop(t) : (r.DomEvent._lastClick = n, e(t))
						}
					},
					r.DomEvent.on = r.DomEvent.addListener,
					r.DomEvent.off = r.DomEvent.removeListener,
					r.Draggable = r.Class.extend({
							includes: r.Mixin.Events,
							statics: {
								START: r.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
								END: {
									mousedown: "mouseup",
									touchstart: "touchend",
									pointerdown: "touchend",
									MSPointerDown: "touchend"
								},
								MOVE: {
									mousedown: "mousemove",
									touchstart: "touchmove",
									pointerdown: "touchmove",
									MSPointerDown: "touchmove"
								}
							},
							initialize: function (t, e) {
								this._element = t,
								this._dragStartTarget = e || t
							},
							enable: function () {
								if (!this._enabled) {
									for (var t = r.Draggable.START.length - 1; t >= 0; t--)
										r.DomEvent.on(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
									this._enabled = !0
								}
							},
							disable: function () {
								if (this._enabled) {
									for (var t = r.Draggable.START.length - 1; t >= 0; t--)
										r.DomEvent.off(this._dragStartTarget, r.Draggable.START[t], this._onDown, this);
									this._enabled = !1,
									this._moved = !1
								}
							},
							_onDown: function (t) {
								if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (r.DomEvent.stopPropagation(t), !r.Draggable._disabled && (r.DomUtil.disableImageDrag(), r.DomUtil.disableTextSelection(), !this._moving))) {
									var e = t.touches ? t.touches[0] : t;
									this._startPoint = new r.Point(e.clientX, e.clientY),
									this._startPos = this._newPos = r.DomUtil.getPosition(this._element),
									r.DomEvent.on(i, r.Draggable.MOVE[t.type], this._onMove, this).on(i, r.Draggable.END[t.type], this._onUp, this)
								}
							},
							_onMove: function (t) {
								if (t.touches && t.touches.length > 1)
									return void(this._moved = !0);
								var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
								n = new r.Point(e.clientX, e.clientY),
								a = n.subtract(this._startPoint);
								(a.x || a.y) && (r.Browser.touch && Math.abs(a.x) + Math.abs(a.y) < 3 || (r.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = r.DomUtil.getPosition(this._element).subtract(a), r.DomUtil.addClass(i.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, r.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(a), this._moving = !0, r.Util.cancelAnimFrame(this._animRequest), this._animRequest = r.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
							},
							_updatePosition: function () {
								this.fire("predrag"),
								r.DomUtil.setPosition(this._element, this._newPos),
								this.fire("drag")
							},
							_onUp: function () {
								r.DomUtil.removeClass(i.body, "leaflet-dragging"),
								this._lastTarget && (r.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
								for (var t in r.Draggable.MOVE)
									r.DomEvent.off(i, r.Draggable.MOVE[t], this._onMove).off(i, r.Draggable.END[t], this._onUp);
								r.DomUtil.enableImageDrag(),
								r.DomUtil.enableTextSelection(),
								this._moved && this._moving && (r.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
										distance: this._newPos.distanceTo(this._startPos)
									})),
								this._moving = !1
							}
						}),
					r.Handler = r.Class.extend({
							initialize: function (t) {
								this._map = t
							},
							enable: function () {
								this._enabled || (this._enabled = !0, this.addHooks())
							},
							disable: function () {
								this._enabled && (this._enabled = !1, this.removeHooks())
							},
							enabled: function () {
								return !!this._enabled
							}
						}),
					r.Map.mergeOptions({
						dragging: !0,
						inertia: !r.Browser.android23,
						inertiaDeceleration: 3400,
						inertiaMaxSpeed: 1 / 0,
						inertiaThreshold: r.Browser.touch ? 32 : 18,
						easeLinearity: .25,
						worldCopyJump: !1
					}),
					r.Map.Drag = r.Handler.extend({
							addHooks: function () {
								if (!this._draggable) {
									var t = this._map;
									this._draggable = new r.Draggable(t._mapPane, t._container),
									this._draggable.on({
										dragstart: this._onDragStart,
										drag: this._onDrag,
										dragend: this._onDragEnd
									}, this),
									t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
								}
								this._draggable.enable()
							},
							removeHooks: function () {
								this._draggable.disable()
							},
							moved: function () {
								return this._draggable && this._draggable._moved
							},
							_onDragStart: function () {
								var t = this._map;
								t._panAnim && t._panAnim.stop(),
								t.fire("movestart").fire("dragstart"),
								t.options.inertia && (this._positions = [], this._times = [])
							},
							_onDrag: function () {
								if (this._map.options.inertia) {
									var t = this._lastTime = +new Date,
									e = this._lastPos = this._draggable._newPos;
									this._positions.push(e),
									this._times.push(t),
									t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
								}
								this._map.fire("move").fire("drag")
							},
							_onViewReset: function () {
								var t = this._map.getSize()._divideBy(2),
								e = this._map.latLngToLayerPoint([0, 0]);
								this._initialWorldOffset = e.subtract(t).x,
								this._worldWidth = this._map.project([0, 180]).x
							},
							_onPreDrag: function () {
								var t = this._worldWidth,
								e = Math.round(t / 2),
								n = this._initialWorldOffset,
								i = this._draggable._newPos.x,
								a = (i - e + n) % t + e - n,
								o = (i + e + n) % t - e - n,
								r = Math.abs(a + n) < Math.abs(o + n) ? a : o;
								this._draggable._newPos.x = r
							},
							_onDragEnd: function (t) {
								var e = this._map,
								n = e.options,
								i = +new Date - this._lastTime,
								a = !n.inertia || i > n.inertiaThreshold || !this._positions[0];
								if (e.fire("dragend", t), a)
									e.fire("moveend");
								else {
									var o = this._lastPos.subtract(this._positions[0]),
									s = (this._lastTime + i - this._times[0]) / 1e3,
									l = n.easeLinearity,
									d = o.multiplyBy(l / s),
									u = d.distanceTo([0, 0]),
									h = Math.min(n.inertiaMaxSpeed, u),
									c = d.multiplyBy(h / u),
									m = h / (n.inertiaDeceleration * l),
									f = c.multiplyBy(-m / 2).round();
									f.x && f.y ? (f = e._limitOffset(f, e.options.maxBounds), r.Util.requestAnimFrame(function () {
											e.panBy(f, {
												duration: m,
												easeLinearity: l,
												noMoveStart: !0
											})
										})) : e.fire("moveend")
								}
							}
						}),
					r.Map.addInitHook("addHandler", "dragging", r.Map.Drag),
					r.Map.mergeOptions({
						doubleClickZoom: !0
					}),
					r.Map.DoubleClickZoom = r.Handler.extend({
							addHooks: function () {
								this._map.on("dblclick", this._onDoubleClick, this)
							},
							removeHooks: function () {
								this._map.off("dblclick", this._onDoubleClick, this)
							},
							_onDoubleClick: function (t) {
								var e = this._map,
								n = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
								"center" === e.options.doubleClickZoom ? e.setZoom(n) : e.setZoomAround(t.containerPoint, n)
							}
						}),
					r.Map.addInitHook("addHandler", "doubleClickZoom", r.Map.DoubleClickZoom),
					r.Map.mergeOptions({
						scrollWheelZoom: !0
					}),
					r.Map.ScrollWheelZoom = r.Handler.extend({
							addHooks: function () {
								r.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this),
								r.DomEvent.on(this._map._container, "MozMousePixelScroll", r.DomEvent.preventDefault),
								this._delta = 0
							},
							removeHooks: function () {
								r.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll),
								r.DomEvent.off(this._map._container, "MozMousePixelScroll", r.DomEvent.preventDefault)
							},
							_onWheelScroll: function (t) {
								var e = r.DomEvent.getWheelDelta(t);
								this._delta += e,
								this._lastMousePos = this._map.mouseEventToContainerPoint(t),
								this._startTime || (this._startTime = +new Date);
								var n = Math.max(40 - (+new Date - this._startTime), 0);
								clearTimeout(this._timer),
								this._timer = setTimeout(r.bind(this._performZoom, this), n),
								r.DomEvent.preventDefault(t),
								r.DomEvent.stopPropagation(t)
							},
							_performZoom: function () {
								var t = this._map,
								e = this._delta,
								n = t.getZoom();
								e = e > 0 ? Math.ceil(e) : Math.floor(e),
								e = Math.max(Math.min(e, 4), -4),
								e = t._limitZoom(n + e) - n,
								this._delta = 0,
								this._startTime = null,
								e && ("center" === t.options.scrollWheelZoom ? t.setZoom(n + e) : t.setZoomAround(this._lastMousePos, n + e))
							}
						}),
					r.Map.addInitHook("addHandler", "scrollWheelZoom", r.Map.ScrollWheelZoom),
					r.extend(r.DomEvent, {
						_touchstart: r.Browser.msPointer ? "MSPointerDown" : r.Browser.pointer ? "pointerdown" : "touchstart",
						_touchend: r.Browser.msPointer ? "MSPointerUp" : r.Browser.pointer ? "pointerup" : "touchend",
						addDoubleTapListener: function (t, e, n) {
							function a(t) {
								var e;
								if (r.Browser.pointer ? (m.push(t.pointerId), e = m.length) : e = t.touches.length, !(e > 1)) {
									var n = Date.now(),
									i = n - (s || n);
									l = t.touches ? t.touches[0] : t,
									d = i > 0 && i <= u,
									s = n
								}
							}
							function o(t) {
								if (r.Browser.pointer) {
									var n = m.indexOf(t.pointerId);
									if (-1 === n)
										return;
									m.splice(n, 1)
								}
								if (d) {
									if (r.Browser.pointer) {
										var i,
										a = {};
										for (var o in l)
											i = l[o], a[o] = "function" == typeof i ? i.bind(l) : i;
										l = a
									}
									l.type = "dblclick",
									e(l),
									s = null
								}
							}
							var s,
							l,
							d = !1,
							u = 250,
							h = this._touchstart,
							c = this._touchend,
							m = [];
							t["_leaflet_" + h + n] = a,
							t["_leaflet_" + c + n] = o;
							var f = r.Browser.pointer ? i.documentElement : t;
							return t.addEventListener(h, a, !1),
							f.addEventListener(c, o, !1),
							r.Browser.pointer && f.addEventListener(r.DomEvent.POINTER_CANCEL, o, !1),
							this
						},
						removeDoubleTapListener: function (t, e) {
							var n = "_leaflet_";
							return t.removeEventListener(this._touchstart, t[n + this._touchstart + e], !1),
							(r.Browser.pointer ? i.documentElement : t).removeEventListener(this._touchend, t[n + this._touchend + e], !1),
							r.Browser.pointer && i.documentElement.removeEventListener(r.DomEvent.POINTER_CANCEL, t[n + this._touchend + e], !1),
							this
						}
					}),
					r.extend(r.DomEvent, {
						POINTER_DOWN: r.Browser.msPointer ? "MSPointerDown" : "pointerdown",
						POINTER_MOVE: r.Browser.msPointer ? "MSPointerMove" : "pointermove",
						POINTER_UP: r.Browser.msPointer ? "MSPointerUp" : "pointerup",
						POINTER_CANCEL: r.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
						_pointers: [],
						_pointerDocumentListener: !1,
						addPointerListener: function (t, e, n, i) {
							switch (e) {
							case "touchstart":
								return this.addPointerListenerStart(t, e, n, i);
							case "touchend":
								return this.addPointerListenerEnd(t, e, n, i);
							case "touchmove":
								return this.addPointerListenerMove(t, e, n, i);
							default:
								throw "Unknown touch event type"
							}
						},
						addPointerListenerStart: function (t, e, n, a) {
							var o = this._pointers,
							s = function (t) {
								"mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && r.DomEvent.preventDefault(t);
								for (var e = !1, i = 0; i < o.length; i++)
									if (o[i].pointerId === t.pointerId) {
										e = !0;
										break
									}
								e || o.push(t),
								t.touches = o.slice(),
								t.changedTouches = [t],
								n(t)
							};
							if (t["_leaflet_touchstart" + a] = s, t.addEventListener(this.POINTER_DOWN, s, !1), !this._pointerDocumentListener) {
								var l = function (t) {
									for (var e = 0; e < o.length; e++)
										if (o[e].pointerId === t.pointerId) {
											o.splice(e, 1);
											break
										}
								};
								i.documentElement.addEventListener(this.POINTER_UP, l, !1),
								i.documentElement.addEventListener(this.POINTER_CANCEL, l, !1),
								this._pointerDocumentListener = !0
							}
							return this
						},
						addPointerListenerMove: function (t, e, n, i) {
							function a(t) {
								if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
									for (var e = 0; e < o.length; e++)
										if (o[e].pointerId === t.pointerId) {
											o[e] = t;
											break
										}
									t.touches = o.slice(),
									t.changedTouches = [t],
									n(t)
								}
							}
							var o = this._pointers;
							return t["_leaflet_touchmove" + i] = a,
							t.addEventListener(this.POINTER_MOVE, a, !1),
							this
						},
						addPointerListenerEnd: function (t, e, n, i) {
							var a = this._pointers,
							o = function (t) {
								for (var e = 0; e < a.length; e++)
									if (a[e].pointerId === t.pointerId) {
										a.splice(e, 1);
										break
									}
								t.touches = a.slice(),
								t.changedTouches = [t],
								n(t)
							};
							return t["_leaflet_touchend" + i] = o,
							t.addEventListener(this.POINTER_UP, o, !1),
							t.addEventListener(this.POINTER_CANCEL, o, !1),
							this
						},
						removePointerListener: function (t, e, n) {
							var i = t["_leaflet_" + e + n];
							switch (e) {
							case "touchstart":
								t.removeEventListener(this.POINTER_DOWN, i, !1);
								break;
							case "touchmove":
								t.removeEventListener(this.POINTER_MOVE, i, !1);
								break;
							case "touchend":
								t.removeEventListener(this.POINTER_UP, i, !1),
								t.removeEventListener(this.POINTER_CANCEL, i, !1)
							}
							return this
						}
					}),
					r.Map.mergeOptions({
						touchZoom: r.Browser.touch && !r.Browser.android23,
						bounceAtZoomLimits: !0
					}),
					r.Map.TouchZoom = r.Handler.extend({
							addHooks: function () {
								r.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
							},
							removeHooks: function () {
								r.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
							},
							_onTouchStart: function (t) {
								var e = this._map;
								if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
									var n = e.mouseEventToLayerPoint(t.touches[0]),
									a = e.mouseEventToLayerPoint(t.touches[1]),
									o = e._getCenterLayerPoint();
									this._startCenter = n.add(a)._divideBy(2),
									this._startDist = n.distanceTo(a),
									this._moved = !1,
									this._zooming = !0,
									this._centerOffset = o.subtract(this._startCenter),
									e._panAnim && e._panAnim.stop(),
									r.DomEvent.on(i, "touchmove", this._onTouchMove, this).on(i, "touchend", this._onTouchEnd, this),
									r.DomEvent.preventDefault(t)
								}
							},
							_onTouchMove: function (t) {
								var e = this._map;
								if (t.touches && 2 === t.touches.length && this._zooming) {
									var n = e.mouseEventToLayerPoint(t.touches[0]),
									i = e.mouseEventToLayerPoint(t.touches[1]);
									this._scale = n.distanceTo(i) / this._startDist,
									this._delta = n._add(i)._divideBy(2)._subtract(this._startCenter),
									1 !== this._scale && (!e.options.bounceAtZoomLimits && (e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1) || (this._moved || (r.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), r.Util.cancelAnimFrame(this._animRequest), this._animRequest = r.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), r.DomEvent.preventDefault(t)))
								}
							},
							_updateOnMove: function () {
								var t = this._map,
								e = this._getScaleOrigin(),
								n = t.layerPointToLatLng(e),
								i = t.getScaleZoom(this._scale);
								t._animateZoom(n, i, this._startCenter, this._scale, this._delta, !1, !0)
							},
							_onTouchEnd: function () {
								if (!this._moved || !this._zooming)
									return void(this._zooming = !1);
								var t = this._map;
								this._zooming = !1,
								r.DomUtil.removeClass(t._mapPane, "leaflet-touching"),
								r.Util.cancelAnimFrame(this._animRequest),
								r.DomEvent.off(i, "touchmove", this._onTouchMove).off(i, "touchend", this._onTouchEnd);
								var e = this._getScaleOrigin(),
								n = t.layerPointToLatLng(e),
								a = t.getZoom(),
								o = t.getScaleZoom(this._scale) - a,
								s = o > 0 ? Math.ceil(o) : Math.floor(o),
								l = t._limitZoom(a + s),
								d = t.getZoomScale(l) / this._scale;
								t._animateZoom(n, l, e, d)
							},
							_getScaleOrigin: function () {
								var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
								return this._startCenter.add(t)
							}
						}),
					r.Map.addInitHook("addHandler", "touchZoom", r.Map.TouchZoom),
					r.Map.mergeOptions({
						tap: !0,
						tapTolerance: 15
					}),
					r.Map.Tap = r.Handler.extend({
							addHooks: function () {
								r.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
							},
							removeHooks: function () {
								r.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
							},
							_onDown: function (t) {
								if (t.touches) {
									if (r.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1)
										return this._fireClick = !1, void clearTimeout(this._holdTimeout);
									var e = t.touches[0],
									n = e.target;
									this._startPos = this._newPos = new r.Point(e.clientX, e.clientY),
									n.tagName && "a" === n.tagName.toLowerCase() && r.DomUtil.addClass(n, "leaflet-active"),
									this._holdTimeout = setTimeout(r.bind(function () {
												this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
											}, this), 1e3),
									r.DomEvent.on(i, "touchmove", this._onMove, this).on(i, "touchend", this._onUp, this)
								}
							},
							_onUp: function (t) {
								if (clearTimeout(this._holdTimeout), r.DomEvent.off(i, "touchmove", this._onMove, this).off(i, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
									var e = t.changedTouches[0],
									n = e.target;
									n && n.tagName && "a" === n.tagName.toLowerCase() && r.DomUtil.removeClass(n, "leaflet-active"),
									this._isTapValid() && this._simulateEvent("click", e)
								}
							},
							_isTapValid: function () {
								return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
							},
							_onMove: function (t) {
								var e = t.touches[0];
								this._newPos = new r.Point(e.clientX, e.clientY)
							},
							_simulateEvent: function (t, n) {
								var a = i.createEvent("MouseEvents");
								a._simulated = !0,
								n.target._simulatedClick = !0,
								a.initMouseEvent(t, !0, !0, e, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
								n.target.dispatchEvent(a)
							}
						}),
					r.Browser.touch && !r.Browser.pointer && r.Map.addInitHook("addHandler", "tap", r.Map.Tap),
					r.Map.mergeOptions({
						boxZoom: !0
					}),
					r.Map.BoxZoom = r.Handler.extend({
							initialize: function (t) {
								this._map = t,
								this._container = t._container,
								this._pane = t._panes.overlayPane,
								this._moved = !1
							},
							addHooks: function () {
								r.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
							},
							removeHooks: function () {
								r.DomEvent.off(this._container, "mousedown", this._onMouseDown),
								this._moved = !1
							},
							moved: function () {
								return this._moved
							},
							_onMouseDown: function (t) {
								if (this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button)
									return !1;
								r.DomUtil.disableTextSelection(),
								r.DomUtil.disableImageDrag(),
								this._startLayerPoint = this._map.mouseEventToLayerPoint(t),
								r.DomEvent.on(i, "mousemove", this._onMouseMove, this).on(i, "mouseup", this._onMouseUp, this).on(i, "keydown", this._onKeyDown, this)
							},
							_onMouseMove: function (t) {
								this._moved || (this._box = r.DomUtil.create("div", "leaflet-zoom-box", this._pane), r.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
								var e = this._startLayerPoint,
								n = this._box,
								i = this._map.mouseEventToLayerPoint(t),
								a = i.subtract(e),
								o = new r.Point(Math.min(i.x, e.x), Math.min(i.y, e.y));
								r.DomUtil.setPosition(n, o),
								this._moved = !0,
								n.style.width = Math.max(0, Math.abs(a.x) - 4) + "px",
								n.style.height = Math.max(0, Math.abs(a.y) - 4) + "px"
							},
							_finish: function () {
								this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""),
								r.DomUtil.enableTextSelection(),
								r.DomUtil.enableImageDrag(),
								r.DomEvent.off(i, "mousemove", this._onMouseMove).off(i, "mouseup", this._onMouseUp).off(i, "keydown", this._onKeyDown)
							},
							_onMouseUp: function (t) {
								this._finish();
								var e = this._map,
								n = e.mouseEventToLayerPoint(t);
								if (!this._startLayerPoint.equals(n)) {
									var i = new r.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(n));
									e.fitBounds(i),
									e.fire("boxzoomend", {
										boxZoomBounds: i
									})
								}
							},
							_onKeyDown: function (t) {
								27 === t.keyCode && this._finish()
							}
						}),
					r.Map.addInitHook("addHandler", "boxZoom", r.Map.BoxZoom),
					r.Map.mergeOptions({
						keyboard: !0,
						keyboardPanOffset: 80,
						keyboardZoomOffset: 1
					}),
					r.Map.Keyboard = r.Handler.extend({
							keyCodes: {
								left: [37],
								right: [39],
								down: [40],
								up: [38],
								zoomIn: [187, 107, 61, 171],
								zoomOut: [189, 109, 173]
							},
							initialize: function (t) {
								this._map = t,
								this._setPanOffset(t.options.keyboardPanOffset),
								this._setZoomOffset(t.options.keyboardZoomOffset)
							},
							addHooks: function () {
								var t = this._map._container;
								-1 === t.tabIndex && (t.tabIndex = "0"),
								r.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this),
								this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
							},
							removeHooks: function () {
								this._removeHooks();
								var t = this._map._container;
								r.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this),
								this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
							},
							_onMouseDown: function () {
								if (!this._focused) {
									var t = i.body,
									n = i.documentElement,
									a = t.scrollTop || n.scrollTop,
									o = t.scrollLeft || n.scrollLeft;
									this._map._container.focus(),
									e.scrollTo(o, a)
								}
							},
							_onFocus: function () {
								this._focused = !0,
								this._map.fire("focus")
							},
							_onBlur: function () {
								this._focused = !1,
								this._map.fire("blur")
							},
							_setPanOffset: function (t) {
								var e,
								n,
								i = this._panKeys = {},
								a = this.keyCodes;
								for (e = 0, n = a.left.length; e < n; e++)
									i[a.left[e]] = [-1 * t, 0];
								for (e = 0, n = a.right.length; e < n; e++)
									i[a.right[e]] = [t, 0];
								for (e = 0, n = a.down.length; e < n; e++)
									i[a.down[e]] = [0, t];
								for (e = 0, n = a.up.length; e < n; e++)
									i[a.up[e]] = [0, -1 * t]
							},
							_setZoomOffset: function (t) {
								var e,
								n,
								i = this._zoomKeys = {},
								a = this.keyCodes;
								for (e = 0, n = a.zoomIn.length; e < n; e++)
									i[a.zoomIn[e]] = t;
								for (e = 0, n = a.zoomOut.length; e < n; e++)
									i[a.zoomOut[e]] = -t
							},
							_addHooks: function () {
								r.DomEvent.on(i, "keydown", this._onKeyDown, this)
							},
							_removeHooks: function () {
								r.DomEvent.off(i, "keydown", this._onKeyDown, this)
							},
							_onKeyDown: function (t) {
								var e = t.keyCode,
								n = this._map;
								if (e in this._panKeys) {
									if (n._panAnim && n._panAnim._inProgress)
										return;
									n.panBy(this._panKeys[e]),
									n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
								} else {
									if (!(e in this._zoomKeys))
										return;
									n.setZoom(n.getZoom() + this._zoomKeys[e])
								}
								r.DomEvent.stop(t)
							}
						}),
					r.Map.addInitHook("addHandler", "keyboard", r.Map.Keyboard),
					r.Handler.MarkerDrag = r.Handler.extend({
							initialize: function (t) {
								this._marker = t
							},
							addHooks: function () {
								var t = this._marker._icon;
								this._draggable || (this._draggable = new r.Draggable(t, t)),
								this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this),
								this._draggable.enable(),
								r.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
							},
							removeHooks: function () {
								this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this),
								this._draggable.disable(),
								r.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
							},
							moved: function () {
								return this._draggable && this._draggable._moved
							},
							_onDragStart: function () {
								this._marker.closePopup().fire("movestart").fire("dragstart")
							},
							_onDrag: function () {
								var t = this._marker,
								e = t._shadow,
								n = r.DomUtil.getPosition(t._icon),
								i = t._map.layerPointToLatLng(n);
								e && r.DomUtil.setPosition(e, n),
								t._latlng = i,
								t.fire("move", {
									latlng: i
								}).fire("drag")
							},
							_onDragEnd: function (t) {
								this._marker.fire("moveend").fire("dragend", t)
							}
						}),
					r.Control = r.Class.extend({
							options: {
								position: "topright"
							},
							initialize: function (t) {
								r.setOptions(this, t)
							},
							getPosition: function () {
								return this.options.position
							},
							setPosition: function (t) {
								var e = this._map;
								return e && e.removeControl(this),
								this.options.position = t,
								e && e.addControl(this),
								this
							},
							getContainer: function () {
								return this._container
							},
							addTo: function (t) {
								this._map = t;
								var e = this._container = this.onAdd(t),
								n = this.getPosition(),
								i = t._controlCorners[n];
								return r.DomUtil.addClass(e, "leaflet-control"),
								-1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e),
								this
							},
							removeFrom: function (t) {
								var e = this.getPosition();
								return t._controlCorners[e].removeChild(this._container),
								this._map = null,
								this.onRemove && this.onRemove(t),
								this
							},
							_refocusOnMap: function () {
								this._map && this._map.getContainer().focus()
							}
						}),
					r.control = function (t) {
						return new r.Control(t)
					},
					r.Map.include({
						addControl: function (t) {
							return t.addTo(this),
							this
						},
						removeControl: function (t) {
							return t.removeFrom(this),
							this
						},
						_initControlPos: function () {
							function t(t, a) {
								var o = n + t + " " + n + a;
								e[t + a] = r.DomUtil.create("div", o, i)
							}
							var e = this._controlCorners = {},
							n = "leaflet-",
							i = this._controlContainer = r.DomUtil.create("div", n + "control-container", this._container);
							t("top", "left"),
							t("top", "right"),
							t("bottom", "left"),
							t("bottom", "right")
						},
						_clearControlPos: function () {
							this._container.removeChild(this._controlContainer)
						}
					}),
					r.Control.Zoom = r.Control.extend({
							options: {
								position: "topleft",
								zoomInText: "+",
								zoomInTitle: "Zoom in",
								zoomOutText: "-",
								zoomOutTitle: "Zoom out"
							},
							onAdd: function (t) {
								var e = "leaflet-control-zoom",
								n = r.DomUtil.create("div", e + " leaflet-bar");
								return this._map = t,
								this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", n, this._zoomIn, this),
								this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", n, this._zoomOut, this),
								this._updateDisabled(),
								t.on("zoomend zoomlevelschange", this._updateDisabled, this),
								n
							},
							onRemove: function (t) {
								t.off("zoomend zoomlevelschange", this._updateDisabled, this)
							},
							_zoomIn: function (t) {
								this._map.zoomIn(t.shiftKey ? 3 : 1)
							},
							_zoomOut: function (t) {
								this._map.zoomOut(t.shiftKey ? 3 : 1)
							},
							_createButton: function (t, e, n, i, a, o) {
								var s = r.DomUtil.create("a", n, i);
								s.innerHTML = t,
								s.href = "#",
								s.title = e;
								var l = r.DomEvent.stopPropagation;
								return r.DomEvent.on(s, "click", l).on(s, "mousedown", l).on(s, "dblclick", l).on(s, "click", r.DomEvent.preventDefault).on(s, "click", a, o).on(s, "click", this._refocusOnMap, o),
								s
							},
							_updateDisabled: function () {
								var t = this._map,
								e = "leaflet-disabled";
								r.DomUtil.removeClass(this._zoomInButton, e),
								r.DomUtil.removeClass(this._zoomOutButton, e),
								t._zoom === t.getMinZoom() && r.DomUtil.addClass(this._zoomOutButton, e),
								t._zoom === t.getMaxZoom() && r.DomUtil.addClass(this._zoomInButton, e)
							}
						}),
					r.Map.mergeOptions({
						zoomControl: !0
					}),
					r.Map.addInitHook(function () {
						this.options.zoomControl && (this.zoomControl = new r.Control.Zoom, this.addControl(this.zoomControl))
					}),
					r.control.zoom = function (t) {
						return new r.Control.Zoom(t)
					},
					r.Control.Attribution = r.Control.extend({
							options: {
								position: "bottomright",
								prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
							},
							initialize: function (t) {
								r.setOptions(this, t),
								this._attributions = {}
							},
							onAdd: function (t) {
								this._container = r.DomUtil.create("div", "leaflet-control-attribution"),
								r.DomEvent.disableClickPropagation(this._container);
								for (var e in t._layers)
									t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
								return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this),
								this._update(),
								this._container
							},
							onRemove: function (t) {
								t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
							},
							setPrefix: function (t) {
								return this.options.prefix = t,
								this._update(),
								this
							},
							addAttribution: function (t) {
								if (t)
									return this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this
							},
							removeAttribution: function (t) {
								if (t)
									return this._attributions[t] && (this._attributions[t]--, this._update()), this
							},
							_update: function () {
								if (this._map) {
									var t = [];
									for (var e in this._attributions)
										this._attributions[e] && t.push(e);
									var n = [];
									this.options.prefix && n.push(this.options.prefix),
									t.length && n.push(t.join(", ")),
									this._container.innerHTML = n.join(" | ")
								}
							},
							_onLayerAdd: function (t) {
								t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
							},
							_onLayerRemove: function (t) {
								t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
							}
						}),
					r.Map.mergeOptions({
						attributionControl: !0
					}),
					r.Map.addInitHook(function () {
						this.options.attributionControl && (this.attributionControl = (new r.Control.Attribution).addTo(this))
					}),
					r.control.attribution = function (t) {
						return new r.Control.Attribution(t)
					},
					r.Control.Scale = r.Control.extend({
							options: {
								position: "bottomleft",
								maxWidth: 100,
								metric: !0,
								imperial: !0,
								updateWhenIdle: !1
							},
							onAdd: function (t) {
								this._map = t;
								var e = r.DomUtil.create("div", "leaflet-control-scale"),
								n = this.options;
								return this._addScales(n, "leaflet-control-scale", e),
								t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
								t.whenReady(this._update, this),
								e
							},
							onRemove: function (t) {
								t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
							},
							_addScales: function (t, e, n) {
								t.metric && (this._mScale = r.DomUtil.create("div", e + "-line", n)),
								t.imperial && (this._iScale = r.DomUtil.create("div", e + "-line", n))
							},
							_update: function () {
								var t = this._map.getBounds(),
								e = t.getCenter().lat,
								n = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
								i = n * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
								a = this._map.getSize(),
								o = this.options,
								r = 0;
								a.x > 0 && (r = i * (o.maxWidth / a.x)),
								this._updateScales(o, r)
							},
							_updateScales: function (t, e) {
								t.metric && e && this._updateMetric(e),
								t.imperial && e && this._updateImperial(e)
							},
							_updateMetric: function (t) {
								var e = this._getRoundNum(t);
								this._mScale.style.width = this._getScaleWidth(e / t) + "px",
								this._mScale.innerHTML = e < 1e3 ? e + " m" : e / 1e3 + " km"
							},
							_updateImperial: function (t) {
								var e,
								n,
								i,
								a = 3.2808399 * t,
								o = this._iScale;
								a > 5280 ? (e = a / 5280, n = this._getRoundNum(e), o.style.width = this._getScaleWidth(n / e) + "px", o.innerHTML = n + " mi") : (i = this._getRoundNum(a), o.style.width = this._getScaleWidth(i / a) + "px", o.innerHTML = i + " ft")
							},
							_getScaleWidth: function (t) {
								return Math.round(this.options.maxWidth * t) - 10
							},
							_getRoundNum: function (t) {
								var e = Math.pow(10, (Math.floor(t) + "").length - 1),
								n = t / e;
								return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1,
								e * n
							}
						}),
					r.control.scale = function (t) {
						return new r.Control.Scale(t)
					},
					r.Control.Layers = r.Control.extend({
							options: {
								collapsed: !0,
								position: "topright",
								autoZIndex: !0
							},
							initialize: function (t, e, n) {
								r.setOptions(this, n),
								this._layers = {},
								this._lastZIndex = 0,
								this._handlingClick = !1;
								for (var i in t)
									this._addLayer(t[i], i);
								for (i in e)
									this._addLayer(e[i], i, !0)
							},
							onAdd: function (t) {
								return this._initLayout(),
								this._update(),
								t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this),
								this._container
							},
							onRemove: function (t) {
								t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
							},
							addBaseLayer: function (t, e) {
								return this._addLayer(t, e),
								this._update(),
								this
							},
							addOverlay: function (t, e) {
								return this._addLayer(t, e, !0),
								this._update(),
								this
							},
							removeLayer: function (t) {
								var e = r.stamp(t);
								return delete this._layers[e],
								this._update(),
								this
							},
							_initLayout: function () {
								var t = "leaflet-control-layers",
								e = this._container = r.DomUtil.create("div", t);
								e.setAttribute("aria-haspopup", !0),
								r.Browser.touch ? r.DomEvent.on(e, "click", r.DomEvent.stopPropagation) : r.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
								var n = this._form = r.DomUtil.create("form", t + "-list");
								if (this.options.collapsed) {
									r.Browser.android || r.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
									var i = this._layersLink = r.DomUtil.create("a", t + "-toggle", e);
									i.href = "#",
									i.title = "Layers",
									r.Browser.touch ? r.DomEvent.on(i, "click", r.DomEvent.stop).on(i, "click", this._expand, this) : r.DomEvent.on(i, "focus", this._expand, this),
									r.DomEvent.on(n, "click", function () {
										setTimeout(r.bind(this._onInputClick, this), 0)
									}, this),
									this._map.on("click", this._collapse, this)
								} else
									this._expand();
								this._baseLayersList = r.DomUtil.create("div", t + "-base", n),
								this._separator = r.DomUtil.create("div", t + "-separator", n),
								this._overlaysList = r.DomUtil.create("div", t + "-overlays", n),
								e.appendChild(n)
							},
							_addLayer: function (t, e, n) {
								var i = r.stamp(t);
								this._layers[i] = {
									layer: t,
									name: e,
									overlay: n
								},
								this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
							},
							_update: function () {
								if (this._container) {
									this._baseLayersList.innerHTML = "",
									this._overlaysList.innerHTML = "";
									var t,
									e,
									n = !1,
									i = !1;
									for (t in this._layers)
										e = this._layers[t], this._addItem(e), i = i || e.overlay, n = n || !e.overlay;
									this._separator.style.display = i && n ? "" : "none"
								}
							},
							_onLayerChange: function (t) {
								var e = this._layers[r.stamp(t.layer)];
								if (e) {
									this._handlingClick || this._update();
									var n = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
									n && this._map.fire(n, e)
								}
							},
							_createRadioElement: function (t, e) {
								var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
								e && (n += ' checked="checked"'),
								n += "/>";
								var a = i.createElement("div");
								return a.innerHTML = n,
								a.firstChild
							},
							_addItem: function (t) {
								var e,
								n = i.createElement("label"),
								a = this._map.hasLayer(t.layer);
								t.overlay ? (e = i.createElement("input"), e.type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = a) : e = this._createRadioElement("leaflet-base-layers", a),
								e.layerId = r.stamp(t.layer),
								r.DomEvent.on(e, "click", this._onInputClick, this);
								var o = i.createElement("span");
								return o.innerHTML = " " + t.name,
								n.appendChild(e),
								n.appendChild(o),
								(t.overlay ? this._overlaysList : this._baseLayersList).appendChild(n),
								n
							},
							_onInputClick: function () {
								var t,
								e,
								n,
								i = this._form.getElementsByTagName("input"),
								a = i.length;
								for (this._handlingClick = !0, t = 0; t < a; t++)
									e = i[t], n = this._layers[e.layerId], e.checked && !this._map.hasLayer(n.layer) ? this._map.addLayer(n.layer) : !e.checked && this._map.hasLayer(n.layer) && this._map.removeLayer(n.layer);
								this._handlingClick = !1,
								this._refocusOnMap()
							},
							_expand: function () {
								r.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
							},
							_collapse: function () {
								this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
							}
						}),
					r.control.layers = function (t, e, n) {
						return new r.Control.Layers(t, e, n)
					},
					r.PosAnimation = r.Class.extend({
							includes: r.Mixin.Events,
							run: function (t, e, n, i) {
								this.stop(),
								this._el = t,
								this._inProgress = !0,
								this._newPos = e,
								this.fire("start"),
								t.style[r.DomUtil.TRANSITION] = "all " + (n || .25) + "s cubic-bezier(0,0," + (i || .5) + ",1)",
								r.DomEvent.on(t, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
								r.DomUtil.setPosition(t, e),
								r.Util.falseFn(t.offsetWidth),
								this._stepTimer = setInterval(r.bind(this._onStep, this), 50)
							},
							stop: function () {
								this._inProgress && (r.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), r.Util.falseFn(this._el.offsetWidth))
							},
							_onStep: function () {
								var t = this._getPos();
								if (!t)
									return void this._onTransitionEnd();
								this._el._leaflet_pos = t,
								this.fire("step")
							},
							_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
							_getPos: function () {
								var t,
								n,
								i,
								a = this._el,
								o = e.getComputedStyle(a);
								if (r.Browser.any3d) {
									if (!(i = o[r.DomUtil.TRANSFORM].match(this._transformRe)))
										return;
									t = parseFloat(i[1]),
									n = parseFloat(i[2])
								} else
									t = parseFloat(o.left), n = parseFloat(o.top);
								return new r.Point(t, n, !0)
							},
							_onTransitionEnd: function () {
								r.DomEvent.off(this._el, r.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
								this._inProgress && (this._inProgress = !1, this._el.style[r.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
							}
						}),
					r.Map.include({
						setView: function (t, e, n) {
							if (e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(r.latLng(t), e, this.options.maxBounds), n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && !0 !== n) {
								void 0 !== n.animate && (n.zoom = r.extend({
											animate: n.animate
										}, n.zoom), n.pan = r.extend({
											animate: n.animate
										}, n.pan));
								if (this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan))
									return clearTimeout(this._sizeTimer), this
							}
							return this._resetView(t, e),
							this
						},
						panBy: function (t, e) {
							if (t = r.point(t).round(), e = e || {}, !t.x && !t.y)
								return this;
							if (this._panAnim || (this._panAnim = new r.PosAnimation, this._panAnim.on({
										step: this._onPanTransitionStep,
										end: this._onPanTransitionEnd
									}, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
								r.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
								var n = this._getMapPanePos().subtract(t);
								this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
							} else
								this._rawPanBy(t), this.fire("move").fire("moveend");
							return this
						},
						_onPanTransitionStep: function () {
							this.fire("move")
						},
						_onPanTransitionEnd: function () {
							r.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"),
							this.fire("moveend")
						},
						_tryAnimatedPan: function (t, e) {
							var n = this._getCenterOffset(t)._floor();
							return !(!0 !== (e && e.animate) && !this.getSize().contains(n)) && (this.panBy(n, e), !0)
						}
					}),
					r.PosAnimation = r.DomUtil.TRANSITION ? r.PosAnimation : r.PosAnimation.extend({
							run: function (t, e, n, i) {
								this.stop(),
								this._el = t,
								this._inProgress = !0,
								this._duration = n || .25,
								this._easeOutPower = 1 / Math.max(i || .5, .2),
								this._startPos = r.DomUtil.getPosition(t),
								this._offset = e.subtract(this._startPos),
								this._startTime = +new Date,
								this.fire("start"),
								this._animate()
							},
							stop: function () {
								this._inProgress && (this._step(), this._complete())
							},
							_animate: function () {
								this._animId = r.Util.requestAnimFrame(this._animate, this),
								this._step()
							},
							_step: function () {
								var t = +new Date - this._startTime,
								e = 1e3 * this._duration;
								t < e ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
							},
							_runFrame: function (t) {
								var e = this._startPos.add(this._offset.multiplyBy(t));
								r.DomUtil.setPosition(this._el, e),
								this.fire("step")
							},
							_complete: function () {
								r.Util.cancelAnimFrame(this._animId),
								this._inProgress = !1,
								this.fire("end")
							},
							_easeOut: function (t) {
								return 1 - Math.pow(1 - t, this._easeOutPower)
							}
						}),
					r.Map.mergeOptions({
						zoomAnimation: !0,
						zoomAnimationThreshold: 4
					}),
					r.DomUtil.TRANSITION && r.Map.addInitHook(function () {
						this._zoomAnimated = this.options.zoomAnimation && r.DomUtil.TRANSITION && r.Browser.any3d && !r.Browser.android23 && !r.Browser.mobileOpera,
						this._zoomAnimated && r.DomEvent.on(this._mapPane, r.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
					}),
					r.Map.include(r.DomUtil.TRANSITION ? {
						_catchTransitionEnd: function (t) {
							this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
						},
						_nothingToAnimate: function () {
							return !this._container.getElementsByClassName("leaflet-zoom-animated").length
						},
						_tryAnimatedZoom: function (t, e, n) {
							if (this._animatingZoom)
								return !0;
							if (n = n || {}, !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
								return !1;
							var i = this.getZoomScale(e),
							a = this._getCenterOffset(t)._divideBy(1 - 1 / i),
							o = this._getCenterLayerPoint()._add(a);
							return !(!0 !== n.animate && !this.getSize().contains(a)) && (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, o, i, null, !0), !0)
						},
						_animateZoom: function (t, e, n, i, a, o, s) {
							s || (this._animatingZoom = !0),
							r.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"),
							this._animateToCenter = t,
							this._animateToZoom = e,
							r.Draggable && (r.Draggable._disabled = !0),
							r.Util.requestAnimFrame(function () {
								this.fire("zoomanim", {
									center: t,
									zoom: e,
									origin: n,
									scale: i,
									delta: a,
									backwards: o
								}),
								setTimeout(r.bind(this._onZoomTransitionEnd, this), 250)
							}, this)
						},
						_onZoomTransitionEnd: function () {
							this._animatingZoom && (this._animatingZoom = !1, r.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), r.Util.requestAnimFrame(function () {
									this._resetView(this._animateToCenter, this._animateToZoom, !0, !0),
									r.Draggable && (r.Draggable._disabled = !1)
								}, this))
						}
					}
						 : {}),
					r.TileLayer.include({
						_animateZoom: function (t) {
							this._animating || (this._animating = !0, this._prepareBgBuffer());
							var e = this._bgBuffer,
							n = r.DomUtil.TRANSFORM,
							i = t.delta ? r.DomUtil.getTranslateString(t.delta) : e.style[n],
							a = r.DomUtil.getScaleString(t.scale, t.origin);
							e.style[n] = t.backwards ? a + " " + i : i + " " + a
						},
						_endZoomAnim: function () {
							var t = this._tileContainer,
							e = this._bgBuffer;
							t.style.visibility = "",
							t.parentNode.appendChild(t),
							r.Util.falseFn(e.offsetWidth);
							var n = this._map.getZoom();
							(n > this.options.maxZoom || n < this.options.minZoom) && this._clearBgBuffer(),
							this._animating = !1
						},
						_clearBgBuffer: function () {
							var t = this._map;
							!t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[r.DomUtil.TRANSFORM] = "")
						},
						_prepareBgBuffer: function () {
							var t = this._tileContainer,
							e = this._bgBuffer,
							n = this._getLoadedTilesPercentage(e),
							i = this._getLoadedTilesPercentage(t);
							if (e && n > .5 && i < .5)
								return t.style.visibility = "hidden", void this._stopLoadingImages(t);
							e.style.visibility = "hidden",
							e.style[r.DomUtil.TRANSFORM] = "",
							this._tileContainer = e,
							e = this._bgBuffer = t,
							this._stopLoadingImages(e),
							clearTimeout(this._clearBgBufferTimer)
						},
						_getLoadedTilesPercentage: function (t) {
							var e,
							n,
							i = t.getElementsByTagName("img"),
							a = 0;
							for (e = 0, n = i.length; e < n; e++)
								i[e].complete && a++;
							return a / n
						},
						_stopLoadingImages: function (t) {
							var e,
							n,
							i,
							a = Array.prototype.slice.call(t.getElementsByTagName("img"));
							for (e = 0, n = a.length; e < n; e++)
								i = a[e], i.complete || (i.onload = r.Util.falseFn, i.onerror = r.Util.falseFn, i.src = r.Util.emptyImageUrl, i.parentNode.removeChild(i))
						}
					}),
					r.Map.include({
						_defaultLocateOptions: {
							watch: !1,
							setView: !1,
							maxZoom: 1 / 0,
							timeout: 1e4,
							maximumAge: 0,
							enableHighAccuracy: !1
						},
						locate: function (t) {
							if (t = this._locateOptions = r.extend(this._defaultLocateOptions, t), !navigator.geolocation)
								return this._handleGeolocationError({
									code: 0,
									message: "Geolocation not supported."
								}), this;
							var e = r.bind(this._handleGeolocationResponse, this),
							n = r.bind(this._handleGeolocationError, this);
							return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t) : navigator.geolocation.getCurrentPosition(e, n, t),
							this
						},
						stopLocate: function () {
							return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId),
							this._locateOptions && (this._locateOptions.setView = !1),
							this
						},
						_handleGeolocationError: function (t) {
							var e = t.code,
							n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
							this._locateOptions.setView && !this._loaded && this.fitWorld(),
							this.fire("locationerror", {
								code: e,
								message: "Geolocation error: " + n + "."
							})
						},
						_handleGeolocationResponse: function (t) {
							var e = t.coords.latitude,
							n = t.coords.longitude,
							i = new r.LatLng(e, n),
							a = 180 * t.coords.accuracy / 40075017,
							o = a / Math.cos(r.LatLng.DEG_TO_RAD * e),
							s = r.latLngBounds([e - a, n - o], [e + a, n + o]),
							l = this._locateOptions;
							if (l.setView) {
								var d = Math.min(this.getBoundsZoom(s), l.maxZoom);
								this.setView(i, d)
							}
							var u = {
								latlng: i,
								bounds: s,
								timestamp: t.timestamp
							};
							for (var h in t.coords)
								"number" == typeof t.coords[h] && (u[h] = t.coords[h]);
							this.fire("locationfound", u)
						}
					})
				}
				(window, document)
			}, {}
		],
		32: [function (t, e, n) {
				(function (n) {
					"use strict";
					function i(t, e) {
						return 1 === arguments.length ? a(t) : o(t, e)
					}
					function a(t) {
						return JSON.parse(u.getItem(t))
					}
					function o(t, e) {
						try {
							return u.setItem(t, JSON.stringify(e)),
							!0
						} catch (t) {
							return !1
						}
					}
					function r(t) {
						return u.removeItem(t)
					}
					function s() {
						return u.clear()
					}
					var l = t("./stub"),
					d = t("./tracking"),
					u = "localStorage" in n && n.localStorage ? n.localStorage : l;
					i.set = o,
					i.get = a,
					i.remove = r,
					i.clear = s,
					i.on = d.on,
					i.off = d.off,
					e.exports = i
				}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {
				"./stub": 33,
				"./tracking": 34
			}
		],
		33: [function (t, e, n) {
				"use strict";
				function i(t) {
					return t in s ? s[t] : null
				}
				function a(t, e) {
					return s[t] = e,
					!0
				}
				function o(t) {
					return !!(t in s) && delete s[t]
				}
				function r() {
					return s = {},
					!0
				}
				var s = {};
				e.exports = {
					getItem: i,
					setItem: a,
					removeItem: o,
					clear: r
				}
			}, {}
		],
		34: [function (t, e, n) {
				(function (t) {
					"use strict";
					function n() {
						t.addEventListener ? t.addEventListener("storage", i, !1) : t.attachEvent ? t.attachEvent("onstorage", i) : t.onstorage = i
					}
					function i(e) {
						function n(t) {
							t(JSON.parse(e.newValue), JSON.parse(e.oldValue), e.url || e.uri)
						}
						e || (e = t.event);
						var i = r[e.key];
						i && i.forEach(n)
					}
					function a(t, e) {
						r[t] ? r[t].push(e) : r[t] = [e],
						!1 === s && n()
					}
					function o(t, e) {
						var n = r[t];
						n.length > 1 ? n.splice(n.indexOf(e), 1) : r[t] = []
					}
					var r = {},
					s = !1;
					e.exports = {
						on: a,
						off: o
					}
				}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}, {}
		],
		35: [function (t, e, n) {
				var i = t("./languages"),
				a = i.instructions;
				e.exports = function (t, e) {
					var n = {};
					return n.hooks = {},
					n.hooks.tokenizedInstruction = ((e || {}).hooks || {}).tokenizedInstruction,
					Object.keys(a).forEach(function (e) {
						if (!a[e][t])
							throw "invalid version " + t + ": " + e + " not supported"
					}), {
						capitalizeFirstLetter: function (t) {
							return t.charAt(0).toUpperCase() + t.slice(1)
						},
						ordinalize: function (e, n) {
							if (!e)
								throw new Error("No language code provided");
							return a[e][t].constants.ordinalize[n.toString()] || ""
						},
						directionFromDegree: function (e, n) {
							if (!e)
								throw new Error("No language code provided");
							if (n || 0 === n) {
								if (n >= 0 && n <= 20)
									return a[e][t].constants.direction.north;
								if (n > 20 && n < 70)
									return a[e][t].constants.direction.northeast;
								if (n >= 70 && n <= 110)
									return a[e][t].constants.direction.east;
								if (n > 110 && n < 160)
									return a[e][t].constants.direction.southeast;
								if (n >= 160 && n <= 200)
									return a[e][t].constants.direction.south;
								if (n > 200 && n < 250)
									return a[e][t].constants.direction.southwest;
								if (n >= 250 && n <= 290)
									return a[e][t].constants.direction.west;
								if (n > 290 && n < 340)
									return a[e][t].constants.direction.northwest;
								if (n >= 340 && n <= 360)
									return a[e][t].constants.direction.north;
								throw new Error("Degree " + n + " invalid")
							}
							return ""
						},
						laneConfig: function (t) {
							if (!t.intersections || !t.intersections[0].lanes)
								throw new Error("No lanes object");
							var e = [],
							n = null;
							return t.intersections[0].lanes.forEach(function (t) {
								null !== n && n === t.valid || (t.valid ? e.push("o") : e.push("x"), n = t.valid)
							}),
							e.join("")
						},
						compile: function (e, o, r) {
							if (!e)
								throw new Error("No language code provided");
							if (-1 === i.supportedCodes.indexOf(e))
								throw new Error("language code " + e + " not loaded");
							if (!o.maneuver)
								throw new Error("No step maneuver provided");
							var s = o.maneuver.type,
							l = o.maneuver.modifier,
							d = o.mode;
							if (!s)
								throw new Error("Missing step maneuver type");
							if ("depart" !== s && "arrive" !== s && !l)
								throw new Error("Missing step maneuver modifier");
							a[e][t][s] || (console.log("Encountered unknown instruction type: " + s), s = "turn");
							var u;
							u = a[e][t].modes[d] ? a[e][t].modes[d] : a[e][t][s][l] ? a[e][t][s][l] : a[e][t][s].default;
								var h;
								switch (s) {
								case "use lane":
									h = a[e][t].constants.lanes[this.laneConfig(o)],
									h || (u = a[e][t]["use lane"].no_lanes);
									break;
								case "rotary":
								case "roundabout":
									u = o.rotary_name && o.maneuver.exit && u.name_exit ? u.name_exit : o.rotary_name && u.name ? u.name : o.maneuver.exit && u.exit ? u.exit : u.default
								}
								var c, m = o.name || "", f = (o.ref || "").split(";")[0];
								m === o.ref && (m = ""), m = m.replace(" (" + o.ref + ")", ""), c = m && f && m !== f ? m + " (" + f + ")" : !m && f ? f : m;
								var p;
								p = o.destinations && o.exits && u.exit_destination ? u.exit_destination : o.destinations && u.destination ? u.destination : o.exits && u.exit ? u.exit : c && u.name ? u.name : u.default, n.hooks.tokenizedInstruction && (p = n.hooks.tokenizedInstruction(p));
									var g = r && r.legIndex >= 0 && r.legIndex !== r.legCount - 1 ? this.ordinalize(e, r.legIndex + 1) : "";
									return p = p.replace("{way_name}", c).replace("{destination}", (o.destinations || "").split(",")[0]).replace("{exit}", (o.exits || "").split(";")[0]).replace("{exit_number}", this.ordinalize(e, o.maneuver.exit || 1)).replace("{rotary_name}", o.rotary_name).replace("{lane_instruction}", h).replace("{modifier}", a[e][t].constants.modifier[l]).replace("{direction}", this.directionFromDegree(e, o.maneuver.bearing_after)).replace("{nth}", g).replace(/ {2}/g, " "), a[e].meta.capitalizeFirstLetter && (p = this.capitalizeFirstLetter(p)), p
						}
					}
				}
			}, {
				"./languages": 36
			}
		],
		36: [function (t, e, n) {
				var i = t("./languages/translations/de.json"),
				a = t("./languages/translations/en.json"),
				o = t("./languages/translations/es.json"),
				r = t("./languages/translations/fr.json"),
				s = t("./languages/translations/id.json"),
				l = t("./languages/translations/nl.json"),
				d = t("./languages/translations/pl.json"),
				u = t("./languages/translations/ru.json"),
				h = t("./languages/translations/sv.json"),
				c = t("./languages/translations/vi.json"),
				m = t("./languages/translations/zh-Hans.json"),
				f = {
					de: i,
					en: a,
					es: o,
					fr: r,
					id: s,
					nl: l,
					pl: d,
					ru: u,
					sv: h,
					vi: c,
					"zh-Hans": m
				};
				e.exports = {
					supportedCodes: Object.keys(f),
					instructions: f
				}
			}, {
				"./languages/translations/de.json": 37,
				"./languages/translations/en.json": 38,
				"./languages/translations/es.json": 39,
				"./languages/translations/fr.json": 40,
				"./languages/translations/id.json": 41,
				"./languages/translations/nl.json": 42,
				"./languages/translations/pl.json": 43,
				"./languages/translations/ru.json": 44,
				"./languages/translations/sv.json": 45,
				"./languages/translations/vi.json": 46,
				"./languages/translations/zh-Hans.json": 47
			}
		],
		37: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "erste",
								2: "zweite",
								3: "dritte",
								4: "vierte",
								5: "fünfte",
								6: "sechste",
								7: "siebente",
								8: "achte",
								9: "neunte",
								10: "zehnte"
							},
							direction: {
								north: "Norden",
								northeast: "Nordosten",
								east: "Osten",
								southeast: "Südosten",
								south: "Süden",
								southwest: "Südwesten",
								west: "Westen",
								northwest: "Nordwesten"
							},
							modifier: {
								left: "links",
								right: "rechts",
								"sharp left": "scharf links",
								"sharp right": "scharf rechts",
								"slight left": "leicht links",
								"slight right": "leicht rechts",
								straight: "geradeaus",
								uturn: "180°-Wendung"
							},
							lanes: {
								xo: "Rechts halten",
								ox: "Links halten",
								xox: "Mittlere Spur nutzen",
								oxo: "Rechts oder links halten"
							}
						},
						modes: {
							ferry: {
							default:
								"Fähre nehmen",
								name: "Fähre nehmen {way_name}",
								destination: "Fähre nehmen Richtung {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Sie haben Ihr {nth} Ziel erreicht"
							},
							left: {
							default:
								"Sie haben Ihr {nth} Ziel erreicht, es befindet sich links"
							},
							right: {
							default:
								"Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts"
							},
							"sharp left": {
							default:
								"Sie haben Ihr {nth} Ziel erreicht, es befindet sich links"
							},
							"sharp right": {
							default:
								"Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts"
							},
							"slight right": {
							default:
								"Sie haben Ihr {nth} Ziel erreicht, es befindet sich rechts"
							},
							"slight left": {
							default:
								"Sie haben Ihr {nth} Ziel erreicht, es befindet sich links"
							},
							straight: {
							default:
								"Sie haben Ihr {nth} Ziel erreicht, es befindet sich geradeaus"
							}
						},
						continue: {
						default: {
							default:
								"{modifier} weiterfahren",
								name: "{modifier} weiterfahren auf {way_name}",
								destination: "{modifier} weiterfahren Richtung {destination}"
							},
							"slight left": {
							default:
								"Leicht links weiter",
								name: "Leicht links weiter auf {way_name}",
								destination: "Leicht links weiter Richtung {destination}"
							},
							"slight right": {
							default:
								"Leicht rechts weiter",
								name: "Leicht rechts weiter auf {way_name}",
								destination: "Leicht rechts weiter Richtung {destination}"
							},
							uturn: {
							default:
								"180°-Wendung",
								name: "180°-Wendung auf {way_name}",
								destination: "180°-Wendung Richtung {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Fahren Sie Richtung {direction}",
								name: "Fahren Sie Richtung {direction} auf {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"{modifier} abbiegen",
								name: "{modifier} abbiegen auf {way_name}",
								destination: "{modifier} abbiegen Richtung {destination}"
							},
							straight: {
							default:
								"Geradeaus weiterfahren",
								name: "Geradeaus weiterfahren auf {way_name}",
								destination: "Geradeaus weiterfahren Richtung {destination}"
							},
							uturn: {
							default:
								"180°-Wendung am Ende der Straße",
								name: "180°-Wendung auf {way_name} am Ende der Straße",
								destination: "180°-Wendung Richtung {destination} am Ende der Straße"
							}
						},
						fork: {
						default: {
							default:
								"{modifier} halten an der Gabelung",
								name: "{modifier} halten an der Gabelung auf {way_name}",
								destination: "{modifier}  halten an der Gabelung Richtung {destination}"
							},
							"slight left": {
							default:
								"Links halten an der Gabelung",
								name: "Links halten an der Gabelung auf {way_name}",
								destination: "Links halten an der Gabelung Richtung {destination}"
							},
							"slight right": {
							default:
								"Rechts halten an der Gabelung",
								name: "Rechts halten an der Gabelung auf {way_name}",
								destination: "Rechts halten an der Gabelung Richtung {destination}"
							},
							"sharp left": {
							default:
								"Scharf links abbiegen an der Gabelung",
								name: "Scharf links abbiegen an der Gabelung auf {way_name}",
								destination: "Scharf links abbiegen an der Gabelung Richtung {destination}"
							},
							"sharp right": {
							default:
								"Scharf rechts abbiegen an der Gabelung",
								name: "Scharf rechts abbiegen an der Gabelung auf {way_name}",
								destination: "Scharf rechts abbiegen an der Gabelung Richtung {destination}"
							},
							uturn: {
							default:
								"180°-Wendung",
								name: "180°-Wendung auf {way_name}",
								destination: "180°-Wendung Richtung {destination}"
							}
						},
						merge: {
						default: {
							default:
								"{modifier} auffahren",
								name: "{modifier} auffahren auf {way_name}",
								destination: "{modifier} auffahren Richtung {destination}"
							},
							"slight left": {
							default:
								"Leicht links auffahren",
								name: "Leicht links auffahren auf {way_name}",
								destination: "Leicht links auffahren Richtung {destination}"
							},
							"slight right": {
							default:
								"Leicht rechts auffahren",
								name: "Leicht rechts auffahren auf {way_name}",
								destination: "Leicht rechts auffahren Richtung {destination}"
							},
							"sharp left": {
							default:
								"Scharf links auffahren",
								name: "Scharf links auffahren auf {way_name}",
								destination: "Scharf links auffahren Richtung {destination}"
							},
							"sharp right": {
							default:
								"Scharf rechts auffahren",
								name: "Scharf rechts auffahren auf {way_name}",
								destination: "Scharf rechts auffahren Richtung {destination}"
							},
							uturn: {
							default:
								"180°-Wendung",
								name: "180°-Wendung auf {way_name}",
								destination: "180°-Wendung Richtung {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"{modifier} weiterfahren",
								name: "{modifier} weiterfahren auf {way_name}",
								destination: "{modifier} weiterfahren Richtung {destination}"
							},
							"sharp left": {
							default:
								"Scharf links",
								name: "Scharf links auf {way_name}",
								destination: "Scharf links Richtung {destination}"
							},
							"sharp right": {
							default:
								"Scharf rechts",
								name: "Scharf rechts auf {way_name}",
								destination: "Scharf rechts Richtung {destination}"
							},
							"slight left": {
							default:
								"Leicht links weiter",
								name: "Leicht links weiter auf {way_name}",
								destination: "Leicht links weiter Richtung {destination}"
							},
							"slight right": {
							default:
								"Leicht rechts weiter",
								name: "Leicht rechts weiter auf {way_name}",
								destination: "Leicht rechts weiter Richtung {destination}"
							},
							uturn: {
							default:
								"180°-Wendung",
								name: "180°-Wendung auf {way_name}",
								destination: "180°-Wendung Richtung {destination}"
							}
						},
						notification: {
						default: {
							default:
								"{modifier} weiterfahren",
								name: "{modifier} weiterfahren auf {way_name}",
								destination: "{modifier} weiterfahren Richtung {destination}"
							},
							uturn: {
							default:
								"180°-Wendung",
								name: "180°-Wendung auf {way_name}",
								destination: "180°-Wendung Richtung {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Abfahrt nehmen",
								name: "Abfahrt nehmen auf {way_name}",
								destination: "Abfahrt nehmen Richtung {destination}",
								exit: "Abfahrt {exit} nehmen",
								exit_destination: "Abfahrt {exit} nehmen Richtung {destination}"
							},
							left: {
							default:
								"Abfahrt links nehmen",
								name: "Abfahrt links nehmen auf {way_name}",
								destination: "Abfahrt links nehmen Richtung {destination}",
								exit: "Abfahrt {exit} links nehmen",
								exit_destination: "Abfahrt {exit} links nehmen Richtung {destination}"
							},
							right: {
							default:
								"Abfahrt rechts nehmen",
								name: "Abfahrt rechts nehmen Richtung {way_name}",
								destination: "Abfahrt rechts nehmen Richtung {destination}",
								exit: "Abfahrt {exit} nehmen",
								exit_destination: "Abfahrt {exit} nehmen Richtung {destination}"
							},
							"sharp left": {
							default:
								"Abfahrt links nehmen",
								name: "Abfahrt links Seite nehmen auf {way_name}",
								destination: "Abfahrt links nehmen Richtung {destination}",
								exit: "Abfahrt {exit} links nehmen",
								exit_destination: "Abfahrt{exit} links nehmen Richtung {destination}"
							},
							"sharp right": {
							default:
								"Abfahrt rechts nehmen",
								name: "Abfahrt rechts nehmen auf {way_name}",
								destination: "Abfahrt rechts nehmen Richtung {destination}",
								exit: "Abfahrt {exit} nehmen",
								exit_destination: "Abfahrt {exit} nehmen Richtung {destination}"
							},
							"slight left": {
							default:
								"Abfahrt links nehmen",
								name: "Abfahrt links nehmen auf {way_name}",
								destination: "Abfahrt links nehmen Richtung {destination}",
								exit: "Abfahrt {exit} nehmen",
								exit_destination: "Abfahrt {exit} links nehmen Richtung {destination}"
							},
							"slight right": {
							default:
								"Abfahrt rechts nehmen",
								name: "Abfahrt rechts nehmen auf {way_name}",
								destination: "Abfahrt rechts nehmen Richtung {destination}",
								exit: "Abfahrt {exit} nehmen",
								exit_destination: "Abfahrt {exit} nehmen Richtung {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Auffahrt nehmen",
								name: "Auffahrt nehmen auf {way_name}",
								destination: "Auffahrt nehmen Richtung {destination}"
							},
							left: {
							default:
								"Auffahrt links nehmen",
								name: "Auffahrt links nehmen auf {way_name}",
								destination: "Auffahrt links nehmen Richtung {destination}"
							},
							right: {
							default:
								"Auffahrt rechts nehmen",
								name: "Auffahrt rechts nehmen auf {way_name}",
								destination: "Auffahrt rechts nehmen Richtung {destination}"
							},
							"sharp left": {
							default:
								"Auffahrt links nehmen",
								name: "Auffahrt links nehmen auf {way_name}",
								destination: "Auffahrt links nehmen Richtung {destination}"
							},
							"sharp right": {
							default:
								"Auffahrt rechts nehmen",
								name: "Auffahrt rechts nehmen auf {way_name}",
								destination: "Auffahrt rechts nehmen Richtung {destination}"
							},
							"slight left": {
							default:
								"Auffahrt links Seite nehmen",
								name: "Auffahrt links nehmen auf {way_name}",
								destination: "Auffahrt links nehmen Richtung {destination}"
							},
							"slight right": {
							default:
								"Auffahrt rechts nehmen",
								name: "Auffahrt rechts nehmen auf {way_name}",
								destination: "Auffahrt rechts nehmen Richtung {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"In den Kreisverkehr fahren",
									name: "Im Kreisverkehr die Ausfahrt auf {way_name} nehmen",
									destination: "Im Kreisverkehr die Ausfahrt Richtung {destination} nehmen"
								},
								name: {
								default:
									"In {rotary_name} fahren",
									name: "In {rotary_name} die Ausfahrt auf {way_name} nehmen",
									destination: "In {rotary_name} die Ausfahrt Richtung {destination} nehmen"
								},
								exit: {
								default:
									"Im Kreisverkehr die {exit_number} Ausfahrt nehmen",
									name: "Im Kreisverkehr die {exit_number} Ausfahrt nehmen auf {way_name}",
									destination: "Im Kreisverkehr die {exit_number} Ausfahrt nehmen Richtung {destination}"
								},
								name_exit: {
								default:
									"In den Kreisverkehr fahren und {exit_number} Ausfahrt nehmen",
									name: "In den Kreisverkehr fahren und {exit_number} Ausfahrt nehmen auf {way_name}",
									destination: "In den Kreisverkehr fahren und {exit_number} Ausfahrt nehmen Richtung {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Im Kreisverkehr die {exit_number} Ausfahrt nehmen",
									name: "Im Kreisverkehr die {exit_number} Ausfahrt nehmen auf {way_name}",
									destination: "Im Kreisverkehr die {exit_number} Ausfahrt nehmen Richtung {destination}"
								},
							default: {
								default:
									"In den Kreisverkehr fahren",
									name: "Im Kreisverkehr die Ausfahrt auf {way_name} nehmen",
									destination: "Im Kreisverkehr die Ausfahrt Richtung {destination} nehmen"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"Am Kreisverkehr {modifier}",
								name: "Am Kreisverkehr {modifier} auf {way_name}",
								destination: "Am Kreisverkehr {modifier} Richtung {destination}"
							},
							left: {
							default:
								"Am Kreisverkehr links abbiegen",
								name: "Am Kreisverkehr links auf {way_name}",
								destination: "Am Kreisverkehr links Richtung {destination}"
							},
							right: {
							default:
								"Am Kreisverkehr rechts abbiegen",
								name: "Am Kreisverkehr rechts auf {way_name}",
								destination: "Am Kreisverkehr rechts Richtung {destination}"
							},
							straight: {
							default:
								"Am Kreisverkehr geradeaus weiterfahren",
								name: "Am Kreisverkehr geradeaus weiterfahren auf {way_name}",
								destination: "Am Kreisverkehr geradeaus weiterfahren Richtung {destination}"
							}
						},
						turn: {
						default: {
							default:
								"{modifier} abbiegen",
								name: "{modifier} abbiegen auf {way_name}",
								destination: "{modifier} abbiegen Richtung {destination}"
							},
							left: {
							default:
								"Links abbiegen",
								name: "Links abbiegen auf {way_name}",
								destination: "Links abbiegen Richtung {destination}"
							},
							right: {
							default:
								"Rechts abbiegen",
								name: "Rechts abbiegen auf {way_name}",
								destination: "Rechts abbiegen Richtung {destination}"
							},
							straight: {
							default:
								"Geradeaus weiterfahren",
								name: "Geradeaus weiterfahren auf {way_name}",
								destination: "Geradeaus weiterfahren Richtung {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Geradeaus weiterfahren"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		38: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "1st",
								2: "2nd",
								3: "3rd",
								4: "4th",
								5: "5th",
								6: "6th",
								7: "7th",
								8: "8th",
								9: "9th",
								10: "10th"
							},
							direction: {
								north: "north",
								northeast: "northeast",
								east: "east",
								southeast: "southeast",
								south: "south",
								southwest: "southwest",
								west: "west",
								northwest: "northwest"
							},
							modifier: {
								left: "left",
								right: "right",
								"sharp left": "sharp left",
								"sharp right": "sharp right",
								"slight left": "slight left",
								"slight right": "slight right",
								straight: "straight",
								uturn: "U-turn"
							},
							lanes: {
								xo: "Keep right",
								ox: "Keep left",
								xox: "Keep in the middle",
								oxo: "Keep left or right"
							}
						},
						modes: {
							ferry: {
							default:
								"Take the ferry",
								name: "Take the ferry {way_name}",
								destination: "Take the ferry towards {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"You have arrived at your {nth} destination"
							},
							left: {
							default:
								"You have arrived at your {nth} destination, on the left"
							},
							right: {
							default:
								"You have arrived at your {nth} destination, on the right"
							},
							"sharp left": {
							default:
								"You have arrived at your {nth} destination, on the left"
							},
							"sharp right": {
							default:
								"You have arrived at your {nth} destination, on the right"
							},
							"slight right": {
							default:
								"You have arrived at your {nth} destination, on the right"
							},
							"slight left": {
							default:
								"You have arrived at your {nth} destination, on the left"
							},
							straight: {
							default:
								"You have arrived at your {nth} destination, straight ahead"
							}
						},
						continue: {
						default: {
							default:
								"Continue {modifier}",
								name: "Continue {modifier} onto {way_name}",
								destination: "Continue {modifier} towards {destination}"
							},
							straight: {
							default:
								"Continue straight",
								name: "Continue onto {way_name}",
								destination: "Continue towards {destination}"
							},
							"slight left": {
							default:
								"Continue slightly left",
								name: "Continue slightly left onto {way_name}",
								destination: "Continue slightly left towards {destination}"
							},
							"slight right": {
							default:
								"Continue slightly right",
								name: "Continue slightly right onto {way_name}",
								destination: "Continue slightly right towards {destination}"
							},
							uturn: {
							default:
								"Make a U-turn",
								name: "Make a U-turn onto {way_name}",
								destination: "Make a U-turn towards {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Head {direction}",
								name: "Head {direction} on {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Turn {modifier}",
								name: "Turn {modifier} onto {way_name}",
								destination: "Turn {modifier} towards {destination}"
							},
							straight: {
							default:
								"Continue straight",
								name: "Continue straight onto {way_name}",
								destination: "Continue straight towards {destination}"
							},
							uturn: {
							default:
								"Make a U-turn at the end of the road",
								name: "Make a U-turn onto {way_name} at the end of the road",
								destination: "Make a U-turn towards {destination} at the end of the road"
							}
						},
						fork: {
						default: {
							default:
								"Keep {modifier} at the fork",
								name: "Keep {modifier} at the fork onto {way_name}",
								destination: "Keep {modifier} at the fork towards {destination}"
							},
							"slight left": {
							default:
								"Keep left at the fork",
								name: "Keep left at the fork onto {way_name}",
								destination: "Keep left at the fork towards {destination}"
							},
							"slight right": {
							default:
								"Keep right at the fork",
								name: "Keep right at the fork onto {way_name}",
								destination: "Keep right at the fork towards {destination}"
							},
							"sharp left": {
							default:
								"Take a sharp left at the fork",
								name: "Take a sharp left at the fork onto {way_name}",
								destination: "Take a sharp left at the fork towards {destination}"
							},
							"sharp right": {
							default:
								"Take a sharp right at the fork",
								name: "Take a sharp right at the fork onto {way_name}",
								destination: "Take a sharp right at the fork towards {destination}"
							},
							uturn: {
							default:
								"Make a U-turn",
								name: "Make a U-turn onto {way_name}",
								destination: "Make a U-turn towards {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Merge {modifier}",
								name: "Merge {modifier} onto {way_name}",
								destination: "Merge {modifier} towards {destination}"
							},
							"slight left": {
							default:
								"Merge left",
								name: "Merge left onto {way_name}",
								destination: "Merge left towards {destination}"
							},
							"slight right": {
							default:
								"Merge right",
								name: "Merge right onto {way_name}",
								destination: "Merge right towards {destination}"
							},
							"sharp left": {
							default:
								"Merge left",
								name: "Merge left onto {way_name}",
								destination: "Merge left towards {destination}"
							},
							"sharp right": {
							default:
								"Merge right",
								name: "Merge right onto {way_name}",
								destination: "Merge right towards {destination}"
							},
							uturn: {
							default:
								"Make a U-turn",
								name: "Make a U-turn onto {way_name}",
								destination: "Make a U-turn towards {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Continue {modifier}",
								name: "Continue {modifier} onto {way_name}",
								destination: "Continue {modifier} towards {destination}"
							},
							"sharp left": {
							default:
								"Take a sharp left",
								name: "Take a sharp left onto {way_name}",
								destination: "Take a sharp left towards {destination}"
							},
							"sharp right": {
							default:
								"Take a sharp right",
								name: "Take a sharp right onto {way_name}",
								destination: "Take a sharp right towards {destination}"
							},
							"slight left": {
							default:
								"Continue slightly left",
								name: "Continue slightly left onto {way_name}",
								destination: "Continue slightly left towards {destination}"
							},
							"slight right": {
							default:
								"Continue slightly right",
								name: "Continue slightly right onto {way_name}",
								destination: "Continue slightly right towards {destination}"
							},
							uturn: {
							default:
								"Make a U-turn",
								name: "Make a U-turn onto {way_name}",
								destination: "Make a U-turn towards {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Continue {modifier}",
								name: "Continue {modifier} onto {way_name}",
								destination: "Continue {modifier} towards {destination}"
							},
							uturn: {
							default:
								"Make a U-turn",
								name: "Make a U-turn onto {way_name}",
								destination: "Make a U-turn towards {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Take the ramp",
								name: "Take the ramp onto {way_name}",
								destination: "Take the ramp towards {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} towards {destination}"
							},
							left: {
							default:
								"Take the ramp on the left",
								name: "Take the ramp on the left onto {way_name}",
								destination: "Take the ramp on the left towards {destination}",
								exit: "Take exit {exit} on the left",
								exit_destination: "Take exit {exit} on the left towards {destination}"
							},
							right: {
							default:
								"Take the ramp on the right",
								name: "Take the ramp on the right onto {way_name}",
								destination: "Take the ramp on the right towards {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} on the right towards {destination}"
							},
							"sharp left": {
							default:
								"Take the ramp on the left",
								name: "Take the ramp on the left onto {way_name}",
								destination: "Take the ramp on the left towards {destination}",
								exit: "Take exit {exit} on the left",
								exit_destination: "Take exit {exit} on the left towards {destination}"
							},
							"sharp right": {
							default:
								"Take the ramp on the right",
								name: "Take the ramp on the right onto {way_name}",
								destination: "Take the ramp on the right towards {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} on the right towards {destination}"
							},
							"slight left": {
							default:
								"Take the ramp on the left",
								name: "Take the ramp on the left onto {way_name}",
								destination: "Take the ramp on the left towards {destination}",
								exit: "Take exit {exit} on the left",
								exit_destination: "Take exit {exit} on the left towards {destination}"
							},
							"slight right": {
							default:
								"Take the ramp on the right",
								name: "Take the ramp on the right onto {way_name}",
								destination: "Take the ramp on the right towards {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} on the right towards {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Take the ramp",
								name: "Take the ramp onto {way_name}",
								destination: "Take the ramp towards {destination}"
							},
							left: {
							default:
								"Take the ramp on the left",
								name: "Take the ramp on the left onto {way_name}",
								destination: "Take the ramp on the left towards {destination}"
							},
							right: {
							default:
								"Take the ramp on the right",
								name: "Take the ramp on the right onto {way_name}",
								destination: "Take the ramp on the right towards {destination}"
							},
							"sharp left": {
							default:
								"Take the ramp on the left",
								name: "Take the ramp on the left onto {way_name}",
								destination: "Take the ramp on the left towards {destination}"
							},
							"sharp right": {
							default:
								"Take the ramp on the right",
								name: "Take the ramp on the right onto {way_name}",
								destination: "Take the ramp on the right towards {destination}"
							},
							"slight left": {
							default:
								"Take the ramp on the left",
								name: "Take the ramp on the left onto {way_name}",
								destination: "Take the ramp on the left towards {destination}"
							},
							"slight right": {
							default:
								"Take the ramp on the right",
								name: "Take the ramp on the right onto {way_name}",
								destination: "Take the ramp on the right towards {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Enter the rotary",
									name: "Enter the rotary and exit onto {way_name}",
									destination: "Enter the rotary and exit towards {destination}"
								},
								name: {
								default:
									"Enter {rotary_name}",
									name: "Enter {rotary_name} and exit onto {way_name}",
									destination: "Enter {rotary_name} and exit towards {destination}"
								},
								exit: {
								default:
									"Enter the rotary and take the {exit_number} exit",
									name: "Enter the rotary and take the {exit_number} exit onto {way_name}",
									destination: "Enter the rotary and take the {exit_number} exit towards {destination}"
								},
								name_exit: {
								default:
									"Enter {rotary_name} and take the {exit_number} exit",
									name: "Enter {rotary_name} and take the {exit_number} exit onto {way_name}",
									destination: "Enter {rotary_name} and take the {exit_number} exit towards {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Enter the roundabout and take the {exit_number} exit",
									name: "Enter the roundabout and take the {exit_number} exit onto {way_name}",
									destination: "Enter the roundabout and take the {exit_number} exit towards {destination}"
								},
							default: {
								default:
									"Enter the roundabout",
									name: "Enter the roundabout and exit onto {way_name}",
									destination: "Enter the roundabout and exit towards {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"At the roundabout make a {modifier}",
								name: "At the roundabout make a {modifier} onto {way_name}",
								destination: "At the roundabout make a {modifier} towards {destination}"
							},
							left: {
							default:
								"At the roundabout turn left",
								name: "At the roundabout turn left onto {way_name}",
								destination: "At the roundabout turn left towards {destination}"
							},
							right: {
							default:
								"At the roundabout turn right",
								name: "At the roundabout turn right onto {way_name}",
								destination: "At the roundabout turn right towards {destination}"
							},
							straight: {
							default:
								"At the roundabout continue straight",
								name: "At the roundabout continue straight onto {way_name}",
								destination: "At the roundabout continue straight towards {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Make a {modifier}",
								name: "Make a {modifier} onto {way_name}",
								destination: "Make a {modifier} towards {destination}"
							},
							left: {
							default:
								"Turn left",
								name: "Turn left onto {way_name}",
								destination: "Turn left towards {destination}"
							},
							right: {
							default:
								"Turn right",
								name: "Turn right onto {way_name}",
								destination: "Turn right towards {destination}"
							},
							straight: {
							default:
								"Go straight",
								name: "Go straight onto {way_name}",
								destination: "Go straight towards {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Continue straight"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		39: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "1ª",
								2: "2ª",
								3: "3ª",
								4: "4ª",
								5: "5ª",
								6: "6ª",
								7: "7ª",
								8: "8ª",
								9: "9ª",
								10: "10ª"
							},
							direction: {
								north: "norte",
								northeast: "noreste",
								east: "este",
								southeast: "sureste",
								south: "sur",
								southwest: "suroeste",
								west: "oeste",
								northwest: "noroeste"
							},
							modifier: {
								left: "izquierda",
								right: "derecha",
								"sharp left": "cerrada a la izquierda",
								"sharp right": "cerrada a la derecha",
								"slight left": "ligeramente a la izquierda",
								"slight right": "ligeramente a la derecha",
								straight: "recto",
								uturn: "cambio de sentido"
							},
							lanes: {
								xo: "Mantengase a la derecha",
								ox: "Mantengase a la izquierda",
								xox: "Mantengase en el medio",
								oxo: "Mantengase a la izquierda o derecha"
							}
						},
						modes: {
							ferry: {
							default:
								"Coge el ferry",
								name: "Coge el ferry {way_name}",
								destination: "Coge el ferry a  {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Has llegado a tu {nth} destino"
							},
							left: {
							default:
								"Has llegado a tu {nth} destino, a la izquierda"
							},
							right: {
							default:
								"Has llegado a tu {nth} destino, a la derecha"
							},
							"sharp left": {
							default:
								"Has llegado a tu {nth} destino, a la izquierda"
							},
							"sharp right": {
							default:
								"Has llegado a tu {nth} destino, a la derecha"
							},
							"slight right": {
							default:
								"Has llegado a tu {nth} destino, a la derecha"
							},
							"slight left": {
							default:
								"Has llegado a tu {nth} destino, a la izquierda"
							},
							straight: {
							default:
								"Has llegado a tu {nth} destino, en frente"
							}
						},
						continue: {
						default: {
							default:
								"Continua  {modifier}",
								name: "Continua  {modifier} en  {way_name}",
								destination: "Continua  {modifier} hacia  {destination}"
							},
							straight: {
							default:
								"Continua recto",
								name: "Continua en  {way_name}",
								destination: "Continua hacia  {destination}"
							},
							"slight left": {
							default:
								"Continua ligeramente a la izquierda",
								name: "Continua ligeramente a la izquierda en  {way_name}",
								destination: "Continua ligeramente a la izquierda hacia  {destination}"
							},
							"slight right": {
							default:
								"Continua ligeramente a la derecha",
								name: "Continua ligeramente a la derecha en  {way_name}",
								destination: "Continua ligeramente a la derecha hacia  {destination}"
							},
							uturn: {
							default:
								"Haz un cambio de sentido",
								name: "Haz un cambio de sentido en  {way_name}",
								destination: "Haz un cambio de sentido hacia  {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Ve a  {direction}",
								name: "Ve a  {direction} en  {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Gire  a  {modifier}",
								name: "Gire a  {modifier} en  {way_name}",
								destination: "Gire a  {modifier} hacia  {destination}"
							},
							straight: {
							default:
								"Continua recto",
								name: "Continua recto en  {way_name}",
								destination: "Continua recto hacia  {destination}"
							},
							uturn: {
							default:
								"Haz un cambio de sentido al final de la via",
								name: "Haz un cambio de sentido en  {way_name} al final de la via",
								destination: "Haz un cambio de sentido hacia  {destination} al final de la via"
							}
						},
						fork: {
						default: {
							default:
								"Mantengase  {modifier} en el cruce",
								name: "Mantengase  {modifier} en el cruce en  {way_name}",
								destination: "Mantengase  {modifier} en el cruce hacia  {destination}"
							},
							"slight left": {
							default:
								"Mantengase a la izquierda en el cruce",
								name: "Mantengase a la izquierda en el cruce en  {way_name}",
								destination: "Mantengase a la izquierda en el cruce hacia  {destination}"
							},
							"slight right": {
							default:
								"Mantengase a la derecha en el cruce",
								name: "Mantengase a la derecha en el cruce en {way_name}",
								destination: "Mantengase a la derecha en el cruce hacia  {destination}"
							},
							"sharp left": {
							default:
								"Gire a la izquierda en el cruce",
								name: "Gire a la izquierda en el cruce en {way_name}",
								destination: "Gire a la izquierda en el cruce hacia {destination}"
							},
							"sharp right": {
							default:
								"Gire a la derecha en el cruce",
								name: "Gire a la derecha en el cruce en {way_name}",
								destination: "Gire a la derecha en el cruce hacia {destination}"
							},
							uturn: {
							default:
								"Haz un cambio de sentido",
								name: "Haz un cambio de sentido en  {way_name}",
								destination: "Haz un cambio de sentido hacia  {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Gire  a  {modifier}",
								name: "Gire a  {modifier} en  {way_name}",
								destination: "Gire a  {modifier} hacia  {destination}"
							},
							"slight left": {
							default:
								"Gire a la izquierda",
								name: "Gire a la izquierda en  {way_name}",
								destination: "Gire a la izquierda hacia  {destination}"
							},
							"slight right": {
							default:
								"Gire a la derecha",
								name: "Gire a la derecha en  {way_name}",
								destination: "Gire a la derecha hacia  {destination}"
							},
							"sharp left": {
							default:
								"Gire a la izquierda",
								name: "Gire a la izquierda en  {way_name}",
								destination: "Gire a la izquierda hacia  {destination}"
							},
							"sharp right": {
							default:
								"Gire a la derecha",
								name: "Gire a la derecha en  {way_name}",
								destination: "Gire a la derecha hacia  {destination}"
							},
							uturn: {
							default:
								"Haz un cambio de sentido",
								name: "Haz un cambio de sentido en  {way_name}",
								destination: "Haz un cambio de sentido hacia  {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Continua  {modifier}",
								name: "Continua  {modifier} en  {way_name}",
								destination: "Continua  {modifier} hacia  {destination}"
							},
							"sharp left": {
							default:
								"Gire a la izquierda",
								name: "Gire a la izquierda en {way_name}",
								destination: "Gire a la izquierda hacia {destination}"
							},
							"sharp right": {
							default:
								"Gire a la derecha",
								name: "Gire a la derecha en {way_name}",
								destination: "Gire a la derecha hacia {destination}"
							},
							"slight left": {
							default:
								"Continua ligeramente a la izquierda",
								name: "Continua ligeramente a la izquierda en  {way_name}",
								destination: "Continua ligeramente a la izquierda hacia  {destination}"
							},
							"slight right": {
							default:
								"Continua ligeramente a la derecha",
								name: "Continua ligeramente a la derecha en  {way_name}",
								destination: "Continua ligeramente a la derecha hacia  {destination}"
							},
							uturn: {
							default:
								"Haz un cambio de sentido",
								name: "Haz un cambio de sentido en  {way_name}",
								destination: "Haz un cambio de sentido hacia  {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Continua  {modifier}",
								name: "Continua  {modifier} en  {way_name}",
								destination: "Continua  {modifier} hacia  {destination}"
							},
							uturn: {
							default:
								"Haz un cambio de sentido",
								name: "Haz un cambio de sentido en  {way_name}",
								destination: "Haz un cambio de sentido hacia  {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Ve cuesta abajo",
								name: "Ve cuesta abajo en {way_name}",
								destination: "Ve cuesta abajo hacia {destination}"
							},
							left: {
							default:
								"Ve cuesta abajo en la izquierda",
								name: "Ve cuesta abajo en la izquierda en {way_name}",
								destination: "Ve cuesta abajo en la izquierda hacia {destination}"
							},
							right: {
							default:
								"Ve cuesta abajo en la derecha",
								name: "Ve cuesta abajo en la derecha en {way_name}",
								destination: "Ve cuesta abajo en la derecha hacia {destination}"
							},
							"sharp left": {
							default:
								"Ve cuesta abajo en la izquierda",
								name: "Ve cuesta abajo en la izquierda en {way_name}",
								destination: "Ve cuesta abajo en la izquierda hacia {destination}"
							},
							"sharp right": {
							default:
								"Ve cuesta abajo en la derecha",
								name: "Ve cuesta abajo en la derecha en {way_name}",
								destination: "Ve cuesta abajo en la derecha hacia {destination}"
							},
							"slight left": {
							default:
								"Ve cuesta abajo en la izquierda",
								name: "Ve cuesta abajo en la izquierda en {way_name}",
								destination: "Ve cuesta abajo en la izquierda hacia {destination}"
							},
							"slight right": {
							default:
								"Ve cuesta abajo en la derecha",
								name: "Ve cuesta abajo en la derecha en {way_name}",
								destination: "Ve cuesta abajo en la derecha hacia {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Ve cuesta abajo",
								name: "Ve cuesta abajo en {way_name}",
								destination: "Ve cuesta abajo hacia {destination}"
							},
							left: {
							default:
								"Ve cuesta abajo en la izquierda",
								name: "Ve cuesta abajo en la izquierda en {way_name}",
								destination: "Ve cuesta abajo en la izquierda hacia {destination}"
							},
							right: {
							default:
								"Ve cuesta abajo en la derecha",
								name: "Ve cuesta abajo en la derecha en {way_name}",
								destination: "Ve cuesta abajo en la derecha hacia {destination}"
							},
							"sharp left": {
							default:
								"Ve cuesta abajo en la izquierda",
								name: "Ve cuesta abajo en la izquierda en {way_name}",
								destination: "Ve cuesta abajo en la izquierda hacia {destination}"
							},
							"sharp right": {
							default:
								"Ve cuesta abajo en la derecha",
								name: "Ve cuesta abajo en la derecha en {way_name}",
								destination: "Ve cuesta abajo en la derecha hacia {destination}"
							},
							"slight left": {
							default:
								"Ve cuesta abajo en la izquierda",
								name: "Ve cuesta abajo en la izquierda en {way_name}",
								destination: "Ve cuesta abajo en la izquierda hacia {destination}"
							},
							"slight right": {
							default:
								"Ve cuesta abajo en la derecha",
								name: "Ve cuesta abajo en la derecha en {way_name}",
								destination: "Ve cuesta abajo en la derecha hacia {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Entra en la rotonda",
									name: "Entra en la rotonda y sal en {way_name}",
									destination: "Entra en la rotonda y sal hacia {destination}"
								},
								name: {
								default:
									"Entra en {rotary_name}",
									name: "Entra en {rotary_name} y sal en {way_name}",
									destination: "Entra en {rotary_name} y sal hacia {destination}"
								},
								exit: {
								default:
									"Entra en la rotonda y toma la {exit_number} salida",
									name: "Entra en la rotonda y toma la {exit_number} salida a {way_name}",
									destination: "Entra en la rotonda y toma la {exit_number} salida hacia {destination}"
								},
								name_exit: {
								default:
									"Entra en {rotary_name} y coge la {exit_number} salida",
									name: "Entra en {rotary_name} y coge la {exit_number} salida en {way_name}",
									destination: "Entra en {rotary_name} y coge la {exit_number} salida hacia {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Entra en la rotonda y toma la {exit_number} salida",
									name: "Entra en la rotonda y toma la {exit_number} salida a {way_name}",
									destination: "Entra en la rotonda y toma la {exit_number} salida hacia {destination}"
								},
							default: {
								default:
									"Entra en la rotonda",
									name: "Entra en la rotonda y sal en {way_name}",
									destination: "Entra en la rotonda y sal hacia {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"En la rotonda siga {modifier}",
								name: "En la rotonda siga {modifier} en {way_name}",
								destination: "En la rotonda siga {modifier} hacia {destination}"
							},
							left: {
							default:
								"En la rotonda gira a la izquierda",
								name: "En la rotonda gira a la izquierda en {way_name}",
								destination: "En la rotonda gira a la izquierda hacia {destination}"
							},
							right: {
							default:
								"En la rotonda gira a la derecha",
								name: "En la rotonda gira a la derecha en {way_name}",
								destination: "En la rotonda gira a la derecha hacia {destination}"
							},
							straight: {
							default:
								"En la rotonda continua recto",
								name: "En la rotonda continua recto en {way_name}",
								destination: "En la rotonda continua recto hacia {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Siga {modifier}",
								name: "Siga {modifier} en {way_name}",
								destination: "Siga {modifier} hacia {destination}"
							},
							left: {
							default:
								"Gire a la izquierda",
								name: "Gire a la izquierda en  {way_name}",
								destination: "Gire a la izquierda hacia  {destination}"
							},
							right: {
							default:
								"Gire a la derecha",
								name: "Gire a la derecha en  {way_name}",
								destination: "Gire a la derecha hacia  {destination}"
							},
							straight: {
							default:
								"Ve recto",
								name: "Ve recto en  {way_name}",
								destination: "Ve recto hacia  {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Continua recto"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		40: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "première",
								2: "seconde",
								3: "troisième",
								4: "quatrième",
								5: "cinquième",
								6: "sixième",
								7: "setpième",
								8: "huitième",
								9: "neuvième",
								10: "dixième"
							},
							direction: {
								north: "le nord",
								northeast: "le nord-est",
								east: "l'est",
								southeast: "le sud-est",
								south: "le sud",
								southwest: "le sud-ouest",
								west: "l'ouest",
								northwest: "le nord-ouest"
							},
							modifier: {
								left: "à gauche",
								right: "à droite",
								"sharp left": "franchement à gauche",
								"sharp right": "franchement à droite",
								"slight left": "légèrement à gauche",
								"slight right": "légèrement à droite",
								straight: "tout droit",
								uturn: "demi-tour"
							},
							lanes: {
								xo: "Serrer à droite",
								ox: "Serrer à gauche",
								xox: "Rester au milieu",
								oxo: "Rester à gauche ou à droite"
							}
						},
						modes: {
							ferry: {
							default:
								"Prendre le ferry",
								name: "Prendre le ferry {way_name}",
								destination: "Prendre le ferry en direction de {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Vous êtes arrivés à votre {nth} destination"
							},
							left: {
							default:
								"Vous êtes arrivés à votre {nth} destination, sur la gauche"
							},
							right: {
							default:
								"Vous êtes arrivés à votre {nth} destination, sur la droite"
							},
							"sharp left": {
							default:
								"Vous êtes arrivés à votre {nth} destination, sur la gauche"
							},
							"sharp right": {
							default:
								"Vous êtes arrivés à votre {nth} destination, sur la droite"
							},
							"slight right": {
							default:
								"Vous êtes arrivés à votre {nth} destination, sur la droite"
							},
							"slight left": {
							default:
								"Vous êtes arrivés à votre {nth} destination, sur la gauche"
							},
							straight: {
							default:
								"Vous êtes arrivés à votre {nth} destination, droit devant"
							}
						},
						continue: {
						default: {
							default:
								"Continuer {modifier}",
								name: "Continuer {modifier} sur {way_name}",
								destination: "Continuer {modifier} en direction de {destination}"
							},
							straight: {
							default:
								"Continuer tout droit",
								name: "Continuer tout droit sur {way_name}",
								destination: "Continuer tout droit en direction de {destination}"
							},
							"slight left": {
							default:
								"Continuer légèrement à gauche",
								name: "Continuer légèrement à gauche sur {way_name}",
								destination: "Continuer légèrement à gauche en direction de {destination}"
							},
							"slight right": {
							default:
								"Continuer légèrement à droite",
								name: "Continuer légèrement à droite sur {way_name}",
								destination: "Continuer légèrement à droite en direction de {destination}"
							},
							uturn: {
							default:
								"Faire demi-tour",
								name: "Faire demi-tour sur {way_name}",
								destination: "Faire demi-tour en direction de {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Rouler vers {direction}",
								name: "Rouler vers {direction} sur {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Tourner {modifier}",
								name: "Tourner {modifier} sur {way_name}",
								destination: "Tourner {modifier} en direction de {destination}"
							},
							straight: {
							default:
								"Continuer tout droit",
								name: "Continuer tout droit sur {way_name}",
								destination: "Continuer tout droit en direction de {destination}"
							},
							uturn: {
							default:
								"Faire demi-tour à la fin de la route",
								name: "Faire demi-tour à la fin de la route {way_name}",
								destination: "Faire demi-tour à la fin de la route en direction de {destination}"
							}
						},
						fork: {
						default: {
							default:
								"Rester {modifier} à l'embranchement",
								name: "Rester {modifier} à l'embranchement sur {way_name}",
								destination: "Rester {modifier} à l'embranchement en direction de {destination}"
							},
							"slight left": {
							default:
								"Rester à gauche à l'embranchement",
								name: "Rester à gauche à l'embranchement sur {way_name}",
								destination: "Rester à gauche à l'embranchement en direction de {destination}"
							},
							"slight right": {
							default:
								"Rester à droite à l'embranchement",
								name: "Rester à droite à l'embranchement sur {way_name}",
								destination: "Rester à droite à l'embranchement en direction de {destination}"
							},
							"sharp left": {
							default:
								"Prendre à gauche à l'embranchement",
								name: "Prendre à gauche à l'embranchement sur {way_name}",
								destination: "Prendre à gauche à l'embranchement en direction de {destination}"
							},
							"sharp right": {
							default:
								"Prendre à droite à l'embranchement",
								name: "Prendre à droite à l'embranchement sur {way_name}",
								destination: "Prendre à droite à l'embranchement en direction de {destination}"
							},
							uturn: {
							default:
								"Faire demi-tour",
								name: "Faire demi-tour sur {way_name}",
								destination: "Faire demi-tour en direction de {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Rejoindre {modifier}",
								name: "Rejoindre {modifier} sur {way_name}",
								destination: "Rejoindre {modifier} en direction de {destination}"
							},
							"slight left": {
							default:
								"Rejoindre légèrement par la gauche",
								name: "Rejoindre {way_name} légèrement par la gauche",
								destination: "Rejoindre légèrement par la gauche la route en direction de {destination}"
							},
							"slight right": {
							default:
								"Rejoindre légèrement par la droite",
								name: "Rejoindre {way_name} légèrement par la droite",
								destination: "Rejoindre légèrement par la droite la route en direction de {destination}"
							},
							"sharp left": {
							default:
								"Rejoindre par la gauche",
								name: "Rejoindre {way_name} par la gauche",
								destination: "Rejoindre par la gauche la route en direction de {destination}"
							},
							"sharp right": {
							default:
								"Rejoindre par la droite",
								name: "Rejoindre {way_name} par la droite",
								destination: "Rejoindre par la droite la route en direction de {destination}"
							},
							uturn: {
							default:
								"Fair demi-tour",
								name: "Fair demi-tour sur {way_name}",
								destination: "Fair demi-tour en direction de {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Continuer {modifier}",
								name: "Continuer {modifier} sur {way_name}",
								destination: "Continuer {modifier} en direction de {destination}"
							},
							"sharp left": {
							default:
								"Prendre à gauche",
								name: "Prendre à gauche sur {way_name}",
								destination: "Prendre à gauche en direction de {destination}"
							},
							"sharp right": {
							default:
								"Prendre à droite",
								name: "Prendre à droite sur {way_name}",
								destination: "Prendre à droite en direction de {destination}"
							},
							"slight left": {
							default:
								"Continuer légèrement à gauche",
								name: "Continuer légèrement à gauche sur {way_name}",
								destination: "Continuer légèrement à gauche en direction de {destination}"
							},
							"slight right": {
							default:
								"Continuer légèrement à droite",
								name: "Continuer légèrement à droite sur {way_name}",
								destination: "Continuer légèrement à droite en direction de {destination}"
							},
							uturn: {
							default:
								"Fair demi-tour",
								name: "Fair demi-tour sur {way_name}",
								destination: "Fair demi-tour en direction de {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Continuer {modifier}",
								name: "Continuer {modifier} sur {way_name}",
								destination: "Continuer {modifier} en direction de {destination}"
							},
							uturn: {
							default:
								"Fair demi-tour",
								name: "Fair demi-tour sur {way_name}",
								destination: "Fair demi-tour en direction de {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Prendre la sortie",
								name: "Prendre la sortie sur {way_name}",
								destination: "Prendre la sortie en direction de {destination}"
							},
							left: {
							default:
								"Prendre la sortie à gauche",
								name: "Prendre la sortie à gauche sur {way_name}",
								destination: "Prendre la sortie à gauche en direction de {destination}"
							},
							right: {
							default:
								"Prendre la sortie à droite",
								name: "Prendre la sortie à droite sur {way_name}",
								destination: "Prendre la sortie à droite en direction de {destination}"
							},
							"sharp left": {
							default:
								"Prendre la sortie à gauche",
								name: "Prendre la sortie à gauche sur {way_name}",
								destination: "Prendre la sortie à gauche en direction de {destination}"
							},
							"sharp right": {
							default:
								"Prendre la sortie à droite",
								name: "Prendre la sortie à droite sur {way_name}",
								destination: "Prendre la sortie à droite en direction de {destination}"
							},
							"slight left": {
							default:
								"Prendre la sortie à gauche",
								name: "Prendre la sortie à gauche sur {way_name}",
								destination: "Prendre la sortie à gauche en direction de {destination}"
							},
							"slight right": {
							default:
								"Prendre la sortie à droite",
								name: "Prendre la sortie à droite sur {way_name}",
								destination: "Prendre la sortie à droite en direction de {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Prendre la sortie",
								name: "Prendre la sortie sur {way_name}",
								destination: "Prendre la sortie en direction de {destination}"
							},
							left: {
							default:
								"Prendre la sortie à gauche",
								name: "Prendre la sortie à gauche sur {way_name}",
								destination: "Prendre la sortie à gauche en direction de {destination}"
							},
							right: {
							default:
								"Prendre la sortie à droite",
								name: "Prendre la sortie à droite sur {way_name}",
								destination: "Prendre la sortie à droite en direction de {destination}"
							},
							"sharp left": {
							default:
								"Prendre la sortie à gauche",
								name: "Prendre la sortie à gauche sur {way_name}",
								destination: "Prendre la sortie à gauche en direction de {destination}"
							},
							"sharp right": {
							default:
								"Prendre la sortie à droite",
								name: "Prendre la sortie à droite sur {way_name}",
								destination: "Prendre la sortie à droite en direction de {destination}"
							},
							"slight left": {
							default:
								"Prendre la sortie à gauche",
								name: "Prendre la sortie à gauche sur {way_name}",
								destination: "Prendre la sortie à gauche en direction de {destination}"
							},
							"slight right": {
							default:
								"Prendre la sortie à droite",
								name: "Prendre la sortie à droite sur {way_name}",
								destination: "Prendre la sortie à droite en direction de {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Entrer dans le rond-point",
									name: "Entrer dans le rond-point et sortir par {way_name}",
									destination: "Entrer dans le rond-point et sortir en direction de {destination}"
								},
								name: {
								default:
									"Entrer dans le rond-point {rotary_name}",
									name: "Entrer dans le rond-point {rotary_name} et sortir par {way_name}",
									destination: "Entrer dans le rond-point {rotary_name} et sortir en direction de {destination}"
								},
								exit: {
								default:
									"Entrer dans le rond-point et prendre la {exit_number} sortie",
									name: "Entrer dans le rond-point et prendre la {exit_number} sortie sur {way_name}",
									destination: "Entrer dans le rond-point et prendre la {exit_number} sortie en direction de {destination}"
								},
								name_exit: {
								default:
									"Entrer dans le rond-point {rotary_name} et prendre la {exit_number} sortie",
									name: "Entrer dans le rond-point {rotary_name} et prendre la {exit_number} sortie sur {way_name}",
									destination: "Entrer dans le rond-point {rotary_name} et prendre la {exit_number} sortie en direction de {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Entrer dans le rond-point et prendre la {exit_number} sortie",
									name: "Entrer dans le rond-point et prendre la {exit_number} sortie sur {way_name}",
									destination: "Entrer dans le rond-point et prendre la {exit_number} sortie en direction de {destination}"
								},
							default: {
								default:
									"Entrer dans le rond-point",
									name: "Entrer dans le rond-point et sortir par {way_name}",
									destination: "Entrer dans le rond-point et sortir en direction de {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"Au rond-point, tourner {modifier}",
								name: "Au rond-point, tourner {modifier} sur {way_name}",
								destination: "Au rond-point, tourner {modifier} en direction de {destination}"
							},
							left: {
							default:
								"Au rond-point, tourner à gauche",
								name: "Au rond-point, tourner à gauche sur {way_name}",
								destination: "Au rond-point, tourner à gauche en direction de {destination}"
							},
							right: {
							default:
								"Au rond-point, tourner à droite",
								name: "Au rond-point, tourner à droite sur {way_name}",
								destination: "Au rond-point, tourner à droite en direction de {destination}"
							},
							straight: {
							default:
								"Au rond-point, continuer tout droit",
								name: "Au rond-point, continuer tout droit sur {way_name}",
								destination: "Au rond-point, continuer tout droit en direction de {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Tourner {modifier}",
								name: "Tourner {modifier} sur {way_name}",
								destination: "Tourner {modifier} en direction de {destination}"
							},
							left: {
							default:
								"Tourner à gauche",
								name: "Tourner à gauche sur {way_name}",
								destination: "Tourner à gauche en direction de {destination}"
							},
							right: {
							default:
								"Tourner à droite",
								name: "Tourner à droite sur {way_name}",
								destination: "Tourner à droite en direction de {destination}"
							},
							straight: {
							default:
								"Aller tout droit",
								name: "Aller tout droit sur {way_name}",
								destination: "Aller tout droit en direction de {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Continuer tout droit"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		41: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "1",
								2: "2",
								3: "3",
								4: "4",
								5: "5",
								6: "6",
								7: "7",
								8: "8",
								9: "9",
								10: "10"
							},
							direction: {
								north: "utara",
								northeast: "timur laut",
								east: "timur",
								southeast: "tenggara",
								south: "selatan",
								southwest: "barat daya",
								west: "barat",
								northwest: "barat laut"
							},
							modifier: {
								left: "kiri",
								right: "kanan",
								"sharp left": "tajam kiri",
								"sharp right": "tajam kanan",
								"slight left": "agak ke kiri",
								"slight right": "agak ke kanan",
								straight: "lurus",
								uturn: "putar balik"
							},
							lanes: {
								xo: "Tetap di kanan",
								ox: "Tetap di kiri",
								xox: "Tetap di tengah",
								oxo: "Tetap di kiri atau kanan"
							}
						},
						modes: {
							ferry: {
							default:
								"Naik ferry",
								name: "Naik ferry di {way_name}",
								destination: "Naik ferry menuju {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Anda telah tiba di tujuan ke-{nth}"
							},
							left: {
							default:
								"Anda telah tiba di tujuan ke-{nth}, di sebelah kiri"
							},
							right: {
							default:
								"Anda telah tiba di tujuan ke-{nth}, di sebelah kanan"
							},
							"sharp left": {
							default:
								"Anda telah tiba di tujuan ke-{nth}, di sebelah kiri"
							},
							"sharp right": {
							default:
								"Anda telah tiba di tujuan ke-{nth}, di sebelah kanan"
							},
							"slight right": {
							default:
								"Anda telah tiba di tujuan ke-{nth}, di sebelah kanan"
							},
							"slight left": {
							default:
								"Anda telah tiba di tujuan ke-{nth}, di sebelah kiri"
							},
							straight: {
							default:
								"Anda telah tiba di tujuan ke-{nth}, lurus saja"
							}
						},
						continue: {
						default: {
							default:
								"Terus {modifier}",
								name: "Terus {modifier} ke {way_name}",
								destination: "Teruskan {modifier} menuju {destination}"
							},
							straight: {
							default:
								"Lurus terus",
								name: "Terus ke {way_name}",
								destination: "Terus menuju {destination}"
							},
							"slight left": {
							default:
								"Tetap agak di kiri",
								name: "Tetap agak di kiri ke {way_name}",
								destination: "Tetap agak di kiri menuju {destination}"
							},
							"slight right": {
							default:
								"Tetap agak di kanan",
								name: "Tetap agak di kanan ke {way_name}",
								destination: "Tetap agak di kanan menuju {destination}"
							},
							uturn: {
							default:
								"Putar balik",
								name: "Putar balik ke arah {way_name}",
								destination: "Putar balik menuju {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Arah {direction}",
								name: "Arah {direction} di {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Belok {modifier}",
								name: "Belok {modifier} ke {way_name}",
								destination: "Belok {modifier} menuju {destination}"
							},
							straight: {
							default:
								"Lurus terus",
								name: "Tetap lurus ke {way_name} ",
								destination: "Tetap lurus menuju {destination}"
							},
							uturn: {
							default:
								"Putar balik di akhir jalan",
								name: "Putar balik di {way_name} di akhir jalan",
								destination: "Putar balik menuju {destination} di akhir jalan"
							}
						},
						fork: {
						default: {
							default:
								"Tetap {modifier} di pertigaan",
								name: "Tetap {modifier} di pertigaan ke {way_name}",
								destination: "Tetap {modifier} di pertigaan menuju {destination}"
							},
							"slight left": {
							default:
								"Tetap di kiri pada pertigaan",
								name: "Tetap di kiri pada pertigaan ke arah {way_name}",
								destination: "Tetap di kiri pada pertigaan menuju {destination}"
							},
							"slight right": {
							default:
								"Tetap di kanan pada pertigaan",
								name: "Tetap di kanan pada pertigaan ke arah {way_name}",
								destination: "Tetap di kanan pada pertigaan menuju {destination}"
							},
							"sharp left": {
							default:
								"Belok kiri pada pertigaan",
								name: "Belok kiri pada pertigaan ke arah {way_name}",
								destination: "Belok kiri pada pertigaan menuju {destination}"
							},
							"sharp right": {
							default:
								"Belok kanan pada pertigaan",
								name: "Belok kanan pada pertigaan ke arah {way_name}",
								destination: "Belok kanan pada pertigaan menuju {destination}"
							},
							uturn: {
							default:
								"Putar balik",
								name: "Putar balik ke arah {way_name}",
								destination: "Putar balik menuju {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Bergabung {modifier}",
								name: "Bergabung {modifier} ke arah {way_name}",
								destination: "Bergabung {modifier} menuju {destination}"
							},
							"slight left": {
							default:
								"Bergabung di kiri",
								name: "Bergabung di kiri ke arah {way_name}",
								destination: "Bergabung di kiri menuju {destination}"
							},
							"slight right": {
							default:
								"Bergabung di kanan",
								name: "Bergabung di kanan ke arah {way_name}",
								destination: "Bergabung di kanan menuju {destination}"
							},
							"sharp left": {
							default:
								"Bergabung di kiri",
								name: "Bergabung di kiri ke arah {way_name}",
								destination: "Bergabung di kiri menuju {destination}"
							},
							"sharp right": {
							default:
								"Bergabung di kanan",
								name: "Bergabung di kanan ke arah {way_name}",
								destination: "Bergabung di kanan menuju {destination}"
							},
							uturn: {
							default:
								"Putar balik",
								name: "Putar balik ke arah {way_name}",
								destination: "Putar balik menuju {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Lanjutkan {modifier}",
								name: "Lanjutkan {modifier} menuju {way_name}",
								destination: "Lanjutkan {modifier} menuju {destination}"
							},
							"sharp left": {
							default:
								"Belok kiri tajam",
								name: "Belok kiri tajam ke arah {way_name}",
								destination: "Belok kiri tajam menuju {destination}"
							},
							"sharp right": {
							default:
								"Belok kanan tajam",
								name: "Belok kanan tajam ke arah {way_name}",
								destination: "Belok kanan tajam menuju {destination}"
							},
							"slight left": {
							default:
								"Lanjut dengan agak ke kiri",
								name: "Lanjut dengan agak di kiri ke {way_name}",
								destination: "Tetap agak di kiri menuju {destination}"
							},
							"slight right": {
							default:
								"Tetap agak di kanan",
								name: "Tetap agak di kanan ke {way_name}",
								destination: "Tetap agak di kanan menuju {destination}"
							},
							uturn: {
							default:
								"Putar balik",
								name: "Putar balik ke arah {way_name}",
								destination: "Putar balik menuju {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Lanjutkan {modifier}",
								name: "Lanjutkan {modifier} menuju {way_name}",
								destination: "Lanjutkan {modifier} menuju {destination}"
							},
							uturn: {
							default:
								"Putar balik",
								name: "Putar balik ke arah {way_name}",
								destination: "Putar balik menuju {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Ambil jalan melandai",
								name: "Ambil jalan melandai ke {way_name}",
								destination: "Ambil jalan melandai menuju {destination}"
							},
							left: {
							default:
								"Ambil jalan yang melandai di sebelah kiri",
								name: "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
								destination: "Ambil jalan melandai di sebelah kiri menuju {destination}"
							},
							right: {
							default:
								"Ambil jalan melandai di sebelah kanan",
								name: "Ambil jalan melandai di sebelah kanan ke {way_name}",
								destination: "Ambil jalan melandai di sebelah kanan menuju {destination}"
							},
							"sharp left": {
							default:
								"Ambil jalan yang melandai di sebelah kiri",
								name: "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
								destination: "Ambil jalan melandai di sebelah kiri menuju {destination}"
							},
							"sharp right": {
							default:
								"Ambil jalan melandai di sebelah kanan",
								name: "Ambil jalan melandai di sebelah kanan ke {way_name}",
								destination: "Ambil jalan melandai di sebelah kanan menuju {destination}"
							},
							"slight left": {
							default:
								"Ambil jalan yang melandai di sebelah kiri",
								name: "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
								destination: "Ambil jalan melandai di sebelah kiri menuju {destination}"
							},
							"slight right": {
							default:
								"Ambil jalan melandai di sebelah kanan",
								name: "Ambil jalan melandai di sebelah kanan ke {way_name}",
								destination: "Ambil jalan melandai di sebelah kanan  menuju {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Ambil jalan melandai",
								name: "Ambil jalan melandai ke {way_name}",
								destination: "Ambil jalan melandai menuju {destination}"
							},
							left: {
							default:
								"Ambil jalan yang melandai di sebelah kiri",
								name: "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
								destination: "Ambil jalan melandai di sebelah kiri menuju {destination}"
							},
							right: {
							default:
								"Ambil jalan melandai di sebelah kanan",
								name: "Ambil jalan melandai di sebelah kanan ke {way_name}",
								destination: "Ambil jalan melandai di sebelah kanan  menuju {destination}"
							},
							"sharp left": {
							default:
								"Ambil jalan yang melandai di sebelah kiri",
								name: "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
								destination: "Ambil jalan melandai di sebelah kiri menuju {destination}"
							},
							"sharp right": {
							default:
								"Ambil jalan melandai di sebelah kanan",
								name: "Ambil jalan melandai di sebelah kanan ke {way_name}",
								destination: "Ambil jalan melandai di sebelah kanan  menuju {destination}"
							},
							"slight left": {
							default:
								"Ambil jalan yang melandai di sebelah kiri",
								name: "Ambil jalan melandai di sebelah kiri ke arah {way_name}",
								destination: "Ambil jalan melandai di sebelah kiri menuju {destination}"
							},
							"slight right": {
							default:
								"Ambil jalan melandai di sebelah kanan",
								name: "Ambil jalan melandai di sebelah kanan ke {way_name}",
								destination: "Ambil jalan melandai di sebelah kanan  menuju {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Masuk bundaran",
									name: "Masuk bundaran dan keluar arah {way_name}",
									destination: "Masuk bundaran dan keluar menuju {destination}"
								},
								name: {
								default:
									"Masuk {rotary_name}",
									name: "Masuk {rotary_name} dan keluar arah {way_name}",
									destination: "Masuk {rotary_name} dan keluar menuju {destination}"
								},
								exit: {
								default:
									"Masuk bundaran dan ambil jalan keluar {exit_number}",
									name: "Masuk bundaran dan ambil jalan keluar {exit_number} arah {way_name}",
									destination: "Masuk bundaran dan ambil jalan keluar {exit_number} menuju {destination}"
								},
								name_exit: {
								default:
									"Masuk {rotary_name} dan ambil jalan keluar {exit_number}",
									name: "Masuk {rotary_name} dan ambil jalan keluar {exit_number} arah {way_name}",
									destination: "Masuk {rotary_name} dan ambil jalan keluar {exit_number} menuju {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Masuk bundaran dan ambil jalan keluar {exit_number}",
									name: "Masuk bundaran dan ambil jalan keluar {exit_number} arah {way_name}",
									destination: "Masuk bundaran dan ambil jalan keluar {exit_number} menuju {destination}"
								},
							default: {
								default:
									"Masuk bundaran",
									name: "Masuk bundaran dan keluar arah {way_name}",
									destination: "Masuk bundaran dan keluar menuju {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"Di bundaran, lakukan {modifier}",
								name: "Di bundaran, lakukan {modifier} ke arah {way_name}",
								destination: "Di bundaran, lakukan {modifier} menuju {destination}"
							},
							left: {
							default:
								"Di bundaran belok kiri",
								name: "Di bundaran, belok kiri arah {way_name}",
								destination: "Di bundaran, belok kiri menuju {destination}"
							},
							right: {
							default:
								"Di bundaran belok kanan",
								name: "Di bundaran belok kanan ke arah {way_name}",
								destination: "Di bundaran belok kanan menuju {destination}"
							},
							straight: {
							default:
								"Di bundaran tetap lurus",
								name: "Di bundaran tetap lurus ke arah {way_name}",
								destination: "Di bundaran tetap lurus menuju {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Lakukan {modifier}",
								name: "Lakukan {modifier} ke arah {way_name}",
								destination: "Lakukan {modifier} menuju {destination}"
							},
							left: {
							default:
								"Belok kiri",
								name: "Belok kiri ke {way_name}",
								destination: "Belok kiri menuju {destination}"
							},
							right: {
							default:
								"Belok kanan",
								name: "Belok kanan ke {way_name}",
								destination: "Belok kanan menuju {destination}"
							},
							straight: {
							default:
								"Lurus",
								name: "Lurus arah {way_name}",
								destination: "Lurus menuju {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Lurus terus"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		42: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "1e",
								2: "2e",
								3: "3e",
								4: "4e",
								5: "5e",
								6: "6e",
								7: "7e",
								8: "8e",
								9: "9e",
								10: "10e"
							},
							direction: {
								north: "noord",
								northeast: "noordoost",
								east: "oost",
								southeast: "zuidoost",
								south: "zuid",
								southwest: "zuidwest",
								west: "west",
								northwest: "noordwest"
							},
							modifier: {
								left: "links",
								right: "rechts",
								"sharp left": "linksaf",
								"sharp right": "rechtsaf",
								"slight left": "links",
								"slight right": "rechts",
								straight: "rechtdoor",
								uturn: "omkeren"
							},
							lanes: {
								xo: "Rechts aanhouden",
								ox: "Links aanhouden",
								xox: "In het midden blijven",
								oxo: "Links of rechts blijven"
							}
						},
						modes: {
							ferry: {
							default:
								"Neem het veer",
								name: "Neem het veer {way_name}",
								destination: "Neem het veer naar {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Je bent gearriveerd op de {nth} bestemming."
							},
							left: {
							default:
								"Je bent gearriveerd. De {nth} bestemming bevindt zich links."
							},
							right: {
							default:
								"Je bent gearriveerd. De {nth} bestemming bevindt zich rechts."
							},
							"sharp left": {
							default:
								"Je bent gearriveerd. De {nth} bestemming bevindt zich links."
							},
							"sharp right": {
							default:
								"Je bent gearriveerd. De {nth} bestemming bevindt zich rechts."
							},
							"slight right": {
							default:
								"Je bent gearriveerd. De {nth} bestemming bevindt zich rechts."
							},
							"slight left": {
							default:
								"Je bent gearriveerd. De {nth} bestemming bevindt zich links."
							},
							straight: {
							default:
								"Je bent gearriveerd. De {nth} bestemming bevindt zich voor je."
							}
						},
						continue: {
						default: {
							default:
								"Ga {modifier}",
								name: "Ga {modifier} naar {way_name}",
								destination: "Ga {modifier} richting {destination}"
							},
							straight: {
							default:
								"Ga rechtdoor",
								name: "Ga rechtdoor naar {way_name}",
								destination: "Ga rechtdoor richting {destination}"
							},
							"slight left": {
							default:
								"Links aanhouden",
								name: "Links aanhouden naar {way_name}",
								destination: "Links aanhouden richting {destination}"
							},
							"slight right": {
							default:
								"Rechts aanhouden",
								name: "Rechts aanhouden naar {way_name}",
								destination: "Rechts aanhouden richting {destination}"
							},
							uturn: {
							default:
								"Keer om",
								name: "Keer om naar {way_name}",
								destination: "Keer om richting {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Vertrek in {direction}elijke richting",
								name: "Neem {way_name} in {direction}elijke richting"
							}
						},
						"end of road": {
						default: {
							default:
								"Ga {modifier}",
								name: "Ga {modifier} naar {way_name}",
								destination: "Ga {modifier} richting {destination}"
							},
							straight: {
							default:
								"Ga in de aangegeven richting",
								name: "Ga naar {way_name}",
								destination: "Ga richting {destination}"
							},
							uturn: {
							default:
								"Keer om",
								name: "Keer om naar {way_name}",
								destination: "Keer om richting {destination}"
							}
						},
						fork: {
						default: {
							default:
								"Ga {modifier} op de splitsing",
								name: "Ga {modifier} op de splitsing naar {way_name}",
								destination: "Ga {modifier} op de splitsing richting {destination}"
							},
							"slight left": {
							default:
								"Links aanhouden op de splitsing",
								name: "Links aanhouden op de splitsing naar {way_name}",
								destination: "Links aanhouden op de splitsing richting {destination}"
							},
							"slight right": {
							default:
								"Rechts aanhouden op de splitsing",
								name: "Rechts aanhouden op de splitsing naar {way_name}",
								destination: "Rechts aanhouden op de splitsing richting {destination}"
							},
							"sharp left": {
							default:
								"Linksaf op de splitsing",
								name: "Linksaf op de splitsing naar {way_name}",
								destination: "Linksaf op de splitsing richting {destination}"
							},
							"sharp right": {
							default:
								"Rechtsaf op de splitsing",
								name: "Rechtsaf op de splitsing naar {way_name}",
								destination: "Rechtsaf op de splitsing richting {destination}"
							},
							uturn: {
							default:
								"Keer om",
								name: "Keer om naar {way_name}",
								destination: "Keer om richting {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Bij de splitsing {modifier}",
								name: "Bij de splitsing {modifier} naar {way_name}",
								destination: "Bij de splitsing {modifier} richting {destination}"
							},
							"slight left": {
							default:
								"Bij de splitsing links aanhouden",
								name: "Bij de splitsing links aanhouden naar {way_name}",
								destination: "Bij de splitsing links aanhouden richting {destination}"
							},
							"slight right": {
							default:
								"Bij de splitsing rechts aanhouden",
								name: "Bij de splitsing rechts aanhouden naar {way_name}",
								destination: "Bij de splitsing rechts aanhouden richting {destination}"
							},
							"sharp left": {
							default:
								"Bij de splitsing linksaf",
								name: "Bij de splitsing linksaf naar {way_name}",
								destination: "Bij de splitsing linksaf richting {destination}"
							},
							"sharp right": {
							default:
								"Bij de splitsing rechtsaf",
								name: "Bij de splitsing rechtsaf naar {way_name}",
								destination: "Bij de splitsing rechtsaf richting {destination}"
							},
							uturn: {
							default:
								"Keer om",
								name: "Keer om naar {way_name}",
								destination: "Keer om richting {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Ga {modifier}",
								name: "Ga {modifier} naar {way_name}",
								destination: "Ga {modifier} richting {destination}"
							},
							"sharp left": {
							default:
								"Linksaf",
								name: "Linksaf naar {way_name}",
								destination: "Linksaf richting {destination}"
							},
							"sharp right": {
							default:
								"Rechtsaf",
								name: "Rechtsaf naar {way_name}",
								destination: "Rechtsaf richting {destination}"
							},
							"slight left": {
							default:
								"Links aanhouden",
								name: "Links aanhouden naar {way_name}",
								destination: "Links aanhouden richting {destination}"
							},
							"slight right": {
							default:
								"Rechts aanhouden",
								name: "Rechts aanhouden naar {way_name}",
								destination: "Rechts aanhouden richting {destination}"
							},
							uturn: {
							default:
								"Keer om",
								name: "Keer om naar {way_name}",
								destination: "Keer om richting {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Ga {modifier}",
								name: "Ga {modifier} naar {way_name}",
								destination: "Ga {modifier} richting {destination}"
							},
							uturn: {
							default:
								"Keer om",
								name: "Keer om naar {way_name}",
								destination: "Keer om richting {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Neem de afrit",
								name: "Neem de afrit naar {way_name}",
								destination: "Neem de afrit richting {destination}"
							},
							left: {
							default:
								"Neem de afrit links",
								name: "Neem de afrit links naar {way_name}",
								destination: "Neem de afrit links richting {destination}"
							},
							right: {
							default:
								"Neem de afrit rechts",
								name: "Neem de afrit rechts naar {way_name}",
								destination: "Neem de afrit rechts richting {destination}"
							},
							"sharp left": {
							default:
								"Neem de afrit links",
								name: "Neem de afrit links naar {way_name}",
								destination: "Neem de afrit links richting {destination}"
							},
							"sharp right": {
							default:
								"Neem de afrit rechts",
								name: "Neem de afrit rechts naar {way_name}",
								destination: "Neem de afrit rechts richting {destination}"
							},
							"slight left": {
							default:
								"Neem de afrit links",
								name: "Neem de afrit links naar {way_name}",
								destination: "Neem de afrit links richting {destination}"
							},
							"slight right": {
							default:
								"Neem de afrit rechts",
								name: "Neem de afrit rechts naar {way_name}",
								destination: "Neem de afrit rechts richting {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Neem de oprit",
								name: "Neem de oprit naar {way_name}",
								destination: "Neem de oprit richting {destination}"
							},
							left: {
							default:
								"Neem de oprit links",
								name: "Neem de oprit links naar {way_name}",
								destination: "Neem de oprit links richting {destination}"
							},
							right: {
							default:
								"Neem de oprit rechts",
								name: "Neem de oprit rechts naar {way_name}",
								destination: "Neem de oprit rechts richting {destination}"
							},
							"sharp left": {
							default:
								"Neem de oprit links",
								name: "Neem de oprit links naar {way_name}",
								destination: "Neem de oprit links richting {destination}"
							},
							"sharp right": {
							default:
								"Neem de oprit rechts",
								name: "Neem de oprit rechts naar {way_name}",
								destination: "Neem de oprit rechts richting {destination}"
							},
							"slight left": {
							default:
								"Neem de oprit links",
								name: "Neem de oprit links naar {way_name}",
								destination: "Neem de oprit links richting {destination}"
							},
							"slight right": {
							default:
								"Neem de oprit rechts",
								name: "Neem de oprit rechts naar {way_name}",
								destination: "Neem de oprit rechts richting {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Ga het knooppunt op",
									name: "Verlaat het knooppunt naar {way_name}",
									destination: "Verlaat het knooppunt richting {destination}"
								},
								name: {
								default:
									"Ga het knooppunt {rotary_name} op",
									name: "Verlaat het knooppunt {rotary_name} naar {way_name}",
									destination: "Verlaat het knooppunt {rotary_name} richting {destination}"
								},
								exit: {
								default:
									"Ga het knooppunt op en neem afslag {exit_number}",
									name: "Ga het knooppunt op en neem afslag {exit_number} naar {way_name}",
									destination: "Ga het knooppunt op en neem afslag {exit_number} richting {destination}"
								},
								name_exit: {
								default:
									"Ga het knooppunt {rotary_name} op en neem afslag {exit_number}",
									name: "Ga het knooppunt {rotary_name} op en neem afslag {exit_number} naar {way_name}",
									destination: "Ga het knooppunt {rotary_name} op en neem afslag {exit_number} richting {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Ga de rotonde op en neem afslag {exit_number}",
									name: "Ga de rotonde op en neem afslag {exit_number} naar {way_name}",
									destination: "Ga de rotonde op en neem afslag {exit_number} richting {destination}"
								},
							default: {
								default:
									"Ga de rotonde op",
									name: "Verlaat de rotonde naar {way_name}",
									destination: "Verlaat de rotonde richting {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"Ga {modifier} op de rotonde",
								name: "Ga {modifier} op de rotonde naar {way_name}",
								destination: "Ga {modifier} op de rotonde richting {destination}"
							},
							left: {
							default:
								"Ga links op de rotonde",
								name: "Ga links op de rotonde naar {way_name}",
								destination: "Ga links op de rotonde richting {destination}"
							},
							right: {
							default:
								"Ga rechts op de rotonde",
								name: "Ga rechts op de rotonde naar {way_name}",
								destination: "Ga rechts op de rotonde richting {destination}"
							},
							straight: {
							default:
								"Rechtdoor op de rotonde",
								name: "Rechtdoor op de rotonde naar {way_name}",
								destination: "Rechtdoor op de rotonde richting {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Ga {modifier}",
								name: "Ga {modifier} naar {way_name}",
								destination: "Ga {modifier} richting {destination}"
							},
							left: {
							default:
								"Ga linksaf",
								name: "Ga linksaf naar {way_name}",
								destination: "Ga linksaf richting {destination}"
							},
							right: {
							default:
								"Ga rechtsaf",
								name: "Ga rechtsaf naar {way_name}",
								destination: "Ga rechtsaf richting {destination}"
							},
							straight: {
							default:
								"Ga rechtdoor",
								name: "Ga rechtdoor naar {way_name}",
								destination: "Ga rechtdoor richting {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Rechtdoor"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		43: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "1.",
								2: "2.",
								3: "3.",
								4: "4.",
								5: "5.",
								6: "6.",
								7: "7.",
								8: "8.",
								9: "9.",
								10: "10."
							},
							direction: {
								north: "północ",
								northeast: "północny wschód",
								east: "wschód",
								southeast: "południowy wschód",
								south: "południe",
								southwest: "południowy zachód",
								west: "zachód",
								northwest: "północny zachód"
							},
							modifier: {
								left: "lewo",
								right: "prawo",
								"sharp left": "ostro w lewo",
								"sharp right": "ostro w prawo",
								"slight left": "łagodnie w lewo",
								"slight right": "łagodnie w prawo",
								straight: "prosto",
								uturn: "zawróć"
							},
							lanes: {
								xo: "Trzymaj się prawej strony",
								ox: "Trzymaj się lewej strony",
								xox: "Trzymaj się środka",
								oxo: "Trzymaj się lewej lub prawej strony"
							}
						},
						modes: {
							ferry: {
							default:
								"Weź prom",
								name: "Weź prom {way_name}",
								destination: "Weź prom w kierunku {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Dojechano do miejsca docelowego {nth}"
							},
							left: {
							default:
								"Dojechano do miejsca docelowego {nth}, po lewej stronie"
							},
							right: {
							default:
								"Dojechano do miejsca docelowego {nth}, po prawej stronie"
							},
							"sharp left": {
							default:
								"Dojechano do miejsca docelowego {nth}, po lewej stronie"
							},
							"sharp right": {
							default:
								"Dojechano do miejsca docelowego {nth}, po prawej stronie"
							},
							"slight right": {
							default:
								"Dojechano do miejsca docelowego {nth}, po prawej stronie"
							},
							"slight left": {
							default:
								"Dojechano do miejsca docelowego {nth}, po lewej stronie"
							},
							straight: {
							default:
								"Dojechano do miejsca docelowego {nth} , prosto"
							}
						},
						continue: {
						default: {
							default:
								"Kontynuuj {modifier}",
								name: "Kontynuuj {modifier} na {way_name}",
								destination: "Kontynuuj {modifier} w kierunku {destination}"
							},
							straight: {
							default:
								"Kontynuuj prosto",
								name: "Kontynuuj na {way_name}",
								destination: "Kontynuuj w kierunku {destination}"
							},
							"slight left": {
							default:
								"Kontynuuj łagodnie w lewo",
								name: "Kontynuuj łagodnie w lewo na {way_name}",
								destination: "Kontynuuj łagodnie w lewo w kierunku {destination}"
							},
							"slight right": {
							default:
								"Kontynuuj łagodnie w prawo",
								name: "Kontynuuj łagodnie w prawo na {way_name}",
								destination: "Kontynuuj łagodnie w prawo w kierunku {destination}"
							},
							uturn: {
							default:
								"Zawróć",
								name: "Zawróć na {way_name}",
								destination: "Zawróć w kierunku {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Kieruj się {direction}",
								name: "Kieruj się {direction} na {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Skręć {modifier}",
								name: "Skręć {modifier} na {way_name}",
								destination: "Skręć {modifier} w kierunku {destination}"
							},
							straight: {
							default:
								"Kontynuuj prosto",
								name: "Kontynuuj prosto na {way_name}",
								destination: "Kontynuuj prosto w kierunku {destination}"
							},
							uturn: {
							default:
								"Zawróć na końcu ulicy",
								name: "Zawróć na końcu ulicy na {way_name}",
								destination: "Zawróć na końcu ulicy w kierunku {destination}"
							}
						},
						fork: {
						default: {
							default:
								"Na rozwidleniu trzymaj się {modifier}",
								name: "Na rozwidleniu trzymaj się {modifier} na {way_name}",
								destination: "Na rozwidleniu trzymaj się {modifier} w kierunku {destination}"
							},
							"slight left": {
							default:
								"Na rozwidleniu trzymaj się lewej strony",
								name: "Na rozwidleniu trzymaj się lewej strony w {way_name}",
								destination: "Na rozwidleniu trzymaj się lewej strony w kierunku {destination}"
							},
							"slight right": {
							default:
								"Na rozwidleniu trzymaj się prawej strony",
								name: "Na rozwidleniu trzymaj się prawej strony na {way_name}",
								destination: "Na rozwidleniu trzymaj się prawej strony w kierunku {destination}"
							},
							"sharp left": {
							default:
								"Na rozwidleniu skręć ostro w lewo",
								name: "Na rozwidleniu skręć ostro w lew na {way_name}",
								destination: "Na rozwidleniu skręć ostro w lewo w kierunku {destination}"
							},
							"sharp right": {
							default:
								"Na rozwidleniu skręć ostro w prawo",
								name: "Na rozwidleniu skręć ostro w prawo na {way_name}",
								destination: "Na rozwidleniu skręć ostro w prawo w kierunku {destination}"
							},
							uturn: {
							default:
								"Zawróć",
								name: "Zawróć na {way_name}",
								destination: "Zawróć w kierunku {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Włącz się {modifier}",
								name: "Włącz się {modifier} na {way_name}",
								destination: "Włącz się {modifier} w kierunku {destination}"
							},
							"slight left": {
							default:
								"Włącz się z lewej strony",
								name: "Włącz się z lewej strony na {way_name}",
								destination: "Włącz się z lewej strony w kierunku {destination}"
							},
							"slight right": {
							default:
								"Włącz się z prawej strony",
								name: "Włącz się z prawej strony na {way_name}",
								destination: "Włącz się z prawej strony w kierunku {destination}"
							},
							"sharp left": {
							default:
								"Włącz się z lewej strony",
								name: "Włącz się z lewej strony na {way_name}",
								destination: "Włącz się z lewej strony w kierunku {destination}"
							},
							"sharp right": {
							default:
								"Włącz się z prawej strony",
								name: "Włącz się z prawej strony na {way_name}",
								destination: "Włącz się z prawej strony w kierunku {destination}"
							},
							uturn: {
							default:
								"Zawróć",
								name: "Zawróć na {way_name}",
								destination: "Zawróć w kierunku {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Kontynuuj {modifier}",
								name: "Kontynuuj {modifier} na {way_name}",
								destination: "Kontynuuj {modifier} w kierunku {destination}"
							},
							"sharp left": {
							default:
								"Skręć ostro w lewo",
								name: "Skręć ostro w lewo w {way_name}",
								destination: "Skręć ostro w lewo w kierunku {destination}"
							},
							"sharp right": {
							default:
								"Skręć ostro w prawo",
								name: "Skręć ostro w prawo na {way_name}",
								destination: "Skręć ostro w prawo w kierunku {destination}"
							},
							"slight left": {
							default:
								"Kontynuuj łagodnie w lewo",
								name: "Kontynuuj łagodnie w lewo na {way_name}",
								destination: "Kontynuuj łagodnie w lewo w kierunku {destination}"
							},
							"slight right": {
							default:
								"Kontynuuj łagodnie w prawo",
								name: "Kontynuuj łagodnie w prawo na {way_name}",
								destination: "Kontynuuj łagodnie w prawo w kierunku {destination}"
							},
							uturn: {
							default:
								"Zawróć",
								name: "Zawróć na {way_name}",
								destination: "Zawróć w kierunku {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Kontynuuj {modifier}",
								name: "Kontynuuj {modifier} na {way_name}",
								destination: "Kontynuuj {modifier} w kierunku {destination}"
							},
							uturn: {
							default:
								"Zawróć",
								name: "Zawróć na {way_name}",
								destination: "Zawróć w kierunku {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Zjedź",
								name: "Weź zjazd na {way_name}",
								destination: "Weź zjazd w kierunku {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} towards {destination}"
							},
							left: {
							default:
								"Weź zjazd po lewej",
								name: "Weź zjazd po lewej na {way_name}",
								destination: "Weź zjazd po lewej w kierunku {destination}",
								exit: "Take exit {exit} on the left",
								exit_destination: "Take exit {exit} on the left towards {destination}"
							},
							right: {
							default:
								"Weź zjazd po prawej",
								name: "Weź zjazd po prawej na {way_name}",
								destination: "Weź zjazd po prawej w kierunku {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} on the right towards {destination}"
							},
							"sharp left": {
							default:
								"Weź zjazd po lewej",
								name: "Weź zjazd po lewej na {way_name}",
								destination: "Weź zjazd po lewej w kierunku {destination}",
								exit: "Take exit {exit} on the left",
								exit_destination: "Take exit {exit} on the left towards {destination}"
							},
							"sharp right": {
							default:
								"Weź zjazd po prawej",
								name: "Weź zjazd po prawej na {way_name}",
								destination: "Weź zjazd po prawej w kierunku {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} on the right towards {destination}"
							},
							"slight left": {
							default:
								"Weź zjazd po lewej",
								name: "Weź zjazd po lewej na {way_name}",
								destination: "Weź zjazd po lewej w kierunku {destination}",
								exit: "Take exit {exit} on the left",
								exit_destination: "Take exit {exit} on the left towards {destination}"
							},
							"slight right": {
							default:
								"Weź zjazd po prawej",
								name: "Weź zjazd po prawej na {way_name}",
								destination: "Weź zjazd po prawej w kierunku {destination}",
								exit: "Take exit {exit}",
								exit_destination: "Take exit {exit} on the right towards {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Weź zjazd",
								name: "Weź zjazd na {way_name}",
								destination: "Weź zjazd w kierunku {destination}"
							},
							left: {
							default:
								"Weź zjazd po lewej",
								name: "Weź zjazd po lewej na {way_name}",
								destination: "Weź zjazd po lewej w kierunku {destination}"
							},
							right: {
							default:
								"Weź zjazd po prawej",
								name: "Weź zjazd po prawej na {way_name}",
								destination: "Weź zjazd po prawej w kierunku {destination}"
							},
							"sharp left": {
							default:
								"Weź zjazd po lewej",
								name: "Weź zjazd po lewej na {way_name}",
								destination: "Weź zjazd po lewej w kierunku {destination}"
							},
							"sharp right": {
							default:
								"Weź zjazd po prawej",
								name: "Weź zjazd po prawej na {way_name}",
								destination: "Weź zjazd po prawej w kierunku {destination}"
							},
							"slight left": {
							default:
								"Weź zjazd po lewej",
								name: "Weź zjazd po lewej na {way_name}",
								destination: "Weź zjazd po lewej w kierunku {destination}"
							},
							"slight right": {
							default:
								"Weź zjazd po prawej",
								name: "Weź zjazd po prawej na {way_name}",
								destination: "Weź zjazd po prawej w kierunku {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Wjedź na rondo",
									name: "Wjedź na rondo i skręć na {way_name}",
									destination: "Wjedź na rondo i skręć w kierunku {destination}"
								},
								name: {
								default:
									"Wjedź na {rotary_name}",
									name: "Wjedź na {rotary_name} i skręć na {way_name}",
									destination: "Wjedź na {rotary_name} i skręć w kierunku {destination}"
								},
								exit: {
								default:
									"Wjedź na rondo i wyjedź {exit_number} zjazdem",
									name: "Wjedź na rondo i wyjedź {exit_number} zjazdem na {way_name}",
									destination: "Wjedź na rondo i wyjedź {exit_number} zjazdem w kierunku {destination}"
								},
								name_exit: {
								default:
									"Wjedź na {rotary_name} i wyjedź {exit_number} zjazdem",
									name: "Wjedź na {rotary_name} i wyjedź {exit_number} zjazdem na {way_name}",
									destination: "Wjedź na {rotary_name} i wyjedź {exit_number} zjazdem w kierunku {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Wjedź na rondo i wyjedź {exit_number} zjazdem",
									name: "Wjedź na rondo i wyjedź {exit_number} zjazdem na {way_name}",
									destination: "Wjedź na rondo i wyjedź {exit_number} zjazdem w kierunku {destination}"
								},
							default: {
								default:
									"Wjedź na rondo",
									name: "Wjedź na rondo i wyjedź na {way_name}",
									destination: "Wjedź na rondo i wyjedź w kierunku {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"Na rondzie weź {modifier}",
								name: "Na rondzie weź {modifier} na {way_name}",
								destination: "Na rondzie weź {modifier} w kierunku {destination}"
							},
							left: {
							default:
								"Na rondzie skręć w lewo",
								name: "Na rondzie skręć lewo na {way_name}",
								destination: "Na rondzie skręć w lewo w kierunku {destination}"
							},
							right: {
							default:
								"Na rondzie skręć w prawo",
								name: "Na rondzie skręć w prawo na {way_name}",
								destination: "Na rondzie skręć w prawo w kierunku {destination}"
							},
							straight: {
							default:
								"Na rondzie kontynuuj prosto",
								name: "Na rondzie kontynuuj prosto na {way_name}",
								destination: "Na rondzie kontynuuj prosto w kierunku {destination}"
							}
						},
						turn: {
						default: {
							default:
								"{modifier}",
								name: "{modifier} na {way_name}",
								destination: "{modifier} w kierunku {destination}"
							},
							left: {
							default:
								"Skręć w lewo",
								name: "Skręć w lewo na {way_name}",
								destination: "Skręć w lewo w kierunku {destination}"
							},
							right: {
							default:
								"Skręć w prawo",
								name: "Skręć w prawo na {way_name}",
								destination: "Skręć w prawo w kierunku {destination}"
							},
							straight: {
							default:
								"Jedź prosto",
								name: "Jedź prosto na {way_name}",
								destination: "Jedź prosto w kierunku {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Kontynuuj prosto"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		44: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "первый",
								2: "второй",
								3: "третий",
								4: "четвёртый",
								5: "пятый",
								6: "шестой",
								7: "седьмой",
								8: "восьмой",
								9: "девятый",
								10: "десятый"
							},
							direction: {
								north: "северном",
								northeast: "северо-восточном",
								east: "восточном",
								southeast: "юго-восточном",
								south: "южном",
								southwest: "юго-западном",
								west: "западном",
								northwest: "северо-западном"
							},
							modifier: {
								left: "налево",
								right: "направо",
								"sharp left": "налево",
								"sharp right": "направо",
								"slight left": "левее",
								"slight right": "правее",
								straight: "прямо",
								uturn: "на разворот"
							},
							lanes: {
								xo: "Держитесь правее",
								ox: "Держитесь левее",
								xox: "Держитесь посередине",
								oxo: "Держитесь слева или справа"
							}
						},
						modes: {
							ferry: {
							default:
								"Погрузитесь на паром",
								name: "Погрузитесь на паром {way_name}",
								destination: "Погрузитесь на паром в направлении {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Вы прибыли в {nth} пункт назначения"
							},
							left: {
							default:
								"Вы прибыли в {nth} пункт назначения, он находится слева"
							},
							right: {
							default:
								"Вы прибыли в {nth} пункт назначения, он находится справа"
							},
							"sharp left": {
							default:
								"Вы прибыли в {nth} пункт назначения, он находится слева"
							},
							"sharp right": {
							default:
								"Вы прибыли в {nth} пункт назначения, он находится справа"
							},
							"slight right": {
							default:
								"Вы прибыли в {nth} пункт назначения, он находится справа"
							},
							"slight left": {
							default:
								"Вы прибыли в {nth} пункт назначения, он находится слева"
							},
							straight: {
							default:
								"Вы прибыли в {nth} пункт назначения, он находится перед вами"
							}
						},
						continue: {
						default: {
							default:
								"Двигайтесь {modifier}",
								name: "Двигайтесь {modifier} по {way_name}",
								destination: "Двигайтесь {modifier} в направлении {destination}"
							},
							straight: {
							default:
								"Двигайтесь прямо",
								name: "Продолжите движение по {way_name}",
								destination: "Продолжите движение в направлении {destination}"
							},
							"slight left": {
							default:
								"Плавно поверните налево",
								name: "Плавно поверните налево на {way_name}",
								destination: "Плавно поверните налево в направлении {destination}"
							},
							"slight right": {
							default:
								"Плавно поверните направо",
								name: "Плавно поверните направо на {way_name}",
								destination: "Плавно поверните направо в направлении {destination}"
							},
							uturn: {
							default:
								"Развернитесь",
								name: "Развернитесь на {way_name}",
								destination: "Развернитесь в направлении {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Двигайтесь в {direction} направлении",
								name: "Двигайтесь в {direction} направлении по {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Поверните {modifier}",
								name: "Поверните {modifier} на {way_name}",
								destination: "Поверните {modifier} в направлении {destination}"
							},
							straight: {
							default:
								"Двигайтесь прямо",
								name: "Двигайтесь прямо по {way_name}",
								destination: "Двигайтесь прямо в направлении {destination}"
							},
							uturn: {
							default:
								"В конце дороги развернитесь",
								name: "Развернитесь в конце {way_name}",
								destination: "В конце дороги развернитесь в направлении {destination}"
							}
						},
						fork: {
						default: {
							default:
								"На развилке двигайтесь {modifier}",
								name: "На развилке двигайтесь {modifier} на {way_name}",
								destination: "На развилке двигайтесь {modifier} в направлении {destination}"
							},
							"slight left": {
							default:
								"На развилке держитесь левее",
								name: "На развилке держитесь левее на {way_name}",
								destination: "На развилке держитесь левее и продолжите движение в направлении {destination}"
							},
							"slight right": {
							default:
								"На развилке держитесь правее",
								name: "На развилке держитесь правее на {way_name}",
								destination: "На развилке держитесь правее и продолжите движение в направлении {destination}"
							},
							"sharp left": {
							default:
								"На развилке резко поверните налево",
								name: "На развилке резко поверните налево на {way_name}",
								destination: "На развилке резко поверните налево и продолжите движение в направлении {destination}"
							},
							"sharp right": {
							default:
								"На развилке резко поверните направо",
								name: "На развилке резко поверните направо на {way_name}",
								destination: "На развилке резко поверните направо и продолжите движение в направлении {destination}"
							},
							uturn: {
							default:
								"На развилке развернитесь",
								name: "На развилке развернитесь на {way_name}",
								destination: "На развилке развернитесь и продолжите движение в направлении {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Перестройтесь {modifier}",
								name: "Перестройтесь {modifier} на {way_name}",
								destination: "Перестройтесь {modifier} в направлении {destination}"
							},
							"slight left": {
							default:
								"Перестройтесь левее",
								name: "Перестройтесь левее на {way_name}",
								destination: "Перестройтесь левее в направлении {destination}"
							},
							"slight right": {
							default:
								"Перестройтесь правее",
								name: "Перестройтесь правее на {way_name}",
								destination: "Перестройтесь правее в направлении {destination}"
							},
							"sharp left": {
							default:
								"Перестраивайтесь левее",
								name: "Перестраивайтесь левее на {way_name}",
								destination: "Перестраивайтесь левее в направлении {destination}"
							},
							"sharp right": {
							default:
								"Перестраивайтесь правее",
								name: "Перестраивайтесь правее на {way_name}",
								destination: "Перестраивайтесь правее в направлении {destination}"
							},
							uturn: {
							default:
								"Развернитесь",
								name: "Развернитесь на {way_name}",
								destination: "Развернитесь в направлении {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Двигайтесь {modifier}",
								name: "Двигайтесь {modifier} на {way_name}",
								destination: "Двигайтесь {modifier} в направлении {destination}"
							},
							"sharp left": {
							default:
								"Резко поверните налево",
								name: "Резко поверните налево на {way_name}",
								destination: "Резко поверните налево и продолжите движение в направлении {destination}"
							},
							"sharp right": {
							default:
								"Резко поверните направо",
								name: "Резко поверните направо на {way_name}",
								destination: "Резко поверните направо и продолжите движение в направлении {destination}"
							},
							"slight left": {
							default:
								"Плавно поверните налево",
								name: "Плавно поверните налево на {way_name}",
								destination: "Плавно поверните налево в направлении {destination}"
							},
							"slight right": {
							default:
								"Плавно поверните направо",
								name: "Плавно поверните направо на {way_name}",
								destination: "Плавно поверните направо в направлении {destination}"
							},
							uturn: {
							default:
								"Развернитесь",
								name: "Развернитесь на {way_name}",
								destination: "Развернитесь и продолжите движение в направлении {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Двигайтесь {modifier}",
								name: "Двигайтесь {modifier} по {way_name}",
								destination: "Двигайтесь {modifier} в направлении {destination}"
							},
							uturn: {
							default:
								"Развернитесь",
								name: "Развернитесь на {way_name}",
								destination: "Развернитесь и продолжите движение в направлении {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Сверните на съезд",
								name: "Сверните на съезд на {way_name}",
								destination: "Сверните на съезд в направлении {destination}"
							},
							left: {
							default:
								"Сверните на левый съезд",
								name: "Сверните на левый съезд на {way_name}",
								destination: "Сверните на правый съезд в направлении {destination}"
							},
							right: {
							default:
								"Сверните на правый съезд",
								name: "Сверните на правый съезд на {way_name}",
								destination: "Сверните на правый съезд в направлении {destination}"
							},
							"sharp left": {
							default:
								"Поверните на левый съезд",
								name: "Поверните на левый съезд на {way_name}",
								destination: "Поверните на левый съезд в направлении {destination}"
							},
							"sharp right": {
							default:
								"Поверните на правый съезд",
								name: "Поверните на правый съезд на {way_name}",
								destination: "Поверните на правый съезд в направлении {destination}"
							},
							"slight left": {
							default:
								"Плавно сверните на левый съезд",
								name: "Плавно сверните на левый съезд на {way_name}",
								destination: "Плавно сверните на левый съезд в направлении {destination}"
							},
							"slight right": {
							default:
								"Плавно сверните на правый съезд",
								name: "Плавно сверните на правый съезд на {way_name}",
								destination: "Плавно сверните на правый съезд в направлении {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Сверните на автомагистраль",
								name: "Сверните на въезд на {way_name}",
								destination: "Сверните на въезд на автомагистраль в направлении {destination}"
							},
							left: {
							default:
								"Сверните на левый въезд на автомагистраль",
								name: "Сверните на левый въезд на {way_name}",
								destination: "Сверните на левый въезд на автомагистраль в направлении {destination}"
							},
							right: {
							default:
								"Сверните на правый въезд на автомагистраль",
								name: "Сверните на правый въезд на {way_name}",
								destination: "Сверните на правый въезд на автомагистраль в направлении {destination}"
							},
							"sharp left": {
							default:
								"Поверните на левый въезд на автомагистраль",
								name: "Поверните на левый въезд на {way_name}",
								destination: "Поверните на левый въезд на автомагистраль в направлении {destination}"
							},
							"sharp right": {
							default:
								"Поверните на правый въезд на автомагистраль",
								name: "Поверните на правый въезд на {way_name}",
								destination: "Поверните на правый въезд на автомагистраль в направлении {destination}"
							},
							"slight left": {
							default:
								"Перестройтесь левее на въезд на автомагистраль",
								name: "Перестройтесь левее на {way_name}",
								destination: "Перестройтесь левее на автомагистраль в направлении {destination}"
							},
							"slight right": {
							default:
								"Перестройтесь правее на въезд на автомагистраль",
								name: "Перестройтесь правее на {way_name}",
								destination: "Перестройтесь правее на автомагистраль в направлении {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Продолжите движение по круговой развязке",
									name: "На круговой  развязке сверните на {way_name}",
									destination: "На круговой  развязке сверните в направлении {destination}"
								},
								name: {
								default:
									"Продолжите движение по {rotary_name} с круговым движением",
									name: "На {rotary_name} с круговым движением сверните на {way_name}",
									destination: "На {rotary_name} с круговым движением сверните в направлении {destination}"
								},
								exit: {
								default:
									"На круговой развязке сверните на {exit_number} съезд",
									name: "На круговой развязке сверните на {exit_number} съезд на {way_name}",
									destination: "На круговой развязке сверните на {exit_number} съезд в направлении {destination}"
								},
								name_exit: {
								default:
									"На {rotary_name} с круговым движением сверните на {exit_number} съезд",
									name: "На {rotary_name} с круговым движением сверните на {exit_number} съезд на {way_name}",
									destination: "На {rotary_name} с круговым движением сверните на {exit_number} съезд в направлении {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"На круговой  развязке сверните на {exit_number} съезд",
									name: "На круговой  развязке сверните на {exit_number} съезд на {way_name}",
									destination: "На круговой  развязке сверните на {exit_number} съезд в направлении {destination}"
								},
							default: {
								default:
									"Продолжите движение по круговой развязке",
									name: "На круговой развязке сверните на {way_name}",
									destination: "На круговой развязке сверните в направлении {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"На круговой развязке двигайтесь {modifier}",
								name: "На круговой развязке двигайтесь {modifier} на {way_name}",
								destination: "На круговой развязке двигайтесь {modifier} в направлении {destination}"
							},
							left: {
							default:
								"На круговой развязке сверните налево",
								name: "На круговой развязке сверните налево на {way_name}",
								destination: "На круговой развязке сверните налево в направлении {destination}"
							},
							right: {
							default:
								"На круговой развязке сверните направо",
								name: "На круговой развязке сверните направо на {way_name}",
								destination: "На круговой развязке сверните направо в направлении {destination}"
							},
							straight: {
							default:
								"На круговой развязке двигайтесь прямо",
								name: "На круговой развязке двигайтесь по {way_name}",
								destination: "На круговой развязке двигайтесь в направлении {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Двигайтесь {modifier}",
								name: "Двигайтесь {modifier} на {way_name}",
								destination: "Двигайтесь {modifier}  в направлении {destination}"
							},
							left: {
							default:
								"Поверните налево",
								name: "Поверните налево на {way_name}",
								destination: "Поверните налево в направлении {destination}"
							},
							right: {
							default:
								"Поверните направо",
								name: "Поверните направо на {way_name}",
								destination: "Поверните направо  в направлении {destination}"
							},
							straight: {
							default:
								"Двигайтесь прямо",
								name: "Двигайтесь по {way_name}",
								destination: "Двигайтесь в направлении {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Продолжайте движение прямо"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		45: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "1:a",
								2: "2:a",
								3: "3:e",
								4: "4:e",
								5: "5:e",
								6: "6:e",
								7: "7:e",
								8: "8:e",
								9: "9:e",
								10: "10:e"
							},
							direction: {
								north: "norr",
								northeast: "nordost",
								east: "öster",
								southeast: "sydost",
								south: "söder",
								southwest: "sydväst",
								west: "väster",
								northwest: "nordväst"
							},
							modifier: {
								left: "vänster",
								right: "höger",
								"sharp left": "skarp vänster",
								"sharp right": "skarp höger",
								"slight left": "lätt vänster",
								"slight right": "lätt höger",
								straight: "rakt fram",
								uturn: "U-sväng"
							},
							lanes: {
								xo: "Håll till höger",
								ox: "Håll till vänster",
								xox: "Håll till mitten",
								oxo: "Håll till vänster eller höger"
							}
						},
						modes: {
							ferry: {
							default:
								"Ta färjan",
								name: "Ta färjan på {way_name}",
								destination: "Ta färjan mot {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Du är framme vid din {nth} destination"
							},
							left: {
							default:
								"Du är framme vid din {nth} destination, till vänster"
							},
							right: {
							default:
								"Du är framme vid din {nth} destination, till höger"
							},
							"sharp left": {
							default:
								"Du är framme vid din {nth} destination, skarpt till vänster"
							},
							"sharp right": {
							default:
								"Du är framme vid din {nth} destination, skarpt till höger"
							},
							"slight right": {
							default:
								"Du är framme vid din {nth} destination, lätt till höger"
							},
							"slight left": {
							default:
								"Du är framme vid din {nth} destination, lätt till vänster"
							},
							straight: {
							default:
								"Du är framme vid din {nth} destination, rakt fram"
							}
						},
						continue: {
						default: {
							default:
								"Fortsätt {modifier}",
								name: "Fortsätt {modifier} in på {way_name}",
								destination: "Fortsätt {modifier} mot {destination}"
							},
							straight: {
							default:
								"Fortsätt rakt fram",
								name: "Fortsätt in på {way_name}",
								destination: "Fortsätt mot {destination}"
							},
							"slight left": {
							default:
								"Fortsätt med lätt vänstersväng",
								name: "Fortsätt med lätt vänstersväng in på {way_name}",
								destination: "Fortsätt med lätt vänstersväng mot {destination}"
							},
							"slight right": {
							default:
								"Fortsätt med lätt högersväng",
								name: "Fortsätt med lätt högersväng in på {way_name}",
								destination: "Fortsätt med lätt högersväng mot {destination}"
							},
							uturn: {
							default:
								"Gör en U-sväng",
								name: "Gör en U-sväng in på {way_name}",
								destination: "Gör en U-sväng mot {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Kör åt {direction}",
								name: "Kör åt {direction} på {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Sväng {modifier}",
								name: "Sväng {modifier} in på {way_name}",
								destination: "Sväng {modifier} mot {destination}"
							},
							straight: {
							default:
								"Fortsätt rakt fram",
								name: "Fortsätt rakt fram in på {way_name}",
								destination: "Fortsätt rakt fram mot {destination}"
							},
							uturn: {
							default:
								"Gör en U-sväng i slutet av vägen",
								name: "Gör en U-sväng in på {way_name} i slutet av vägen",
								destination: "Gör en U-sväng mot {destination} i slutet av vägen"
							}
						},
						fork: {
						default: {
							default:
								"Håll till {modifier} där vägen delar sig",
								name: "Håll till {modifier} in på {way_name}",
								destination: "Håll till {modifier} mot {destination}"
							},
							"slight left": {
							default:
								"Håll till vänster där vägen delar sig",
								name: "Håll till vänster in på {way_name}",
								destination: "Håll till vänster mot {destination}"
							},
							"slight right": {
							default:
								"Håll till höger där vägen delar sig",
								name: "Håll till höger in på {way_name}",
								destination: "Håll till höger mot {destination}"
							},
							"sharp left": {
							default:
								"Gör en skarp vänstersväng där vägen delar sig",
								name: "Gör en skarp vänstersväng in på {way_name}",
								destination: "Gör en skarp vänstersväng mot {destination}"
							},
							"sharp right": {
							default:
								"Gör en skarp högersväng där vägen delar sig",
								name: "Gör en skarp högersväng in på {way_name}",
								destination: "Gör en skarp högersväng mot {destination}"
							},
							uturn: {
							default:
								"Gör en U-sväng",
								name: "Gör en U-sväng in på {way_name}",
								destination: "Gör en U-sväng mot {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Körfältsbyte åt {modifier}",
								name: "Körfältsbyte åt {modifier} in på {way_name}",
								destination: "Körfältsbyte åt {modifier} mot {destination}"
							},
							"slight left": {
							default:
								"Körfältsbyte åt vänster",
								name: "Körfältsbyte åt vänster in på {way_name}",
								destination: "Körfältsbyte åt vänster mot {destination}"
							},
							"slight right": {
							default:
								"Körfältsbyte åt höger",
								name: "Körfältsbyte åt höger in på {way_name}",
								destination: "Körfältsbyte åt höger mot {destination}"
							},
							"sharp left": {
							default:
								"Körfältsbyte åt vänster",
								name: "Körfältsbyte åt vänster in på {way_name}",
								destination: "Körfältsbyte åt vänster mot {destination}"
							},
							"sharp right": {
							default:
								"Körfältsbyte åt höger",
								name: "Körfältsbyte åt höger in på {way_name}",
								destination: "Körfältsbyte åt höger mot {destination}"
							},
							uturn: {
							default:
								"Gör en U-sväng",
								name: "Gör en U-sväng in på {way_name}",
								destination: "Gör en U-sväng mot {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Fortsätt {modifier}",
								name: "Fortsätt {modifier} på {way_name}",
								destination: "Fortsätt {modifier} mot {destination}"
							},
							"sharp left": {
							default:
								"Gör en skarp vänstersväng",
								name: "Gör en skarp vänstersväng in på {way_name}",
								destination: "Gör en skarp vänstersväng mot {destination}"
							},
							"sharp right": {
							default:
								"Gör en skarp högersväng",
								name: "Gör en skarp högersväng in på {way_name}",
								destination: "Gör en skarp högersväng mot {destination}"
							},
							"slight left": {
							default:
								"Fortsätt med lätt vänstersväng",
								name: "Fortsätt med lätt vänstersväng in på {way_name}",
								destination: "Fortsätt med lätt vänstersväng mot {destination}"
							},
							"slight right": {
							default:
								"Fortsätt med lätt högersväng",
								name: "Fortsätt med lätt högersväng in på {way_name}",
								destination: "Fortsätt med lätt högersväng mot {destination}"
							},
							uturn: {
							default:
								"Gör en U-sväng",
								name: "Gör en U-sväng in på {way_name}",
								destination: "Gör en U-sväng mot {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Fortsätt {modifier}",
								name: "Fortsätt {modifier} på {way_name}",
								destination: "Fortsätt {modifier} mot {destination}"
							},
							uturn: {
							default:
								"Gör en U-sväng",
								name: "Gör en U-sväng in på {way_name}",
								destination: "Gör en U-sväng mot {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Ta avfartrampen",
								name: "Ta avfartsrampen in på {way_name}",
								destination: "Ta avfartsrampen mot {destination}"
							},
							left: {
							default:
								"Ta avfartsrampen till vänster",
								name: "Ta avfartsrampen till vänster in på {way_name}",
								destination: "Ta avfartsrampen till vänster mot {destination}"
							},
							right: {
							default:
								"Ta avfartsrampen till höger",
								name: "Ta avfartsrampen till höger in på {way_name}",
								destination: "Ta avfartsrampen till höger mot {destination}"
							},
							"sharp left": {
							default:
								"Ta avfartsrampen till vänster",
								name: "Ta avfartsrampen till vänster in på {way_name}",
								destination: "Ta avfartsrampen till vänster mot {destination}"
							},
							"sharp right": {
							default:
								"Ta avfartsrampen till höger",
								name: "Ta avfartsrampen till höger in på {way_name}",
								destination: "Ta avfartsrampen till höger mot {destination}"
							},
							"slight left": {
							default:
								"Ta avfartsrampen till vänster",
								name: "Ta avfartsrampen till vänster in på {way_name}",
								destination: "Ta avfartsrampen till vänster mot {destination}"
							},
							"slight right": {
							default:
								"Ta avfartsrampen till höger",
								name: "Ta avfartsrampen till höger in på {way_name}",
								destination: "Ta avfartsrampen till höger mot {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Ta påfartsrampen",
								name: "Ta påfartsrampen in på {way_name}",
								destination: "Ta påfartsrampen mot {destination}"
							},
							left: {
							default:
								"Ta påfartsrampen till vänster",
								name: "Ta påfartsrampen till vänster in på {way_name}",
								destination: "Ta påfartsrampen till vänster mot {destination}"
							},
							right: {
							default:
								"Ta påfartsrampen till höger",
								name: "Ta påfartsrampen till höger in på {way_name}",
								destination: "Ta påfartsrampen till höger mot {destination}"
							},
							"sharp left": {
							default:
								"Ta påfartsrampen till vänster",
								name: "Ta påfartsrampen till vänster in på {way_name}",
								destination: "Ta påfartsrampen till vänster mot {destination}"
							},
							"sharp right": {
							default:
								"Ta påfartsrampen till höger",
								name: "Ta påfartsrampen till höger in på {way_name}",
								destination: "Ta påfartsrampen till höger mot {destination}"
							},
							"slight left": {
							default:
								"Ta påfartsrampen till vänster",
								name: "Ta påfartsrampen till vänster in på {way_name}",
								destination: "Ta påfartsrampen till vänster mot {destination}"
							},
							"slight right": {
							default:
								"Ta påfartsrampen till höger",
								name: "Ta påfartsrampen till höger in på {way_name}",
								destination: "Ta påfartsrampen till höger mot {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Kör in i rondellen",
									name: "Kör in i rondellen och ta av mot {way_name}",
									destination: "Kör in i rondellen och ta av mot {destination}"
								},
								name: {
								default:
									"Kör in i {rotary_name}",
									name: "Kör in i {rotary_name} och ta av mot {way_name}",
									destination: "Kör in i {rotary_name} och ta av mot {destination}"
								},
								exit: {
								default:
									"Kör in i rondellen och ta avfart {exit_number}",
									name: "Kör in i rondellen och ta avfart {exit_number} mot {way_name}",
									destination: "Kör in i rondellen och ta avfart {exit_number} mot {destination}"
								},
								name_exit: {
								default:
									"Kör in i {rotary_name} och ta avfart {exit_number}",
									name: "Kör in i {rotary_name} och ta avfart {exit_number} mot {way_name}",
									destination: "Kör in i {rotary_name} och ta avfart {exit_number} mot {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Kör in i rondellen och ta avfart {exit_number}",
									name: "Kör in i rondellen och ta avfart {exit_number} mot {way_name}",
									destination: "Kör in i rondellen och ta avfart {exit_number} mot {destination}"
								},
							default: {
								default:
									"Kör in i rondellen",
									name: "Kör in i rondellen och ta av mot {way_name}",
									destination: "Kör in i rondellen och ta av mot {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"Vid rondellen sväng {modifier}",
								name: "Vid rondellen sväng {modifier} in på {way_name}",
								destination: "Vid rondellen sväng {modifier} mot {destination}"
							},
							left: {
							default:
								"Vid rondellen sväng vänster",
								name: "Vid rondellen sväng vänster in på {way_name}",
								destination: "Vid rondellen sväng vänster mot {destination}"
							},
							right: {
							default:
								"Vid rondellen sväng höger",
								name: "Vid rondellen sväng höger in på {way_name}",
								destination: "Vid rondellen sväng höger mot {destination}"
							},
							straight: {
							default:
								"Vid rondellen fortsätt rakt fram",
								name: "Vid rondellen fortsätt rakt fram in på {way_name}",
								destination: "Vid rondellen fortsätt rakt fram mot {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Sväng åt {modifier}",
								name: "Sväng åt {modifier} in på {way_name}",
								destination: "Sväng åt {modifier} mot {destination}"
							},
							left: {
							default:
								"Sväng vänster",
								name: "Sväng vänster in på {way_name}",
								destination: "Sväng vänster mot {destination}"
							},
							right: {
							default:
								"Sväng höger",
								name: "Sväng höger in på {way_name}",
								destination: "Sväng höger mot {destination}"
							},
							straight: {
							default:
								"Kör rakt fram",
								name: "Kör rakt fram in på {way_name}",
								destination: "Kör rakt fram mot {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Fortsätt rakt fram"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		46: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !0
					},
					v5: {
						constants: {
							ordinalize: {
								1: "đầu tiên",
								2: "thứ 2",
								3: "thứ 3",
								4: "thứ 4",
								5: "thứ 5",
								6: "thú 6",
								7: "thứ 7",
								8: "thứ 8",
								9: "thứ 9",
								10: "thứ 10"
							},
							direction: {
								north: "bắc",
								northeast: "đông bắc",
								east: "đông",
								southeast: "đông nam",
								south: "nam",
								southwest: "tây nam",
								west: "tây",
								northwest: "tây bắc"
							},
							modifier: {
								left: "trái",
								right: "phải",
								"sharp left": "trái gắt",
								"sharp right": "phải gắt",
								"slight left": "trái nghiêng",
								"slight right": "phải nghiêng",
								straight: "thẳng",
								uturn: "ngược"
							},
							lanes: {
								xo: "Đi bên phải",
								ox: "Đi bên trái",
								xox: "Đi vào giữa",
								oxo: "Đi bên trái hay bên phải"
							}
						},
						modes: {
							ferry: {
							default:
								"Lên phà",
								name: "Lên phà {way_name}",
								destination: "Lên phà đi {destination}"
							}
						},
						arrive: {
						default: {
							default:
								"Đến nơi {nth}"
							},
							left: {
							default:
								"Đến nơi {nth} ở bên trái"
							},
							right: {
							default:
								"Đến nơi {nth} ở bên phải"
							},
							"sharp left": {
							default:
								"Đến nơi {nth} ở bên trái"
							},
							"sharp right": {
							default:
								"Đến nơi {nth} ở bên phải"
							},
							"slight right": {
							default:
								"Đến nơi {nth} ở bên phải"
							},
							"slight left": {
							default:
								"Đến nơi {nth} ở bên trái"
							},
							straight: {
							default:
								"Đến nơi {nth} ở trước mặt"
							}
						},
						continue: {
						default: {
							default:
								"Chạy tiếp bên {modifier}",
								name: "Chạy tiếp bên {modifier} trên {way_name}",
								destination: "Chạy tiếp bên {modifier} đến {destination}"
							},
							straight: {
							default:
								"Chạy thẳng",
								name: "Chạy tiếp trên {way_name}",
								destination: "Chạy tiếp đến {destination}"
							},
							"slight left": {
							default:
								"Nghiêng về bên trái",
								name: "Nghiêng về bên trái vào {way_name}",
								destination: "Nghiêng về bên trái đến {destination}"
							},
							"slight right": {
							default:
								"Nghiêng về bên phải",
								name: "Nghiêng về bên phải vào {way_name}",
								destination: "Nghiêng về bên phải đến {destination}"
							},
							uturn: {
							default:
								"Quẹo ngược lại",
								name: "Quẹo ngược lại {way_name}",
								destination: "Quẹo ngược đến {destination}"
							}
						},
						depart: {
						default: {
							default:
								"Đi về hướng {direction}",
								name: "Đi về hướng {direction} trên {way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"Quẹo {modifier}",
								name: "Quẹo {modifier} vào {way_name}",
								destination: "Quẹo {modifier} đến {destination}"
							},
							straight: {
							default:
								"Chạy thẳng",
								name: "Chạy tiếp trên {way_name}",
								destination: "Chạy tiếp đến {destination}"
							},
							uturn: {
							default:
								"Quẹo ngược lại tại cuối đường",
								name: "Quẹo ngược vào {way_name} tại cuối đường",
								destination: "Quẹo ngược đến {destination} tại cuối đường"
							}
						},
						fork: {
						default: {
							default:
								"Đi bên {modifier} ở ngã ba",
								name: "Đi bên {modifier} ở ngã ba vào {way_name}",
								destination: "Đi bên {modifier} ở ngã ba đến {destination}"
							},
							"slight left": {
							default:
								"Nghiêng về bên trái ở ngã ba",
								name: "Nghiêng về bên trái ở ngã ba vào {way_name}",
								destination: "Nghiêng về bên trái ở ngã ba đến {destination}"
							},
							"slight right": {
							default:
								"Nghiêng về bên phải ở ngã ba",
								name: "Nghiêng về bên phải ở ngã ba vào {way_name}",
								destination: "Nghiêng về bên phải ở ngã ba đến {destination}"
							},
							"sharp left": {
							default:
								"Quẹo gắt bên trái ở ngã ba",
								name: "Quẹo gắt bên trái ở ngã ba vào {way_name}",
								destination: "Quẹo gắt bên trái ở ngã ba đến {destination}"
							},
							"sharp right": {
							default:
								"Quẹo gắt bên phải ở ngã ba",
								name: "Quẹo gắt bên phải ở ngã ba vào {way_name}",
								destination: "Quẹo gắt bên phải ở ngã ba đến {destination}"
							},
							uturn: {
							default:
								"Quẹo ngược lại",
								name: "Quẹo ngược lại {way_name}",
								destination: "Quẹo ngược lại đến {destination}"
							}
						},
						merge: {
						default: {
							default:
								"Nhập sang {modifier}",
								name: "Nhập sang {modifier} vào {way_name}",
								destination: "Nhập sang {modifier} đến {destination}"
							},
							"slight left": {
							default:
								"Nhập sang trái",
								name: "Nhập sang trái vào {way_name}",
								destination: "Nhập sang trái đến {destination}"
							},
							"slight right": {
							default:
								"Nhập sang phải",
								name: "Nhập sang phải vào {way_name}",
								destination: "Nhập sang phải đến {destination}"
							},
							"sharp left": {
							default:
								"Nhập sang trái",
								name: "Nhập sang trái vào {way_name}",
								destination: "Nhập sang trái đến {destination}"
							},
							"sharp right": {
							default:
								"Nhập sang phải",
								name: "Nhập sang phải vào {way_name}",
								destination: "Nhập sang phải đến {destination}"
							},
							uturn: {
							default:
								"Quẹo ngược lại",
								name: "Quẹo ngược lại {way_name}",
								destination: "Quẹo ngược lại đến {destination}"
							}
						},
						"new name": {
						default: {
							default:
								"Chạy tiếp bên {modifier}",
								name: "Chạy tiếp bên {modifier} trên {way_name}",
								destination: "Chạy tiếp bên {modifier} đến {destination}"
							},
							"sharp left": {
							default:
								"Quẹo gắt bên trái",
								name: "Quẹo gắt bên trái vào {way_name}",
								destination: "Quẹo gắt bên trái đến {destination}"
							},
							"sharp right": {
							default:
								"Quẹo gắt bên phải",
								name: "Quẹo gắt bên phải vào {way_name}",
								destination: "Quẹo gắt bên phải đến {destination}"
							},
							"slight left": {
							default:
								"Nghiêng về bên trái",
								name: "Nghiêng về bên trái vào {way_name}",
								destination: "Nghiêng về bên trái đến {destination}"
							},
							"slight right": {
							default:
								"Nghiêng về bên phải",
								name: "Nghiêng về bên phải vào {way_name}",
								destination: "Nghiêng về bên phải đến {destination}"
							},
							uturn: {
							default:
								"Quẹo ngược lại",
								name: "Quẹo ngược lại {way_name}",
								destination: "Quẹo ngược lại đến {destination}"
							}
						},
						notification: {
						default: {
							default:
								"Chạy tiếp bên {modifier}",
								name: "Chạy tiếp bên {modifier} trên {way_name}",
								destination: "Chạy tiếp bên {modifier} đến {destination}"
							},
							uturn: {
							default:
								"Quẹo ngược lại",
								name: "Quẹo ngược lại {way_name}",
								destination: "Quẹo ngược lại đến {destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"Đi đường nhánh",
								name: "Đi đường nhánh {way_name}",
								destination: "Đi đường nhánh đến {destination}",
								exit: "Đi theo lối ra {exit}",
								exit_destination: "Đi theo lối ra {exit} về hướng {destination}"
							},
							left: {
							default:
								"Đi đường nhánh bên trái",
								name: "Đi đường nhánh {way_name} bên trái",
								destination: "Đi đường nhánh bên trái đến {destination}",
								exit: "Đi theo lối ra {exit} bên trái",
								exit_destination: "Đi theo lối ra {exit} bên trái về hướng {destination}"
							},
							right: {
							default:
								"Đi đường nhánh bên phải",
								name: "Đi đường nhánh {way_name} bên phải",
								destination: "Đi đường nhánh bên phải đến {destination}",
								exit: "Đi theo lối ra {exit}",
								exit_destination: "Đi theo lối ra {exit} bên phải về hướng {destination}"
							},
							"sharp left": {
							default:
								"Đi đường nhánh bên trái",
								name: "Đi đường nhánh {way_name} bên trái",
								destination: "Đi đường nhánh bên trái đến {destination}",
								exit: "Đi theo lối ra {exit} bên trái",
								exit_destination: "Đi theo lối ra {exit} bên trái về hướng {destination}"
							},
							"sharp right": {
							default:
								"Đi đường nhánh bên phải",
								name: "Đi đường nhánh {way_name} bên phải",
								destination: "Đi đường nhánh bên phải đến {destination}",
								exit: "Đi theo lối ra {exit}",
								exit_destination: "Đi theo lối ra {exit} bên phải về hướng {destination}"
							},
							"slight left": {
							default:
								"Đi đường nhánh bên trái",
								name: "Đi đường nhánh {way_name} bên trái",
								destination: "Đi đường nhánh bên trái đến {destination}",
								exit: "Đi theo lối ra {exit} bên trái",
								exit_destination: "Đi theo lối ra {exit} bên trái về hướng {destination}"
							},
							"slight right": {
							default:
								"Đi đường nhánh bên phải",
								name: "Đi đường nhánh {way_name} bên phải",
								destination: "Đi đường nhánh bên phải đến {destination}",
								exit: "Đi theo lối ra {exit}",
								exit_destination: "Đi theo lối ra {exit} bên phải về hướng {destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"Đi đường nhánh",
								name: "Đi đường nhánh {way_name}",
								destination: "Đi đường nhánh đến {destination}"
							},
							left: {
							default:
								"Đi đường nhánh bên trái",
								name: "Đi đường nhánh {way_name} bên trái",
								destination: "Đi đường nhánh bên trái đến {destination}"
							},
							right: {
							default:
								"Đi đường nhánh bên phải",
								name: "Đi đường nhánh {way_name} bên phải",
								destination: "Đi đường nhánh bên phải đến {destination}"
							},
							"sharp left": {
							default:
								"Đi đường nhánh bên trái",
								name: "Đi đường nhánh {way_name} bên trái",
								destination: "Đi đường nhánh bên trái đến {destination}"
							},
							"sharp right": {
							default:
								"Đi đường nhánh bên phải",
								name: "Đi đường nhánh {way_name} bên phải",
								destination: "Đi đường nhánh bên phải đến {destination}"
							},
							"slight left": {
							default:
								"Đi đường nhánh bên trái",
								name: "Đi đường nhánh {way_name} bên trái",
								destination: "Đi đường nhánh bên trái đến {destination}"
							},
							"slight right": {
							default:
								"Đi đường nhánh bên phải",
								name: "Đi đường nhánh {way_name} bên phải",
								destination: "Đi đường nhánh bên phải đến {destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"Đi vào bùng binh",
									name: "Đi vào bùng binh và ra tại {way_name}",
									destination: "Vào bùng binh và ra để đi {destination}"
								},
								name: {
								default:
									"Đi vào {rotary_name}",
									name: "Đi vào {rotary_name} và ra tại {way_name}",
									destination: "Đi và {rotary_name} và ra để đi {destination}"
								},
								exit: {
								default:
									"Đi vào bùng binh và ra tại đường {exit_number}",
									name: "Đi vào bùng binh và ra tại đường {exit_number} tức {way_name}",
									destination: "Đi vào bùng binh và ra tại đường {exit_number} đến {destination}"
								},
								name_exit: {
								default:
									"Đi vào {rotary_name} và ra tại đường {exit_number}",
									name: "Đi vào {rotary_name} và ra tại đường {exit_number} tức {way_name}",
									destination: "Đi vào {rotary_name} và ra tại đường {exit_number} đến {destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"Đi vào vòng xuyến và ra tại đường {exit_number}",
									name: "Đi vào vòng xuyến và ra tại đường {exit_number} tức {way_name}",
									destination: "Đi vào vòng xuyến và ra tại đường {exit_number} đến {destination}"
								},
							default: {
								default:
									"Đi vào vòng xuyến",
									name: "Đi vào vòng xuyến và ra tại {way_name}",
									destination: "Đi vào vòng xuyến và ra để đi {destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"Đi bên {modifier} tại vòng xuyến",
								name: "Đi bên {modifier} tại vòng xuyến để vào {way_name}",
								destination: "Đi bên {modifier} tại vòng xuyến để đi {destination}"
							},
							left: {
							default:
								"Quẹo trái tại vòng xuyến",
								name: "Quẹo trái tại vòng xuyến để vào {way_name}",
								destination: "Quẹo trái tại vòng xuyến để đi {destination}"
							},
							right: {
							default:
								"Quẹo phải tại vòng xuyến",
								name: "Quẹo phải ti vòng xuyến để vào {way_name}",
								destination: "Quẹo phải tại vòng xuyến để đi {destination}"
							},
							straight: {
							default:
								"Chạy thẳng tại vòng xuyến",
								name: "Chạy thẳng tại vòng xuyến để chạy tiếp trên {way_name}",
								destination: "Chạy thẳng tại vòng xuyến để đi {destination}"
							}
						},
						turn: {
						default: {
							default:
								"Quẹo {modifier}",
								name: "Quẹo {modifier} vào {way_name}",
								destination: "Quẹo {modifier} đến {destination}"
							},
							left: {
							default:
								"Quẹo trái",
								name: "Quẹo trái vào {way_name}",
								destination: "Quẹo trái đến {destination}"
							},
							right: {
							default:
								"Quẹo phải",
								name: "Quẹo phải vào {way_name}",
								destination: "Quẹo phải đến {destination}"
							},
							straight: {
							default:
								"Chạy thẳng",
								name: "Chạy thẳng vào {way_name}",
								destination: "Chạy thẳng đến {destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"Chạy thẳng"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		47: [function (t, e, n) {
				e.exports = {
					meta: {
						capitalizeFirstLetter: !1
					},
					v5: {
						constants: {
							ordinalize: {
								1: "第一",
								2: "第二",
								3: "第三",
								4: "第四",
								5: "第五",
								6: "第六",
								7: "第七",
								8: "第八",
								9: "第九",
								10: "第十"
							},
							direction: {
								north: "北",
								northeast: "东北",
								east: "东",
								southeast: "东南",
								south: "南",
								southwest: "西南",
								west: "西",
								northwest: "西北"
							},
							modifier: {
								left: "向左",
								right: "向右",
								"sharp left": "向左",
								"sharp right": "向右",
								"slight left": "向左",
								"slight right": "向右",
								straight: "直行",
								uturn: "调头"
							},
							lanes: {
								xo: "靠右直行",
								ox: "靠左直行",
								xox: "保持在道路中间直行",
								oxo: "保持在道路两侧直行"
							}
						},
						modes: {
							ferry: {
							default:
								"乘坐轮渡",
								name: "乘坐{way_name}轮渡",
								destination: "乘坐开往{destination}的轮渡"
							}
						},
						arrive: {
						default: {
							default:
								"您已经到达您的{nth}个目的地"
							},
							left: {
							default:
								"您已经到达您的{nth}个目的地，在道路左侧"
							},
							right: {
							default:
								"您已经到达您的{nth}个目的地，在道路右侧"
							},
							"sharp left": {
							default:
								"您已经到达您的{nth}个目的地，在道路左侧"
							},
							"sharp right": {
							default:
								"您已经到达您的{nth}个目的地，在道路右侧"
							},
							"slight right": {
							default:
								"您已经到达您的{nth}个目的地，在道路右侧"
							},
							"slight left": {
							default:
								"您已经到达您的{nth}个目的地，在道路左侧"
							},
							straight: {
							default:
								"您已经到达您的{nth}个目的地，在您正前方"
							}
						},
						continue: {
						default: {
							default:
								"继续{modifier}",
								name: "继续{modifier}，上{way_name}",
								destination: "继续{modifier}行驶，前往{destination}"
							},
							uturn: {
							default:
								"调头",
								name: "调头上{way_name}",
								destination: "调头后前往{destination}"
							}
						},
						depart: {
						default: {
							default:
								"出发向{direction}",
								name: "出发向{direction}，上{way_name}"
							}
						},
						"end of road": {
						default: {
							default:
								"{modifier}行驶",
								name: "{modifier}行驶，上{way_name}",
								destination: "{modifier}行驶，前往{destination}"
							},
							straight: {
							default:
								"继续直行",
								name: "继续直行，上{way_name}",
								destination: "继续直行，前往{destination}"
							},
							uturn: {
							default:
								"在道路尽头调头",
								name: "在道路尽头调头上{way_name}",
								destination: "在道路尽头调头，前往{destination}"
							}
						},
						fork: {
						default: {
							default:
								"在岔道保持{modifier}",
								name: "在岔道保持{modifier}，上{way_name}",
								destination: "在岔道保持{modifier}，前往{destination}"
							},
							uturn: {
							default:
								"调头",
								name: "调头，上{way_name}",
								destination: "调头，前往{destination}"
							}
						},
						merge: {
						default: {
							default:
								"{modifier}并道",
								name: "{modifier}并道，上{way_name}",
								destination: "{modifier}并道，前往{destination}"
							},
							uturn: {
							default:
								"调头",
								name: "调头，上{way_name}",
								destination: "调头，前往{destination}"
							}
						},
						"new name": {
						default: {
							default:
								"继续{modifier}",
								name: "继续{modifier}，上{way_name}",
								destination: "继续{modifier}，前往{destination}"
							},
							uturn: {
							default:
								"调头",
								name: "调头，上{way_name}",
								destination: "调头，前往{destination}"
							}
						},
						notification: {
						default: {
							default:
								"继续{modifier}",
								name: "继续{modifier}，上{way_name}",
								destination: "继续{modifier}，前往{destination}"
							},
							uturn: {
							default:
								"调头",
								name: "调头，上{way_name}",
								destination: "调头，前往{destination}"
							}
						},
						"off ramp": {
						default: {
							default:
								"上匝道",
								name: "通过匝道驶入{way_name}",
								destination: "通过匝道前往{destination}"
							},
							left: {
							default:
								"通过左边的匝道",
								name: "通过左边的匝道驶入{way_name}",
								destination: "通过左边的匝道前往{destination}"
							},
							right: {
							default:
								"通过右边的匝道",
								name: "通过右边的匝道驶入{way_name}",
								destination: "通过右边的匝道前往{destination}"
							}
						},
						"on ramp": {
						default: {
							default:
								"通过匝道",
								name: "通过匝道驶入{way_name}",
								destination: "通过匝道前往{destination}"
							},
							left: {
							default:
								"通过左边的匝道",
								name: "通过左边的匝道驶入{way_name}",
								destination: "通过左边的匝道前往{destination}"
							},
							right: {
							default:
								"通过右边的匝道",
								name: "通过右边的匝道驶入{way_name}",
								destination: "通过右边的匝道前往{destination}"
							}
						},
						rotary: {
						default: {
							default: {
								default:
									"进入环岛",
									name: "通过环岛后驶入{way_name}",
									destination: "通过环岛前往{destination}"
								},
								name: {
								default:
									"进入{rotary_name}环岛",
									name: "通过{rotary_name}环岛后驶入{way_name}",
									destination: "通过{rotary_name}环岛后前往{destination}"
								},
								exit: {
								default:
									"进入环岛并从{exit_number}出口驶出",
									name: "进入环岛后从{exit_number}出口驶出进入{way_name}",
									destination: "进入环岛后从{exit_number}出口驶出前往{destination}"
								},
								name_exit: {
								default:
									"进入{rotary_name}环岛后从{exit_number}出口驶出",
									name: "进入{rotary_name}环岛后从{exit_number}出口驶出进入{way_name}",
									destination: "进入{rotary_name}环岛后从{exit_number}出口驶出前往{destination}"
								}
							}
						},
						roundabout: {
						default: {
								exit: {
								default:
									"进入环岛后从{exit_number}出口驶出",
									name: "进入环岛后从{exit_number}出口驶出前往{way_name}",
									destination: "进入环岛后从{exit_number}出口驶出前往{destination}"
								},
							default: {
								default:
									"进入环岛",
									name: "通过环岛后驶入{way_name}",
									destination: "通过环岛后前往{destination}"
								}
							}
						},
						"roundabout turn": {
						default: {
							default:
								"在环岛{modifier}行驶",
								name: "在环岛{modifier}行驶，上{way_name}",
								destination: "在环岛{modifier}行驶，前往{destination}"
							},
							left: {
							default:
								"在环岛左转",
								name: "在环岛左转，上{way_name}",
								destination: "在环岛左转，前往{destination}"
							},
							right: {
							default:
								"在环岛右转",
								name: "在环岛右转，上{way_name}",
								destination: "在环岛右转，前往{destination}"
							},
							straight: {
							default:
								"在环岛继续直行",
								name: "在环岛继续直行，上{way_name}",
								destination: "在环岛继续直行，前往{destination}"
							}
						},
						turn: {
						default: {
							default:
								"{modifier}转弯",
								name: "{modifier}转弯，上{way_name}",
								destination: "{modifier}转弯，前往{destination}"
							},
							left: {
							default:
								"左转",
								name: "左转，上{way_name}",
								destination: "左转，前往{destination}"
							},
							right: {
							default:
								"右转",
								name: "右转，上{way_name}",
								destination: "右转，前往{destination}"
							},
							straight: {
							default:
								"直行",
								name: "直行，上{way_name}",
								destination: "直行，前往{destination}"
							}
						},
						"use lane": {
							no_lanes: {
							default:
								"继续直行"
							},
						default: {
							default:
								"{lane_instruction}"
							}
						}
					}
				}
			}, {}
		],
		48: [function (t, e, n) {
				"use strict";
				var i = String.prototype.replace,
				a = /%20/g;
				e.exports = {
				default:
					"RFC3986",
					formatters: {
						RFC1738: function (t) {
							return i.call(t, a, "+")
						},
						RFC3986: function (t) {
							return t
						}
					},
					RFC1738: "RFC1738",
					RFC3986: "RFC3986"
				}
			}, {}
		],
		49: [function (t, e, n) {
				"use strict";
				var i = t("./stringify"),
				a = t("./parse"),
				o = t("./formats");
				e.exports = {
					formats: o,
					parse: a,
					stringify: i
				}
			}, {
				"./formats": 48,
				"./parse": 50,
				"./stringify": 51
			}
		],
		50: [function (t, e, n) {
				"use strict";
				var i = t("./utils"),
				a = Object.prototype.hasOwnProperty,
				o = {
					allowDots: !1,
					allowPrototypes: !1,
					arrayLimit: 20,
					decoder: i.decode,
					delimiter: "&",
					depth: 5,
					parameterLimit: 1e3,
					plainObjects: !1,
					strictNullHandling: !1
				},
				r = function (t, e) {
					for (var n = {}, i = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), o = 0; o < i.length; ++o) {
						var r,
						s,
						l = i[o],
						d = -1 === l.indexOf("]=") ? l.indexOf("=") : l.indexOf("]=") + 1;
						-1 === d ? (r = e.decoder(l), s = e.strictNullHandling ? null : "") : (r = e.decoder(l.slice(0, d)), s = e.decoder(l.slice(d + 1))),
						a.call(n, r) ? n[r] = [].concat(n[r]).concat(s) : n[r] = s
					}
					return n
				},
				s = function (t, e, n) {
					if (!t.length)
						return e;
					var i,
					a = t.shift();
					if ("[]" === a)
						i = [], i = i.concat(s(t, e, n));
					else {
						i = n.plainObjects ? Object.create(null) : {};
						var o = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
						r = parseInt(o, 10);
						!isNaN(r) && a !== o && String(r) === o && r >= 0 && n.parseArrays && r <= n.arrayLimit ? (i = [], i[r] = s(t, e, n)) : i[o] = s(t, e, n)
					}
					return i
				},
				l = function (t, e, n) {
					if (t) {
						var i = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
						o = /(\[[^[\]]*])/,
						r = /(\[[^[\]]*])/g,
						l = o.exec(i),
						d = l ? i.slice(0, l.index) : i,
						u = [];
						if (d) {
							if (!n.plainObjects && a.call(Object.prototype, d) && !n.allowPrototypes)
								return;
							u.push(d)
						}
						for (var h = 0; null !== (l = r.exec(i)) && h < n.depth; ) {
							if (h += 1, !n.plainObjects && a.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
								return;
							u.push(l[1])
						}
						return l && u.push("[" + i.slice(l.index) + "]"),
						s(u, e, n)
					}
				};
				e.exports = function (t, e) {
					var n = e || {};
					if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)
						throw new TypeError("Decoder has to be a function.");
					if (n.delimiter = "string" == typeof n.delimiter || i.isRegExp(n.delimiter) ? n.delimiter : o.delimiter, n.depth = "number" == typeof n.depth ? n.depth : o.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : o.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder : o.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : o.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : o.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : o.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : o.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : o.strictNullHandling, "" === t || null === t || void 0 === t)
						return n.plainObjects ? Object.create(null) : {};
					for (var a = "string" == typeof t ? r(t, n) : t, s = n.plainObjects ? Object.create(null) : {}, d = Object.keys(a), u = 0; u < d.length; ++u) {
						var h = d[u],
						c = l(h, a[h], n);
						s = i.merge(s, c, n)
					}
					return i.compact(s)
				}
			}, {
				"./utils": 52
			}
		],
		51: [function (t, e, n) {
				"use strict";
				var i = t("./utils"),
				a = t("./formats"),
				o = {
					brackets: function (t) {
						return t + "[]"
					},
					indices: function (t, e) {
						return t + "[" + e + "]"
					},
					repeat: function (t) {
						return t
					}
				},
				r = Date.prototype.toISOString,
				s = {
					delimiter: "&",
					encode: !0,
					encoder: i.encode,
					encodeValuesOnly: !1,
					serializeDate: function (t) {
						return r.call(t)
					},
					skipNulls: !1,
					strictNullHandling: !1
				},
				l = function t(e, n, a, o, r, s, l, d, u, h, c, m) {
					var f = e;
					if ("function" == typeof l)
						f = l(n, f);
					else if (f instanceof Date)
						f = h(f);
					else if (null === f) {
						if (o)
							return s && !m ? s(n) : n;
						f = ""
					}
					if ("string" == typeof f || "number" == typeof f || "boolean" == typeof f || i.isBuffer(f)) {
						if (s) {
							return [c(m ? n : s(n)) + "=" + c(s(f))]
						}
						return [c(n) + "=" + c(String(f))]
					}
					var p = [];
					if (void 0 === f)
						return p;
					var g;
					if (Array.isArray(l))
						g = l;
					else {
						var _ = Object.keys(f);
						g = d ? _.sort(d) : _
					}
					for (var y = 0; y < g.length; ++y) {
						var v = g[y];
						r && null === f[v] || (p = Array.isArray(f) ? p.concat(t(f[v], a(n, v), a, o, r, s, l, d, u, h, c, m)) : p.concat(t(f[v], n + (u ? "." + v : "[" + v + "]"), a, o, r, s, l, d, u, h, c, m)))
					}
					return p
				};
				e.exports = function (t, e) {
					var n = t,
					i = e || {};
					if (null !== i.encoder && void 0 !== i.encoder && "function" != typeof i.encoder)
						throw new TypeError("Encoder has to be a function.");
					var r = void 0 === i.delimiter ? s.delimiter : i.delimiter,
					d = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : s.strictNullHandling,
					u = "boolean" == typeof i.skipNulls ? i.skipNulls : s.skipNulls,
					h = "boolean" == typeof i.encode ? i.encode : s.encode,
					c = "function" == typeof i.encoder ? i.encoder : s.encoder,
					m = "function" == typeof i.sort ? i.sort : null,
					f = void 0 !== i.allowDots && i.allowDots,
					p = "function" == typeof i.serializeDate ? i.serializeDate : s.serializeDate,
					g = "boolean" == typeof i.encodeValuesOnly ? i.encodeValuesOnly : s.encodeValuesOnly;
					if (void 0 === i.format)
						i.format = a.default;
							else if (!Object.prototype.hasOwnProperty.call(a.formatters, i.format))
								throw new TypeError("Unknown format option provided.");
							var _, y, v = a.formatters[i.format];
							"function" == typeof i.filter ? (y = i.filter, n = y("", n)):
							Array.isArray(i.filter) && (y = i.filter, _ = y);
					var w = [];
					if ("object" != typeof n || null === n)
						return "";
					var b;
					b = i.arrayFormat in o ? i.arrayFormat : "indices" in i ? i.indices ? "indices" : "repeat" : "indices";
					var k = o[b];
					_ || (_ = Object.keys(n)),
					m && _.sort(m);
					for (var x = 0; x < _.length; ++x) {
						var L = _[x];
						u && null === n[L] || (w = w.concat(l(n[L], L, k, d, u, h ? c : null, y, m, f, p, v, g)))
					}
					return w.join(r)
				}
			}, {
				"./formats" : 48,
				"./utils": 52
			}
		],
		52: [function (t, e, n) {
				"use strict";
				var i = Object.prototype.hasOwnProperty,
				a = function () {
					for (var t = [], e = 0; e < 256; ++e)
						t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
					return t
				}
				();
				n.arrayToObject = function (t, e) {
					for (var n = e && e.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i)
						void 0 !== t[i] && (n[i] = t[i]);
					return n
				},
				n.merge = function (t, e, a) {
					if (!e)
						return t;
					if ("object" != typeof e) {
						if (Array.isArray(t))
							t.push(e);
						else {
							if ("object" != typeof t)
								return [t, e];
							(a.plainObjects || a.allowPrototypes || !i.call(Object.prototype, e)) && (t[e] = !0)
						}
						return t
					}
					if ("object" != typeof t)
						return [t].concat(e);
					var o = t;
					return Array.isArray(t) && !Array.isArray(e) && (o = n.arrayToObject(t, a)),
					Array.isArray(t) && Array.isArray(e) ? (e.forEach(function (e, o) {
							i.call(t, o) ? t[o] && "object" == typeof t[o] ? t[o] = n.merge(t[o], e, a) : t.push(e) : t[o] = e
						}), t) : Object.keys(e).reduce(function (t, i) {
						var o = e[i];
						return Object.prototype.hasOwnProperty.call(t, i) ? t[i] = n.merge(t[i], o, a) : t[i] = o,
						t
					}, o)
				},
				n.decode = function (t) {
					try {
						return decodeURIComponent(t.replace(/\+/g, " "))
					} catch (e) {
						return t
					}
				},
				n.encode = function (t) {
					if (0 === t.length)
						return t;
					for (var e = "string" == typeof t ? t : String(t), n = "", i = 0; i < e.length; ++i) {
						var o = e.charCodeAt(i);
						45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? n += e.charAt(i) : o < 128 ? n += a[o] : o < 2048 ? n += a[192 | o >> 6] + a[128 | 63 & o] : o < 55296 || o >= 57344 ? n += a[224 | o >> 12] + a[128 | o >> 6 & 63] + a[128 | 63 & o] : (i += 1, o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(i)), n += a[240 | o >> 18] + a[128 | o >> 12 & 63] + a[128 | o >> 6 & 63] + a[128 | 63 & o])
					}
					return n
				},
				n.compact = function (t, e) {
					if ("object" != typeof t || null === t)
						return t;
					var i = e || [],
					a = i.indexOf(t);
					if (-1 !== a)
						return i[a];
					if (i.push(t), Array.isArray(t)) {
						for (var o = [], r = 0; r < t.length; ++r)
							t[r] && "object" == typeof t[r] ? o.push(n.compact(t[r], i)) : void 0 !== t[r] && o.push(t[r]);
						return o
					}
					return Object.keys(t).forEach(function (e) {
						t[e] = n.compact(t[e], i)
					}),
					t
				},
				n.isRegExp = function (t) {
					return "[object RegExp]" === Object.prototype.toString.call(t)
				},
				n.isBuffer = function (t) {
					return null !== t && void 0 !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
				}
			}, {}
		],
		53: [function (t, e, n) {
				"use strict";
				var i = t("leaflet"),
				a = function (t, e) {
					var n = i.DomUtil.create("div", function () {
							return 0 === t ? "osrm-directions-origin" : t === e - 1 ? "osrm-directions-destination" : "osrm-directions-via"
						}
							()),
					a = i.DomUtil.create("label", "osrm-form-label", n),
					o = i.DomUtil.create("input", "", n),
					r = i.DomUtil.create("span", "osrm-directions-icon osrm-close-icon", n),
					s = String.fromCharCode(65 + t);
					return i.DomUtil.create("div", "leaflet-osrm-geocoder-label", a).innerHTML = s, {
						container: n,
						input: o,
						closeButton: r
					}
				};
				e.exports = a
			}, {
				leaflet: 31
			}
		],
		54: [function (t, e, n) {
				"use strict";
				function i(t, e) {
					var n = ["images/marker-start-icon-2x.png", "images/marker-end-icon-2x.png"];
					return 0 === t ? o.icon({
						iconUrl: n[0],
						iconSize: [20, 56],
						iconAnchor: [10, 28]
					}) : t === e - 1 ? o.icon({
						iconUrl: n[1],
						iconSize: [20, 56],
						iconAnchor: [10, 28]
					}) : o.icon({
						iconUrl: "images/marker-via-icon-2x.png",
						iconSize: [20, 56],
						iconAnchor: [10, 28]
					})
				}
				function a(t) {
					var e = T.getWaypoints().filter(function (t) {
							return t.latLng
						});
					e = e.length,
					e ? (1 === e && (e += 1), T.spliceWaypoints(e - 1, 1, t)) : T.spliceWaypoints(0, 1, t)
				}
				var o = t("leaflet"),
				r = t("leaflet-control-geocoder"),
				s = (t("leaflet-routing-machine"), t("leaflet.locatecontrol"), t("./lrm_options")),
				l = t("./links"),
				d = t("./leaflet_options"),
				u = t("local-storage"),
				h = t("./tools"),
				c = t("./state"),
				m = t("./localization");
				t("./polyfill");
				var f = l.parse(window.location.search.slice(1)),
				p = o.extend(d.defaultState, f),
				g = m.get(p.language),
				_ = t("./itinerary_builder")(p.language),
				y = d.layer,
				v = d.overlay,
				w = u.get("layer") ? y[0][u.get("layer")] : y[0]["Mapbox Streets"],
				b = u.get("getOverlay") && [w, v["Small Components"]] || w,
				k = o.map("map", {
						zoomControl: !0,
						dragging: !0,
						layers: b,
						maxZoom: 18
					}).setView(p.center, p.zoom);
				y = y.reduce(function (t, e) {
						return t[e.label] = o.tileLayer(e.tileLayer, {
								id: e.label
							}),
						t
					}),
				o.control.layers(y, v, {
					position: "bottomleft"
				}).addTo(k),
				o.control.scale().addTo(k),
				k.on("baselayerchange", function (t) {
					u.set("layer", t.name)
				}),
				k.on("overlayadd", function (t) {
					u.set("getOverlay", !0)
				}),
				k.on("overlayremove", function (t) {
					u.set("getOverlay", !1)
				});
				var x = o.Routing.Plan.extend({
						createGeocoders: function () {
							return o.Routing.Plan.prototype.createGeocoders.call(this)
						}
					}),
				L = new x([], {
						geocoder: r.nominatim(),
						routeWhileDragging: !0,
						createMarker: function (t, e, n) {
							var a = {
								draggable: this.draggableWaypoints,
								icon: i(t, n)
							},
							r = o.marker(e.latLng, a);
							return r.on("click", function () {
								L.spliceWaypoints(t, 1)
							}),
							r
						},
						routeDragInterval: s.lrm.routeDragInterval,
						addWaypoints: !0,
						waypointMode: "snap",
						position: "topright",
						useZoomParameter: s.lrm.useZoomParameter,
						reverseWaypoints: !0,
						dragStyles: s.lrm.dragStyles,
						geocodersClassName: s.lrm.geocodersClassName,
						geocoderPlaceholder: function (t, e) {
							var n = [g["Start - press enter to drop marker"], g["End - press enter to drop marker"]],
							i = [g["Via point - press enter to drop marker"]];
							return 0 === t ? n[0] : t === e - 1 ? n[1] : i
						}
					});
				o.extend(o.Routing, _);
				var P = {
					plan: L,
					routeWhileDragging: s.lrm.routeWhileDragging,
					lineOptions: s.lrm.lineOptions,
					altLineOptions: s.lrm.altLineOptions,
					summaryTemplate: s.lrm.summaryTemplate,
					containerClassName: s.lrm.containerClassName,
					alternativeClassName: s.lrm.alternativeClassName,
					stepClassName: s.lrm.stepClassName,
					language: "en",
					showAlternatives: s.lrm.showAlternatives,
					units: p.units,
					serviceUrl: d.services[0].path,
					useZoomParameter: s.lrm.useZoomParameter,
					routeDragInterval: s.lrm.routeDragInterval,
					collapsible: s.lrm.collapsible
				},
				C = new o.Routing.OSRMv1(P);
				C._convertRouteOriginal = C._convertRoute,
				C._convertRoute = function (t) {
					var e = this._convertRouteOriginal(t);
					if (e.instructions && e.instructions.length) {
						var n = 0;
						t.legs.forEach(function (t) {
							t.steps.forEach(function (t) {
								e.instructions[n].text = t,
								n++
							})
						})
					}
					return e
				};
				var T = o.Routing.control(Object.assign(P, {
							router: C
						})).addTo(k),
				D = h.control(m.get(p.language), m.getLanguages(), s.tools).addTo(k),
				c = c(k, T, D, p);
				L.on("waypointgeocoded", function (t) {
					L._waypoints.filter(function (t) {
						return !!t.latLng
					}).length < 2 && k.panTo(t.waypoint.latLng)
				}),
				k.on("click", function (t) {
					a(t.latlng)
				}),
				T.on("alternateChosen", function (t) {
					var e = document.querySelectorAll(".leaflet-routing-alt");
					"none" != e[0].style.display ? (e[0].style.display = "none", e[1].style.display = "block") : (e[0].style.display = "block", e[1].style.display = "none")
				}),
				o.control.locate({
					follow: !1,
					setView: !0,
					remainActive: !1,
					keepCurrentZoomLevel: !0,
					stopFollowingOnDrag: !1,
					onLocationError: function (t) {
						alert(t.message)
					},
					onLocationOutsideMapBounds: function (t) {
						alert(t.options.strings.outsideMapBoundsMsg)
					},
					showPopup: !1,
					locateOptions: {}
				}).addTo(k)
			}, {
				"./itinerary_builder": 55,
				"./leaflet_options": 56,
				"./links": 57,
				"./localization": 58,
				"./lrm_options": 59,
				"./polyfill": 60,
				"./state": 61,
				"./tools": 62,
				leaflet: 31,
				"leaflet-control-geocoder": 14,
				"leaflet-routing-machine": 18,
				"leaflet.locatecontrol": 30,
				"local-storage": 32
			}
		],
		55: [function (t, e, n) {
				"use strict";
				var i = t("leaflet");
				e.exports = function (e) {
					function n(t) {
						try {
							return r.compile(e, t)
						} catch (e) {
							return void console.log("Error when compiling text instruction", e, t)
						}
					}
					function a(t) {
						var e = t.intersections[0].lanes;
						if (!e)
							return [];
						var n = t.maneuver.modifier || "";
						return e.map(function (t, a) {
							var o = ["leaflet-routing-icon", "lanes"];
							t.valid || o.push(["invalid"]);
							var r = t.indications.indexOf(n);
							-1 === r && ("none" !== t.indications[0] && "" !== t.indications[0] || !("straight" === n || 0 === a && "left" === n.slice(-4) || a === e.length - 1 && "right" === n.slice(-5)) ? "slight " === n.slice(0, 7) && (r = t.indications.indexOf(n.slice(7))) : r = 0);
							var s,
							l = -1 === r ? t.indications[0] : n;
							switch (l) {
							case "right":
								s = "turn-right";
								break;
							case "sharp right":
								s = "sharp-right";
								break;
							case "slight right":
								s = "bear-right";
								break;
							case "left":
								s = "turn-left";
								break;
							case "sharp left":
								s = "sharp-left";
								break;
							case "slight left":
								s = "bear-left";
								break;
							case "uturn":
								s = "u-turn";
								break;
							default:
								s = "continue"
							}
							o.push("leaflet-routing-icon-" + s);
							var d = i.DomUtil.create("span", o.join(" "));
							return -1 === r && i.DomUtil.setOpacity(d, .5),
							d
						})
					}
					var o = {
						hooks: {
							tokenizedInstruction: function (t) {
								return t.replace(/\{(\w+):?\w*\}/g, function (t, e) {
									switch (e) {
									case "way_name":
									case "rotary_name":
									case "destination":
										return "<b>" + t + "</b>"
									}
									return t
								})
							}
						}
					},
					r = t("osrm-text-instructions")("v5", e, o);
					return i.Routing = i.Routing || {},
					i.Routing.ItineraryBuilder = i.Class.extend({
							options: {
								containerClassName: ""
							},
							initialize: function (t) {
								i.setOptions(this, t)
							},
							createContainer: function (t) {
								var e = i.DomUtil.create("table", t || ""),
								n = i.DomUtil.create("colgroup", "", e);
								return i.DomUtil.create("col", "leaflet-routing-instruction-icon", n),
								i.DomUtil.create("col", "leaflet-routing-instruction-text", n),
								i.DomUtil.create("col", "leaflet-routing-instruction-distance", n),
								e
							},
							createStepsContainer: function () {
								return i.DomUtil.create("tbody", "")
							},
							createStep: function (t, e, o, r) {
								var s,
								l,
								d = i.DomUtil.create("tr", "", r);
								l = i.DomUtil.create("td", "", d),
								s = i.DomUtil.create("span", "leaflet-routing-icon leaflet-routing-icon-" + o, l),
								l.appendChild(s),
								l = i.DomUtil.create("td", "", d),
								l.innerHTML = n(t);
								var u = a(t);
								return u && (l.appendChild(document.createElement("br")), u.forEach(function (t) {
										l.appendChild(t)
									})),
								"0 " !== e.slice(0, 2) && (l = i.DomUtil.create("td", "distance", d), l.appendChild(document.createTextNode(e))),
								d
							}
						}),
					i.Routing
				}
			}, {
				leaflet: 31,
				"osrm-text-instructions": 35
			}
		],
		56: [function (t, e, n) {
				"use strict";
				var i = t("leaflet"),
				a = i.tileLayer("https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg", {
						attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>'
					}),
				o = i.tileLayer("https://api.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg", {
						attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>'
					}),
				r = i.tileLayer("https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg", {
						attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>'
					}),
				s = i.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
						attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
					}),
				l = i.tileLayer("https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png", {
						attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
					}),
        w = i.tileLayer("https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png", {
						attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenCycleMap</a> contributors'
					}),
				d = i.tileLayer("https://d6a1v2w10ny40.cloudfront.net/v0.1/{z}/{x}/{y}.png", {});
				//d = i.tileLayer("https://tools.geofabrik.de/osmi/tiles/routing_i/{z}/{x}/{y}.png", {});
				e.exports = {
					defaultState: {
						center: i.latLng(45.4215, -75.6972),
						zoom: 13,
						waypoints: [],
						language: "en",
						alternative: 0,
						layer: a
					},
					services: [{
							label: "Car (fastest)",
							path: "https://router.project-osrm.org/route/v1"
						}
					],
					layer: [{
							"Mapbox Streets": a,
							"Mapbox Outdoors": o,
							"Mapbox Streets Satellite": r,
							"openstreetmap.org": s,
							"openstreetmap.de.org": l,
              "opencyclemap.org": w
						}
					],
					overlay: {
						"Mapillary": d
					},
					baselayer: {
						one: a,
						two: o,
						three: r,
						four: s,
						five: l,
            six: w
					}
				}
			}, {
				leaflet: 31
			}
		],
		57: [function (t, e, n) {
				"use strict";
				function i(t) {
					if (t)
						return t.lat.toFixed(6) + "," + t.lng.toFixed(6)
				}
				function a(t) {
					var e = t.split(","),
					n = parseFloat(e[0]),
					i = parseFloat(e[1]);
					if (isNaN(n) || isNaN(i))
						throw {
							name: "InvalidCoords",
							message: '"' + t + '" is not a valid coordinate.'
						};
					return l.latLng(n, i)
				}
				function o(t) {
					var e = parseInt(t, 10);
					if (isNaN(e))
						throw {
							name: "InvalidInt",
							message: '"' + t + '" is not a valid integer.'
						};
					return e
				}
				function r(t) {
					return d.stringify({
						z: t.zoom,
						center: t.center ? i(t.center) : void 0,
						loc: t.waypoints ? t.waypoints.filter(function (t) {
							return void 0 !== t.latLng
						}).map(function (t) {
							return t.latLng
						}).map(i) : void 0,
						hl: t.language,
						alt: t.alternative,
						df: t.units,
						srv: t.service
					}, {
						indices: !1
					})
				}
				function s(t) {
					if (!t)
						return {};
					var e,
					n = d.parse(t),
					i = {},
					r = {};
					try {
						void 0 !== n.z && null !== n.z && (i.zoom = o(n.z)),
						i.center = n.center && a(n.center),
						i.waypoints = n.loc && n.loc.filter(function (t) {
								return "" != t
							}).map(a).map(function (t) {
								return l.Routing.waypoint(t)
							}),
						i.language = n.hl,
						i.alternative = n.alt,
						i.units = n.df,
						i.layer = n.ly,
						i.service = n.srv
					} catch (t) {
						console.log("Exception " + t.name + ": " + t.message)
					}
					for (e in i)
						void 0 !== i[e] && "" !== i[e] && (r[e] = i[e]);
					return r
				}
				var l = t("leaflet"),
				d = t("qs");
				t("jsonp");
				e.exports = {
					parse: s,
					format: r
				}
			}, {
				jsonp: 10,
				leaflet: 31,
				qs: 49
			}
		],
		58: [function (t, e, n) {
				"use strict";
				var i = {
					en: t("../i18n/en"),
					de: t("../i18n/de"),
					es: t("../i18n/es"),
					fr: t("../i18n/fr"),
					ru: t("../i18n/ru"),
					sv: t("../i18n/sv"),
					vi: t("../i18n/vi"),
					"zh-Hans": t("../i18n/zh-Hans")
				};
				e.exports = {
					getLanguages: function () {
						var t = {};
						for (var e in i)
							t[e] = i[e].name;
						return t
					},
					get: function (t) {
						return i[t]
					}
				}
			}, {
				"../i18n/de": 1,
				"../i18n/en": 2,
				"../i18n/es": 3,
				"../i18n/fr": 4,
				"../i18n/ru": 5,
				"../i18n/sv": 6,
				"../i18n/vi": 7,
				"../i18n/zh-Hans": 8
			}
		],
		59: [function (t, e, n) {
				"use strict";
				var i = (t("./leaflet_options"), t("./geocoder"));
				e.exports = {
					lrm: {
						lineOptions: {
							styles: [{
									color: "#022bb1",
									opacity: .8,
									weight: 8
								}, {
									color: "white",
									opacity: .3,
									weight: 6
								}
							]
						},
						altLineOptions: {
							styles: [{
									color: "#40007d",
									opacity: .4,
									weight: 8
								}, {
									color: "black",
									opacity: .5,
									weight: 2,
									dashArray: "2,4"
								}, {
									color: "white",
									opacity: .3,
									weight: 6
								}
							]
						},
						dragStyles: [{
								color: "black",
								opacity: .35,
								weight: 9
							}, {
								color: "white",
								opacity: .8,
								weight: 7
							}
						],
						routeWhileDragging: !0,
						summaryTemplate: '<div class="osrm-directions-summary"><h2>{name}</h2><h3>{distance}, {time}</h3></div>',
						containerClassName: "dark pad2",
						alternativeClassName: "osrm-directions-instructions",
						stepClassName: "osrm-directions-step",
						geocodersClassName: "osrm-directions-inputs",
						createGeocoder: i,
						showAlternatives: !0,
						useZoomParameter: !1,
						routeDragInterval: 200,
						collapsible: !0
					},
					popup: {
						removeButtonClass: "osrm-directions-icon osrm-close-light-icon",
						uturnButtonClass: "osrm-directions-icon osrm-u-turn-icon"
					},
					tools: {
						popupWindowClass: "fill-osrm dark",
						popupCloseButtonClass: "osrm-directions-icon osrm-close-icon",
						editorButtonClass: "osrm-directions-icon osrm-editor-icon",
						josmButtonClass: "osrm-directions-icon osrm-josm-icon",
						debugButtonClass: "osrm-directions-icon osrm-debug-icon",
						mapillaryButtonClass: "osrm-directions-icon osrm-mapillary-icon",
						localizationChooserClass: "osrm-localization-chooser",
						printButtonClass: "osrm-directions-icon osrm-printer-icon",
						toolsContainerClass: "fill-osrm dark",
						position: "bottomleft"
					}
				}
			}, {
				"./geocoder": 53,
				"./leaflet_options": 56
			}
		],
		60: [function (t, e, n) {
				"function" != typeof Object.assign && (Object.assign = function (t) {
					"use strict";
					if (null == t)
						throw new TypeError("Cannot convert undefined or null to object");
					t = Object(t);
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						if (null != n)
							for (var i in n)
								Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
					}
					return t
				})
			}, {}
		],
		61: [function (t, e, n) {
				"use strict";
				var i = t("leaflet"),
				a = t("./links"),
				o = i.Class.extend({
						options: {},
						initialize: function (t, e, n, i) {
							this._lrm = e,
							this._map = t,
							this._tools = n,
							this.set(i),
							this._lrm.on("routeselected", function (t) {
								this.options.alternative = t.route.routesIndex
							}, this),
							this._lrm.getPlan().on("waypointschanged", function () {
								this.options.waypoints = this._lrm.getWaypoints(),
								this.update()
							}
								.bind(this)),
							this._map.on("zoomend", function () {
								this.options.zoom = this._map.getZoom(),
								this.update()
							}
								.bind(this)),
							this._map.on("moveend", function () {
								this.options.center = this._map.getCenter(),
								this.update()
							}
								.bind(this)),
							this._tools.on("languagechanged", function (t) {
								this.options.language = t.language,
								this.reload()
							}
								.bind(this)),
							this._tools.on("unitschanged", function (t) {
								this.options.units = t.unit,
								this.update()
							}
								.bind(this))
						},
						get: function () {
							return this.options
						},
						set: function (t) {
							i.setOptions(this, t),
							this._lrm.setWaypoints(this.options.waypoints),
							this._map.setView(this.options.center, this.options.zoom)
						},
						reload: function () {
							this.update(),
							window.location.reload()
						},
						update: function () {
							var t = window.location.href.split("?")[0],
							e = a.format(this.options),
							n = t.concat("?").concat(e);
							window.location.hash = e,
							history.replaceState({}, "Project OSRM Demo", n)
						}
					});
				e.exports = function (t, e, n, i) {
					return new o(t, e, n, i)
				}
			}, {
				"./links": 57,
				leaflet: 31
			}
		],
		62: [function (t, e, n) {
				"use strict";
				var i = t("leaflet"),
				a = i.Control.extend({
						includes: i.Mixin.Events,
						options: {
							toolContainerClass: "",
							editorButtonClass: "",
							josmButtonClass: "",
							debugButtonClass: "",
							mapillaryButtonClass: "",
							localizationChooserClass: ""
						},
						initialize: function (t, e, n) {
							i.setOptions(this, n),
							this._local = t,
							this._languages = e
						},
						onAdd: function (t) {
							var e,
							n,
							a,
							o,
							r,
							s,
							l,
							d;
							return this._container = i.DomUtil.create("div", "leaflet-osrm-tools-container " + this.options.toolsContainerClass),
							i.DomEvent.disableClickPropagation(this._container),
							e = i.DomUtil.create("div", "leaflet-osrm-tools-editor", this._container),
							n = i.DomUtil.create("span", this.options.editorButtonClass, e),
							n.title = this._local["Open in editor"],
							i.DomEvent.on(n, "click", this._openEditor, this),
							a = i.DomUtil.create("div", "leaflet-osrm-tools-josm", this._container),
							o = i.DomUtil.create("span", this.options.josmButtonClass, a),
							o.title = this._local["Open in JOSM"],
							i.DomEvent.on(o, "click", this._openJOSM, this),
							r = i.DomUtil.create("div", "leaflet-osrm-tools-debug", this._container),
							s = i.DomUtil.create("span", this.options.debugButtonClass, r),
							s.title = this._local["Open in Debug Map"],
							i.DomEvent.on(s, "click", this._openDebug, this),
							l = i.DomUtil.create("div", "leaflet-osrm-tools-mapillary", this._container),
							d = i.DomUtil.create("span", this.options.mapillaryButtonClass, l),
							d.title = this._local["Open in Mapillary"],
							i.DomEvent.on(d, "click", this._openMapillary, this),
							this._localizationContainer = i.DomUtil.create("div", "leaflet-osrm-tools-localization", this._container),
							this._createLocalizationList(this._localizationContainer),
							this._container
						},
						onRemove: function () {},
						_openEditor: function () {
							var t = this._map.getCenter(),
							e = this._map.getZoom();
							window.open("https://www.openstreetmap.org/edit?lat=" + t.lat.toFixed(6) + "&lon=" + t.lng.toFixed(6) + "&zoom=" + e)
						},
						_openJOSM: function () {
							var t = this._map.getBounds(),
							e = "http://127.0.0.1:8111/load_and_zoom?left=" + t.getWest() + "&right=" + t.getEast() + "&bottom=" + t.getSouth() + "&top=" + t.getNorth();
							window.open(e)
						},
						_openDebug: function () {
							var t = this._map.getCenter(),
							e = this._map.getZoom();
							window.open("https://map.project-osrm.org/debug/#" + e + "/" + t.lat.toFixed(6) + "/" + t.lng.toFixed(6))
						},
						_openMapillary: function () {
							var t = this._map.getCenter(),
							e = this._map.getZoom();
							window.open("https://www.mapillary.com/app/?lat=" + t.lat.toFixed(6) + "&lng=" + t.lng.toFixed(6) + "&z=" + e)
						},
						_updatePopupPosition: function (t) {
							var e = this._container.getBoundingClientRect(),
							n = 0;
							t && (n = t.getBoundingClientRect().left - e.left),
							this._popupWindow.style.position = "absolute",
							this._popupWindow.style.left = n + "px",
							this._popupWindow.style.bottom = e.height + "px"
						},
						_createLocalizationList: function (t) {
							var e = this,
							n = i.DomUtil.create("select", e.options.localizationChooserClass, t);
							n.setAttribute("title", e._local["Select language"]),
							i.DomEvent.on(n, "change", function (t) {
								this.fire("languagechanged", {
									language: t.target.value
								})
							}, e),
							Object.keys(this._languages).forEach(function (t) {
								var a = i.DomUtil.create("option", "fill-osrm", n);
								a.setAttribute("value", t),
								a.appendChild(document.createTextNode(e._languages[t])),
								t == e._local.key && a.setAttribute("selected", "")
							})
						}
					});
				e.exports = {
					control: function (t, e, n) {
						return new a(t, e, n)
					}
				}
			}, {
				leaflet: 31
			}
		]
	}, {}, [54])(54)
});
//# sourceMappingURL=bundle.js.map
