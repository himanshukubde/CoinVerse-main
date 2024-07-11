import React from 'react';

const Dashboard = () => {
	return (

		<div>


			<div className="content-body">
				<div className="container-fluid" style={{ minHeight: 723 }}>
					<div className="row">
						<div className="col-xl-12">
							<div className="row main-card">
								<div className="swiper swiper-initialized swiper-horizontal mySwiper-counter position-relative overflow-hidden swiper-backface-hidden">
									<div className="swiper-wrapper">
										<div
											className="swiper-slide swiper-slide-active"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-secondary">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$65,123</h2>
													</div>
													<div className="dlab-swiper-circle">
														<svg
															width={50}
															height={45}
															viewBox="0 0 137 137"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M68.5 0C30.6686 0 0 30.6686 0 68.5C0 106.331 30.6686 137 68.5 137C106.331 137 137 106.331 137 68.5C136.958 30.6865 106.313 0.0418093 68.5 0ZM40.213 63.6068H59.7843C62.4869 63.6068 64.6774 65.7973 64.6774 68.5C64.6774 71.2027 62.4869 73.3932 59.7843 73.3932H40.213C37.5104 73.3932 35.3199 71.2027 35.3199 68.5C35.3199 65.7973 37.5119 63.6068 40.213 63.6068ZM101.393 56.6456L95.5088 86.0883C94.1231 92.9226 88.122 97.8411 81.1488 97.8576H40.213C37.5104 97.8576 35.3199 95.6671 35.3199 92.9644C35.3199 90.2617 37.5119 88.0712 40.213 88.0712H81.1488C83.4617 88.0652 85.4522 86.4347 85.9121 84.168L91.7982 54.7253C92.3208 52.0973 90.6156 49.544 87.9891 49.0214C87.677 48.9601 87.3605 48.9288 87.0439 48.9288H49.9994C47.2967 48.9288 45.1062 46.7383 45.1062 44.0356C45.1062 41.3329 47.2967 39.1424 49.9994 39.1424H87.0439C95.128 39.1454 101.679 45.699 101.677 53.7831C101.677 54.7433 101.582 55.7019 101.393 56.6456Z"
																fill="#FFF"
															/>
														</svg>
													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexchartsxj0bfwy9"
																className="apexcharts-canvas apexchartsxj0bfwy9 apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>
																{/* <svg
																	id="SvgjsSvg1903"
																	width={500}
																	height={70}
																	xmlns="http://www.w3.org/2000/svg"
																	version="1.1"
																	xmlnsXlink="http://www.w3.org/1999/xlink"
																	xmlns:svgjs="http://svgjs.dev"
																	
																
																	transform="translate(0, 0)"
																	style={{ background: "transparent" }}
																>
																	<foreignObject x={0} y={0} width={500} height={70}>
																		<div
																			className="apexcharts-legend"
																			xmlns="http://www.w3.org/1999/xhtml"
																			style={{ maxHeight: 35 }}
																		/>
																	</foreignObject>
																	<g
																		id="SvgjsG1936"
																		className="apexcharts-yaxis"
																		rel={0}
																		transform="translate(-18, 0)"
																	/>
																	<g
																		id="SvgjsG1905"
																		className="apexcharts-inner apexcharts-graphical"
																		transform="translate(-1, 3)"
																	>
																		<defs id="SvgjsDefs1904">
																			<clipPath id="gridRectMaskxj0bfwy9">
																				<rect
																					id="SvgjsRect1907"
																					width={511}
																					height={74}
																					x={-5}
																					y={-5}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																			<clipPath id="forecastMaskxj0bfwy9" />
																			<clipPath id="nonForecastMaskxj0bfwy9" />
																			<clipPath id="gridRectMarkerMaskxj0bfwy9">
																				<rect
																					id="SvgjsRect1908"
																					width={505}
																					height={68}
																					x={-2}
																					y={-2}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																		</defs>
																		<g id="SvgjsG1914" className="apexcharts-grid">
																			<g
																				id="SvgjsG1915"
																				className="apexcharts-gridlines-horizontal"
																				style={{ display: "none" }}
																			>
																				<line
																					id="SvgjsLine1918"
																					x1={0}
																					y1={0}
																					x2={501}
																					y2={0}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																				<line
																					id="SvgjsLine1919"
																					x1={0}
																					y1={64}
																					x2={501}
																					y2={64}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																			</g>
																			<g
																				id="SvgjsG1916"
																				className="apexcharts-gridlines-vertical"
																				style={{ display: "none" }}
																			/>
																			<line
																				id="SvgjsLine1921"
																				x1={0}
																				y1={64}
																				x2={501}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																			<line
																				id="SvgjsLine1920"
																				x1={0}
																				y1={1}
																				x2={0}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																		</g>
																		<g
																			id="SvgjsG1917"
																			className="apexcharts-grid-borders"
																			style={{ display: "none" }}
																		/>
																		<g
																			id="SvgjsG1909"
																			className="apexcharts-line-series apexcharts-plot-series"
																		>
																			<g
																				id="SvgjsG1910"
																				className="apexcharts-series"
																		
																				
																			
																				rel={1}
																				data:realindex={0}
																			>
																				<path
																					id="SvgjsPath1913"
																					d="M 0 36.57142857142857C 19.483333333333334 36.57142857142857 36.18333333333334 16.457142857142856 55.66666666666667 16.457142857142856C 75.15 16.457142857142856 91.85000000000001 64 111.33333333333334 64C 130.81666666666666 64 147.51666666666668 27.428571428571423 167 27.428571428571423C 186.48333333333335 27.428571428571423 203.18333333333334 64 222.66666666666669 64C 242.15000000000003 64 258.85 18.285714285714285 278.33333333333337 18.285714285714285C 297.8166666666667 18.285714285714285 314.51666666666665 54.857142857142854 334 54.857142857142854C 353.48333333333335 54.857142857142854 370.18333333333334 36.57142857142857 389.6666666666667 36.57142857142857C 409.15000000000003 36.57142857142857 425.85 54.857142857142854 445.33333333333337 54.857142857142854C 464.8166666666667 54.857142857142854 481.51666666666665 0 501 0M 501 0"
																					fill="none"
																					fillOpacity={1}
																					stroke="rgba(163, 199, 241, 1) "
																					strokeOpacity={1}
																					strokeLinecap="butt"
																					strokeWidth={6}
																					strokeDasharray={0}
																					className="apexcharts-line"
																					index={0}
																					clipPath="url(#gridRectMaskxj0bfwy9)"
																					pathto="M 0 36.57142857142857C 19.483333333333334 36.57142857142857 36.18333333333334 16.457142857142856 55.66666666666667 16.457142857142856C 75.15 16.457142857142856 91.85000000000001 64 111.33333333333334 64C 130.81666666666666 64 147.51666666666668 27.428571428571423 167 27.428571428571423C 186.48333333333335 27.428571428571423 203.18333333333334 64 222.66666666666669 64C 242.15000000000003 64 258.85 18.285714285714285 278.33333333333337 18.285714285714285C 297.8166666666667 18.285714285714285 314.51666666666665 54.857142857142854 334 54.857142857142854C 353.48333333333335 54.857142857142854 370.18333333333334 36.57142857142857 389.6666666666667 36.57142857142857C 409.15000000000003 36.57142857142857 425.85 54.857142857142854 445.33333333333337 54.857142857142854C 464.8166666666667 54.857142857142854 481.51666666666665 0 501 0M 501 0"
																					pathfrom="M -1 73.14285714285714 L -1 73.14285714285714 L 55.66666666666667 73.14285714285714 L 111.33333333333334 73.14285714285714 L 167 73.14285714285714 L 222.66666666666669 73.14285714285714 L 278.33333333333337 73.14285714285714 L 334 73.14285714285714 L 389.6666666666667 73.14285714285714 L 445.33333333333337 73.14285714285714 L 501 73.14285714285714"
																					fillRule="evenodd"
																				/>
																				<g
																					id="SvgjsG1911"
																					className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
																					data:realindex={0}
																				/>
																			</g>
																			<g
																				id="SvgjsG1912"
																				className="apexcharts-datalabels"
																				data:realindex={0}
																			/>
																		</g>
																		<line
																			id="SvgjsLine1922"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			stroke="#b6b6b6"
																			strokeDasharray={0}
																			strokeWidth={1}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs"
																		/>
																		<line
																			id="SvgjsLine1923"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			strokeDasharray={0}
																			strokeWidth={0}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs-hidden"
																		/>
																		<g
																			id="SvgjsG1924"
																			className="apexcharts-xaxis"
																			transform="translate(0, 0)"
																		>
																			<g
																				id="SvgjsG1925"
																				className="apexcharts-xaxis-texts-g"
																				transform="translate(0, -4)"
																			/>
																		</g>
																		<g
																			id="SvgjsG1937"
																			className="apexcharts-yaxis-annotations"
																		/>
																		<g
																			id="SvgjsG1938"
																			className="apexcharts-xaxis-annotations"
																		/>
																		<g
																			id="SvgjsG1939"
																			className="apexcharts-point-annotations"
																		/>
																	</g>
																</svg> */}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide swiper-slide-next"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-pink">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$68,123</h2>
													</div>
													<div className="dlab-swiper-circle">
														<svg
															width={50}
															height={45}
															viewBox="0 0 137 137"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															
														</svg>
													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexcharts30m8sxph"
																className="apexcharts-canvas apexcharts30m8sxph apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>
																<svg
																	id="SvgjsSvg1940"
																	width={500}
																	height={70}
																	xmlns="http://www.w3.org/2000/svg"
																	transform="translate(0, 0)"
																	style={{ background: "transparent" }}
																>
																	<foreignObject x={0} y={0} width={500} height={70}>
																		<div
																			className="apexcharts-legend"
																			xmlns="http://www.w3.org/1999/xhtml"
																			style={{ maxHeight: 35 }}
																		/>
																	</foreignObject>


																	<defs id="SvgjsDefs1941">
																		<clipPath id="gridRectMask30m8sxph">
																			<rect
																				id="SvgjsRect1944"
																				width={511}
																				height={74}
																				x={-5}
																				y={-5}
																				rx={0}
																				ry={0}
																				opacity={1}
																				strokeWidth={0}
																				stroke="none"
																				strokeDasharray={0}
																				fill="#fff"
																			/>
																		</clipPath>
																		<clipPath id="forecastMask30m8sxph" />
																		<clipPath id="nonForecastMask30m8sxph" />
																		<clipPath id="gridRectMarkerMask30m8sxph">
																			<rect
																				id="SvgjsRect1945"
																				width={505}
																				height={68}
																				x={-2}
																				y={-2}
																				rx={0}
																				ry={0}
																				opacity={1}
																				strokeWidth={0}
																				stroke="none"
																				strokeDasharray={0}
																				fill="#fff"
																			/>
																		</clipPath>
																	</defs>



																


																	<line
																		id="SvgjsLine1959"
																		x1={0}
																		y1={0}
																		x2={501}
																		y2={0}
																		stroke="#b6b6b6"
																		strokeDasharray={0}
																		strokeWidth={1}
																		strokeLinecap="butt"
																		className="apexcharts-ycrosshairs"
																	/>
																	<line
																		id="SvgjsLine1960"
																		x1={0}
																		y1={0}
																		x2={501}
																		y2={0}
																		strokeDasharray={0}
																		strokeWidth={0}
																		strokeLinecap="butt"
																		className="apexcharts-ycrosshairs-hidden"
																	/>




																</svg>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-dark">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$66,123</h2>
													</div>
													<div className="dlab-swiper-circle">
														<svg
															width={50}
															height={45}
															viewBox="0 0 137 137"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															
														</svg>
													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexchartsa8p9rnb1"
																className="apexcharts-canvas apexchartsa8p9rnb1 apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>
																<svg
																	id="SvgjsSvg1977"
																	width={500}
																	height={70}
																	xmlns="http://www.w3.org/2000/svg"





																	transform="translate(0, 0)"
																	style={{ background: "transparent" }}
																>
																	<foreignObject x={0} y={0} width={500} height={70}>
																		<div
																			className="apexcharts-legend"
																			xmlns="http://www.w3.org/1999/xhtml"
																			style={{ maxHeight: 35 }}
																		/>
																	</foreignObject>
																	<g
																		id="SvgjsG2010"
																		className="apexcharts-yaxis"
																		rel={0}
																		transform="translate(-18, 0)"
																	/>
																	<g
																		id="SvgjsG1979"
																		className="apexcharts-inner apexcharts-graphical"
																		transform="translate(-1, 3)"
																	>
																		<defs id="SvgjsDefs1978">
																			<clipPath id="gridRectMaska8p9rnb1">
																				<rect
																					id="SvgjsRect1981"
																					width={511}
																					height={74}
																					x={-5}
																					y={-5}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																			<clipPath id="forecastMaska8p9rnb1" />
																			<clipPath id="nonForecastMaska8p9rnb1" />
																			<clipPath id="gridRectMarkerMaska8p9rnb1">
																				<rect
																					id="SvgjsRect1982"
																					width={505}
																					height={68}
																					x={-2}
																					y={-2}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																		</defs>
																		<g id="SvgjsG1988" className="apexcharts-grid">
																			<g
																				id="SvgjsG1989"
																				className="apexcharts-gridlines-horizontal"
																				style={{ display: "none" }}
																			>
																				<line
																					id="SvgjsLine1992"
																					x1={0}
																					y1={0}
																					x2={501}
																					y2={0}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																				<line
																					id="SvgjsLine1993"
																					x1={0}
																					y1={64}
																					x2={501}
																					y2={64}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																			</g>
																			<g
																				id="SvgjsG1990"
																				className="apexcharts-gridlines-vertical"
																				style={{ display: "none" }}
																			/>
																			<line
																				id="SvgjsLine1995"
																				x1={0}
																				y1={64}
																				x2={501}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																			<line
																				id="SvgjsLine1994"
																				x1={0}
																				y1={1}
																				x2={0}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																		</g>
																		
																		<line
																			id="SvgjsLine1996"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			stroke="#b6b6b6"
																			strokeDasharray={0}
																			strokeWidth={1}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs"
																		/>
																		<line
																			id="SvgjsLine1997"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			strokeDasharray={0}
																			strokeWidth={0}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs-hidden"
																		/>
																		<g
																			id="SvgjsG1998"
																			className="apexcharts-xaxis"
																			transform="translate(0, 0)"
																		>
																			<g
																				id="SvgjsG1999"
																				className="apexcharts-xaxis-texts-g"
																				transform="translate(0, -4)"
																			/>
																		</g>
																		<g
																			id="SvgjsG2011"
																			className="apexcharts-yaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2012"
																			className="apexcharts-xaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2013"
																			className="apexcharts-point-annotations"
																		/>
																	</g>
																</svg>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-warning">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$67,123</h2>
													</div>
													<div className="dlab-swiper-circle">
														<svg
															width={50}
															height={45}
															viewBox="0 0 137 137"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
														
														</svg>
													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexchartsei8n3kpv"
																className="apexcharts-canvas apexchartsei8n3kpv apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>
																<svg
																	id="SvgjsSvg2014"
																	width={500}
																	height={70}
																	xmlns="http://www.w3.org/2000/svg"
																	version="1.1"
																	
																	


																	transform="translate(0, 0)"
																	style={{ background: "transparent" }}
																>
																	<foreignObject x={0} y={0} width={500} height={70}>
																		<div
																			className="apexcharts-legend"
																			xmlns="http://www.w3.org/1999/xhtml"
																			style={{ maxHeight: 35 }}
																		/>
																	</foreignObject>
																	<g
																		id="SvgjsG2047"
																		className="apexcharts-yaxis"
																		rel={0}
																		transform="translate(-18, 0)"
																	/>
																	<g
																		id="SvgjsG2016"
																		className="apexcharts-inner apexcharts-graphical"
																		transform="translate(-1, 3)"
																	>
																		<defs id="SvgjsDefs2015">
																			<clipPath id="gridRectMaskei8n3kpv">
																				<rect
																					id="SvgjsRect2018"
																					width={511}
																					height={74}
																					x={-5}
																					y={-5}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																			<clipPath id="forecastMaskei8n3kpv" />
																			<clipPath id="nonForecastMaskei8n3kpv" />
																			<clipPath id="gridRectMarkerMaskei8n3kpv">
																				<rect
																					id="SvgjsRect2019"
																					width={505}
																					height={68}
																					x={-2}
																					y={-2}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																		</defs>
																		<g id="SvgjsG2025" className="apexcharts-grid">
																			<g
																				id="SvgjsG2026"
																				className="apexcharts-gridlines-horizontal"
																				style={{ display: "none" }}
																			>
																				<line
																					id="SvgjsLine2029"
																					x1={0}
																					y1={0}
																					x2={501}
																					y2={0}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																				<line
																					id="SvgjsLine2030"
																					x1={0}
																					y1={64}
																					x2={501}
																					y2={64}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																			</g>
																			<g
																				id="SvgjsG2027"
																				className="apexcharts-gridlines-vertical"
																				style={{ display: "none" }}
																			/>
																			<line
																				id="SvgjsLine2032"
																				x1={0}
																				y1={64}
																				x2={501}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																			<line
																				id="SvgjsLine2031"
																				x1={0}
																				y1={1}
																				x2={0}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																		</g>
																		<g
																			id="SvgjsG2028"
																			className="apexcharts-grid-borders"
																			style={{ display: "none" }}
																		/>
																		<g
																			id="SvgjsG2020"
																			className="apexcharts-line-series apexcharts-plot-series"
																		>
																			<g
																				id="SvgjsG2021"
																				className="apexcharts-series"



																				rel={1}
																				data:realindex={0}
																			>
																				
																				<g
																					id="SvgjsG2022"
																					className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
																					data:realindex={0}
																				/>
																			</g>
																			<g
																				id="SvgjsG2023"
																				className="apexcharts-datalabels"
																				data:realindex={0}
																			/>
																		</g>
																		<line
																			id="SvgjsLine2033"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			stroke="#b6b6b6"
																			strokeDasharray={0}
																			strokeWidth={1}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs"
																		/>
																		<line
																			id="SvgjsLine2034"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			strokeDasharray={0}
																			strokeWidth={0}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs-hidden"
																		/>
																		<g
																			id="SvgjsG2035"
																			className="apexcharts-xaxis"
																			transform="translate(0, 0)"
																		>
																			<g
																				id="SvgjsG2036"
																				className="apexcharts-xaxis-texts-g"
																				transform="translate(0, -4)"
																			/>
																		</g>
																		<g
																			id="SvgjsG2048"
																			className="apexcharts-yaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2049"
																			className="apexcharts-xaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2050"
																			className="apexcharts-point-annotations"
																		/>
																	</g>
																</svg>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-pink">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$68,123</h2>
													</div>
													<div className="dlab-swiper-circle">
														<svg
															width={50}
															height={45}
															viewBox="0 0 137 137"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															
														</svg>
													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexcharts73sn7z2v"
																className="apexcharts-canvas apexcharts73sn7z2v apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>
																<svg
																	id="SvgjsSvg2051"
																	width={500}
																	height={70}
																	xmlns="http://www.w3.org/2000/svg"
																	version="1.1"
																	
																	


																	transform="translate(0, 0)"
																	style={{ background: "transparent" }}
																>
																	<foreignObject x={0} y={0} width={500} height={70}>
																		<div
																			className="apexcharts-legend"
																			xmlns="http://www.w3.org/1999/xhtml"
																			style={{ maxHeight: 35 }}
																		/>
																	</foreignObject>
																	<g
																		id="SvgjsG2084"
																		className="apexcharts-yaxis"
																		rel={0}
																		transform="translate(-18, 0)"
																	/>
																	<g
																		id="SvgjsG2053"
																		className="apexcharts-inner apexcharts-graphical"
																		transform="translate(-1, 3)"
																	>
																		<defs id="SvgjsDefs2052">
																			<clipPath id="gridRectMask73sn7z2v">
																				<rect
																					id="SvgjsRect2055"
																					width={511}
																					height={74}
																					x={-5}
																					y={-5}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																			<clipPath id="forecastMask73sn7z2v" />
																			<clipPath id="nonForecastMask73sn7z2v" />
																			<clipPath id="gridRectMarkerMask73sn7z2v">
																				<rect
																					id="SvgjsRect2056"
																					width={505}
																					height={68}
																					x={-2}
																					y={-2}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																		</defs>
																		<g id="SvgjsG2062" className="apexcharts-grid">
																			<g
																				id="SvgjsG2063"
																				className="apexcharts-gridlines-horizontal"
																				style={{ display: "none" }}
																			>
																				<line
																					id="SvgjsLine2066"
																					x1={0}
																					y1={0}
																					x2={501}
																					y2={0}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																				<line
																					id="SvgjsLine2067"
																					x1={0}
																					y1={64}
																					x2={501}
																					y2={64}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																			</g>
																			<g
																				id="SvgjsG2064"
																				className="apexcharts-gridlines-vertical"
																				style={{ display: "none" }}
																			/>
																			<line
																				id="SvgjsLine2069"
																				x1={0}
																				y1={64}
																				x2={501}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																			<line
																				id="SvgjsLine2068"
																				x1={0}
																				y1={1}
																				x2={0}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																		</g>
																		<g
																			id="SvgjsG2065"
																			className="apexcharts-grid-borders"
																			style={{ display: "none" }}
																		/>
																		<g
																			id="SvgjsG2057"
																			className="apexcharts-line-series apexcharts-plot-series"
																		>
																			<g
																				id="SvgjsG2058"
																				className="apexcharts-series"



																				rel={1}
																				data:realindex={0}
																			>
																				
																				<g
																					id="SvgjsG2059"
																					className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
																					data:realindex={0}
																				/>
																			</g>
																			<g
																				id="SvgjsG2060"
																				className="apexcharts-datalabels"
																				data:realindex={0}
																			/>
																		</g>
																		<line
																			id="SvgjsLine2070"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			stroke="#b6b6b6"
																			strokeDasharray={0}
																			strokeWidth={1}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs"
																		/>
																		<line
																			id="SvgjsLine2071"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			strokeDasharray={0}
																			strokeWidth={0}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs-hidden"
																		/>
																		<g
																			id="SvgjsG2072"
																			className="apexcharts-xaxis"
																			transform="translate(0, 0)"
																		>
																			<g
																				id="SvgjsG2073"
																				className="apexcharts-xaxis-texts-g"
																				transform="translate(0, -4)"
																			/>
																		</g>
																		<g
																			id="SvgjsG2085"
																			className="apexcharts-yaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2086"
																			className="apexcharts-xaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2087"
																			className="apexcharts-point-annotations"
																		/>
																	</g>
																</svg>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-warning">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$67,123</h2>
													</div>
													<div className="dlab-swiper-circle">
														<svg
															width={50}
															height={45}
															viewBox="0 0 137 137"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															
															
														</svg>
													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexcharts9jbdml7d"
																className="apexcharts-canvas apexcharts9jbdml7d apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>
																<svg
																	id="SvgjsSvg2088"
																	width={500}
																	height={70}
																	xmlns="http://www.w3.org/2000/svg"
																	version="1.1"
																	
																	


																	transform="translate(0, 0)"
																	style={{ background: "transparent" }}
																>
																	<foreignObject x={0} y={0} width={500} height={70}>
																		<div
																			className="apexcharts-legend"
																			xmlns="http://www.w3.org/1999/xhtml"
																			style={{ maxHeight: 35 }}
																		/>
																	</foreignObject>
																	<g
																		id="SvgjsG2121"
																		className="apexcharts-yaxis"
																		rel={0}
																		transform="translate(-18, 0)"
																	/>
																	<g
																		id="SvgjsG2090"
																		className="apexcharts-inner apexcharts-graphical"
																		transform="translate(-1, 3)"
																	>
																		<defs id="SvgjsDefs2089">
																			<clipPath id="gridRectMask9jbdml7d">
																				<rect
																					id="SvgjsRect2092"
																					width={511}
																					height={74}
																					x={-5}
																					y={-5}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																			<clipPath id="forecastMask9jbdml7d" />
																			<clipPath id="nonForecastMask9jbdml7d" />
																			<clipPath id="gridRectMarkerMask9jbdml7d">
																				<rect
																					id="SvgjsRect2093"
																					width={505}
																					height={68}
																					x={-2}
																					y={-2}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																		</defs>
																		<g id="SvgjsG2099" className="apexcharts-grid">
																			<g
																				id="SvgjsG2100"
																				className="apexcharts-gridlines-horizontal"
																				style={{ display: "none" }}
																			>
																				<line
																					id="SvgjsLine2103"
																					x1={0}
																					y1={0}
																					x2={501}
																					y2={0}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																				<line
																					id="SvgjsLine2104"
																					x1={0}
																					y1={64}
																					x2={501}
																					y2={64}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																			</g>
																			<g
																				id="SvgjsG2101"
																				className="apexcharts-gridlines-vertical"
																				style={{ display: "none" }}
																			/>
																			<line
																				id="SvgjsLine2106"
																				x1={0}
																				y1={64}
																				x2={501}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																			<line
																				id="SvgjsLine2105"
																				x1={0}
																				y1={1}
																				x2={0}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																		</g>
																		<g
																			id="SvgjsG2102"
																			className="apexcharts-grid-borders"
																			style={{ display: "none" }}
																		/>
																		<g
																			id="SvgjsG2094"
																			className="apexcharts-line-series apexcharts-plot-series"
																		>
																			<g
																				id="SvgjsG2095"
																				className="apexcharts-series"



																				rel={1}
																				data:realindex={0}
																			>
																				
																				<g
																					id="SvgjsG2096"
																					className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
																					data:realindex={0}
																				/>
																			</g>
																			<g
																				id="SvgjsG2097"
																				className="apexcharts-datalabels"
																				data:realindex={0}
																			/>
																		</g>
																		<line
																			id="SvgjsLine2107"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			stroke="#b6b6b6"
																			strokeDasharray={0}
																			strokeWidth={1}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs"
																		/>
																		<line
																			id="SvgjsLine2108"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			strokeDasharray={0}
																			strokeWidth={0}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs-hidden"
																		/>
																		<g
																			id="SvgjsG2109"
																			className="apexcharts-xaxis"
																			transform="translate(0, 0)"
																		>
																			<g
																				id="SvgjsG2110"
																				className="apexcharts-xaxis-texts-g"
																				transform="translate(0, -4)"
																			/>
																		</g>
																		<g
																			id="SvgjsG2122"
																			className="apexcharts-yaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2123"
																			className="apexcharts-xaxis-annotations"
																		/>
																		<g
																			id="SvgjsG2124"
																			className="apexcharts-point-annotations"
																		/>
																	</g>
																</svg>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-6">
									<div className="card crypto-chart">
										<div className="card-header pb-0 border-0 flex-wrap">
											<div className="mb-0">
												<h4 className="card-title">Crypto Statistics</h4>
												<p>Lorem ipsum dolor sit amet, consectetur</p>
											</div>
											<div className="d-flex mb-2">
												<div className="form-check form-switch toggle-switch me-3">
													<label
														className="form-check-label"
														htmlFor="flexSwitchCheckChecked1"
													>
														Date
													</label>
													<input
														className="form-check-input custome"
														type="checkbox"
														id="flexSwitchCheckChecked1"
														defaultChecked=""
													/>
												</div>
												<div className="form-check form-switch toggle-switch">
													<label
														className="form-check-label"
														htmlFor="flexSwitchCheckChecked2"
													>
														Value
													</label>
													<input
														className="form-check-input custome"
														type="checkbox"
														id="flexSwitchCheckChecked2"
														defaultChecked=""
													/>
												</div>
											</div>
										</div>
										<div className="card-body pt-2">
											<ul className="nav nav-pills nav" role="tablist">
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Ripple"
														id="react-aria9411038436-:r9:-tab-Ripple"
														aria-controls="react-aria9411038436-:r9:-tabpane-Ripple"
														aria-selected="true"
														className="nav-link active"
														tabIndex={0}
														href="#"
													>
														Ripple
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Bitcoin"
														id="react-aria9411038436-:r9:-tab-Bitcoin"
														aria-controls="react-aria9411038436-:r9:-tabpane-Bitcoin"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														Bitcoin
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Ethereum"
														id="react-aria9411038436-:r9:-tab-Ethereum"
														aria-controls="react-aria9411038436-:r9:-tabpane-Ethereum"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														Ethereum
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Zcash"
														id="react-aria9411038436-:r9:-tab-Zcash"
														aria-controls="react-aria9411038436-:r9:-tabpane-Zcash"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														Zcash
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="LiteCoin"
														id="react-aria9411038436-:r9:-tab-LiteCoin"
														aria-controls="react-aria9411038436-:r9:-tabpane-LiteCoin"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														LiteCoin
													</a>
												</li>
											</ul>
											<div id="marketChart">
												<div
													options="[object Object]"
													series="[object Object],[object Object]"
													type="line"
													height={300}
													width="100%"
													style={{ minHeight: 315 }}
												>
													<div
														id="apexcharts6pm8jonsg"
														className="apexcharts-canvas apexcharts6pm8jonsg apexcharts-theme-light"
														style={{ width: 459, height: 300 }}
													>
														<svg
															id="SvgjsSvg2127"
															width={459}
															height={300}
															xmlns="http://www.w3.org/2000/svg"
															version="1.1"
															
															className="apexcharts-svg apexcharts-zoomable"

															transform="translate(0, 0)"
															style={{ background: "transparent" }}
														>
															<foreignObject x={0} y={0} width={459} height={300}>
																<div
																	className="apexcharts-legend"
																	xmlns="http://www.w3.org/1999/xhtml"
																	style={{ maxHeight: 150 }}
																/>
															</foreignObject>
															<rect
																id="SvgjsRect2131"
																width={0}
																height={0}
																x={0}
																y={0}
																rx={0}
																ry={0}
																opacity={1}
																strokeWidth={0}
																stroke="none"
																strokeDasharray={0}
																fill="#fefefe"
															/>
															<g
																id="SvgjsG2204"
																className="apexcharts-yaxis"
																rel={0}
																transform="translate(-18, 0)"
															/>
															<g
																id="SvgjsG2129"
																className="apexcharts-inner apexcharts-graphical"
																transform="translate(12, 30)"
															>
																<defs id="SvgjsDefs2128">
																	<clipPath id="gridRectMask6pm8jonsg">
																		<rect
																			id="SvgjsRect2133"
																			width="434.830078125"
																			height="242.348"
																			x={-5}
																			y={-5}
																			rx={0}
																			ry={0}
																			opacity={1}
																			strokeWidth={0}
																			stroke="none"
																			strokeDasharray={0}
																			fill="#fff"
																		/>
																	</clipPath>
																	<clipPath id="forecastMask6pm8jonsg" />
																	<clipPath id="nonForecastMask6pm8jonsg" />
																	<clipPath id="gridRectMarkerMask6pm8jonsg">
																		<rect
																			id="SvgjsRect2134"
																			width="428.830078125"
																			height="236.348"
																			x={-2}
																			y={-2}
																			rx={0}
																			ry={0}
																			opacity={1}
																			strokeWidth={0}
																			stroke="none"
																			strokeDasharray={0}
																			fill="#fff"
																		/>
																	</clipPath>
																</defs>
																<line
																	id="SvgjsLine2132"
																	x1={0}
																	y1={0}
																	x2={0}
																	y2="232.348"
																	stroke="#b6b6b6"
																	strokeDasharray={3}
																	strokeLinecap="butt"
																	className="apexcharts-xcrosshairs"
																	x={0}
																	y={0}
																	width={1}
																	height="232.348"
																	fill="#b1b9c4"
																	filter="none"
																	fillOpacity="0.9"
																	strokeWidth={1}
																/>
																<line
																	id="SvgjsLine2149"
																	x1={0}
																	y1="233.348"
																	x2={0}
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2151"
																	x1="47.203342013888886"
																	y1="233.348"
																	x2="47.203342013888886"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2153"
																	x1="94.40668402777777"
																	y1="233.348"
																	x2="94.40668402777777"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2155"
																	x1="141.61002604166666"
																	y1="233.348"
																	x2="141.61002604166666"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2157"
																	x1="188.81336805555554"
																	y1="233.348"
																	x2="188.81336805555554"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2159"
																	x1="236.01671006944443"
																	y1="233.348"
																	x2="236.01671006944443"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2161"
																	x1="283.2200520833333"
																	y1="233.348"
																	x2="283.2200520833333"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2163"
																	x1="330.4233940972222"
																	y1="233.348"
																	x2="330.4233940972222"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2165"
																	x1="377.6267361111111"
																	y1="233.348"
																	x2="377.6267361111111"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2167"
																	x1="424.830078125"
																	y1="233.348"
																	x2="424.830078125"
																	y2="239.348"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<g id="SvgjsG2144" className="apexcharts-grid">
																	<g
																		id="SvgjsG2145"
																		className="apexcharts-gridlines-horizontal"
																	/>
																	<g
																		id="SvgjsG2146"
																		className="apexcharts-gridlines-vertical"
																	>
																		<line
																			id="SvgjsLine2148"
																			x1={0}
																			y1={0}
																			x2={0}
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2150"
																			x1="47.203342013888886"
																			y1={0}
																			x2="47.203342013888886"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2152"
																			x1="94.40668402777777"
																			y1={0}
																			x2="94.40668402777777"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2154"
																			x1="141.61002604166666"
																			y1={0}
																			x2="141.61002604166666"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2156"
																			x1="188.81336805555554"
																			y1={0}
																			x2="188.81336805555554"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2158"
																			x1="236.01671006944443"
																			y1={0}
																			x2="236.01671006944443"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2160"
																			x1="283.2200520833333"
																			y1={0}
																			x2="283.2200520833333"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2162"
																			x1="330.4233940972222"
																			y1={0}
																			x2="330.4233940972222"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2164"
																			x1="377.6267361111111"
																			y1={0}
																			x2="377.6267361111111"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2166"
																			x1="424.830078125"
																			y1={0}
																			x2="424.830078125"
																			y2="232.348"
																			stroke="var(--border)"
																			strokeDasharray={6}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																	</g>
																	<line
																		id="SvgjsLine2169"
																		x1={0}
																		y1="232.348"
																		x2="424.830078125"
																		y2="232.348"
																		stroke="transparent"
																		strokeDasharray={0}
																		strokeLinecap="butt"
																	/>
																	<line
																		id="SvgjsLine2168"
																		x1={0}
																		y1={1}
																		x2={0}
																		y2="232.348"
																		stroke="transparent"
																		strokeDasharray={0}
																		strokeLinecap="butt"
																	/>
																</g>
																<g
																	id="SvgjsG2147"
																	className="apexcharts-grid-borders"
																/>
																<g
																	id="SvgjsG2135"
																	className="apexcharts-line-series apexcharts-plot-series"
																>
																	<g
																		id="SvgjsG2136"
																		className="apexcharts-series"

																		seriesname="1xETH"

																		rel={1}
																		data:realindex={0}
																	>
																		
																		<g
																			id="SvgjsG2137"
																			className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
																			data:realindex={0}
																		>
																			<g className="apexcharts-series-markers">
																				<circle
																					id="SvgjsCircle2208"
																					r={0}
																					cx={0}
																					cy={0}
																					className="apexcharts-marker w1w1vlxa no-pointer-events"
																					stroke="#ffffff"
																					fill="var(--primary)"
																					fillOpacity={1}
																					strokeWidth={5}
																					strokeOpacity="0.9"
																					default-marker-size={0}
																				/>
																			</g>
																		</g>
																	</g>
																	<g
																		id="SvgjsG2140"
																		className="apexcharts-series"
																		zindex={1}
																		seriesname="1xXRP"

																		rel={2}
																		data:realindex={1}
																	>
																		
																		<g
																			id="SvgjsG2141"
																			className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
																			data:realindex={1}
																		>
																			<g className="apexcharts-series-markers">
																				<circle
																					id="SvgjsCircle2209"
																					r={0}
																					cx={0}
																					cy={0}
																					className="apexcharts-marker w69jff2ad no-pointer-events"
																					stroke="#ffffff"
																					fill="var(--secondary)"
																					fillOpacity={1}
																					strokeWidth={5}
																					strokeOpacity="0.9"
																					default-marker-size={0}
																				/>
																			</g>
																		</g>
																	</g>
																	<g
																		id="SvgjsG2138"
																		className="apexcharts-datalabels"
																		data:realindex={0}
																	/>
																	<g
																		id="SvgjsG2142"
																		className="apexcharts-datalabels"
																		data:realindex={1}
																	/>
																</g>
																<line
																	id="SvgjsLine2170"
																	x1={0}
																	y1={0}
																	x2="424.830078125"
																	y2={0}
																	stroke="#b6b6b6"
																	strokeDasharray={0}
																	strokeWidth={1}
																	strokeLinecap="butt"
																	className="apexcharts-ycrosshairs"
																/>
																<line
																	id="SvgjsLine2171"
																	x1={0}
																	y1={0}
																	x2="424.830078125"
																	y2={0}
																	strokeDasharray={0}
																	strokeWidth={0}
																	strokeLinecap="butt"
																	className="apexcharts-ycrosshairs-hidden"
																/>
																<g
																	id="SvgjsG2172"
																	className="apexcharts-xaxis"
																	transform="translate(0, 0)"
																>
																	<g
																		id="SvgjsG2173"
																		className="apexcharts-xaxis-texts-g"
																		transform="translate(0, -4)"
																	>
																		<text
																			id="SvgjsText2175"
																			fontFamily="Poppins"
																			x={0}
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2176">Jan</tspan>
																			<title>Jan</title>
																		</text>
																		<text
																			id="SvgjsText2178"
																			fontFamily="Poppins"
																			x="47.203342013888886"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2179">Feb</tspan>
																			<title>Feb</title>
																		</text>
																		<text
																			id="SvgjsText2181"
																			fontFamily="Poppins"
																			x="94.40668402777777"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2182">Mar</tspan>
																			<title>Mar</title>
																		</text>
																		<text
																			id="SvgjsText2184"
																			fontFamily="Poppins"
																			x="141.61002604166663"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2185">Apr</tspan>
																			<title>Apr</title>
																		</text>
																		<text
																			id="SvgjsText2187"
																			fontFamily="Poppins"
																			x="188.81336805555554"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2188">jun</tspan>
																			<title>jun</title>
																		</text>
																		<text
																			id="SvgjsText2190"
																			fontFamily="Poppins"
																			x="236.0167100694444"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2191">Jul</tspan>
																			<title>Jul</title>
																		</text>
																		<text
																			id="SvgjsText2193"
																			fontFamily="Poppins"
																			x="283.22005208333326"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2194">Aug</tspan>
																			<title>Aug</title>
																		</text>
																		<text
																			id="SvgjsText2196"
																			fontFamily="Poppins"
																			x="330.4233940972222"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2197">Sep</tspan>
																			<title>Sep</title>
																		</text>
																		<text
																			id="SvgjsText2199"
																			fontFamily="Poppins"
																			x="377.6267361111111"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2200">Oct</tspan>
																			<title>Oct</title>
																		</text>
																		<text
																			id="SvgjsText2202"
																			fontFamily="Poppins"
																			x="424.830078125"
																			y="261.348"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#b5b5c3"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{ fontFamily: "Poppins" }}
																		>
																			<tspan id="SvgjsTspan2203">Nov</tspan>
																			<title>Nov</title>
																		</text>
																	</g>
																</g>
																<g
																	id="SvgjsG2205"
																	className="apexcharts-yaxis-annotations"
																/>
																<g
																	id="SvgjsG2206"
																	className="apexcharts-xaxis-annotations"
																/>
																<g
																	id="SvgjsG2207"
																	className="apexcharts-point-annotations"
																/>
																<rect
																	id="SvgjsRect2210"
																	width={0}
																	height={0}
																	x={0}
																	y={0}
																	rx={0}
																	ry={0}
																	opacity={1}
																	strokeWidth={0}
																	stroke="none"
																	strokeDasharray={0}
																	fill="#fefefe"
																	className="apexcharts-zoom-rect"
																/>
																<rect
																	id="SvgjsRect2211"
																	width={0}
																	height={0}
																	x={0}
																	y={0}
																	rx={0}
																	ry={0}
																	opacity={1}
																	strokeWidth={0}
																	stroke="none"
																	strokeDasharray={0}
																	fill="#fefefe"
																	className="apexcharts-selection-rect"
																/>
															</g>
														</svg>
														<div className="apexcharts-tooltip apexcharts-theme-light">
															<div
																className="apexcharts-tooltip-title"
																style={{
																	fontFamily: "Helvetica, Arial, sans-serif",
																	fontSize: 12
																}}
															/>
															<div
																className="apexcharts-tooltip-series-group"
																style={{ order: 1 }}
															>
																<span
																	className="apexcharts-tooltip-marker"
																	style={{ backgroundColor: "var(--primary)" }}
																/>
																<div
																	className="apexcharts-tooltip-text"
																	style={{
																		fontFamily: "Helvetica, Arial, sans-serif",
																		fontSize: 12
																	}}
																>
																	<div className="apexcharts-tooltip-y-group">
																		<span className="apexcharts-tooltip-text-y-label" />
																		<span className="apexcharts-tooltip-text-y-value" />
																	</div>
																	<div className="apexcharts-tooltip-goals-group">
																		<span className="apexcharts-tooltip-text-goals-label" />
																		<span className="apexcharts-tooltip-text-goals-value" />
																	</div>
																	<div className="apexcharts-tooltip-z-group">
																		<span className="apexcharts-tooltip-text-z-label" />
																		<span className="apexcharts-tooltip-text-z-value" />
																	</div>
																</div>
															</div>
															<div
																className="apexcharts-tooltip-series-group"
																style={{ order: 2 }}
															>
																<span
																	className="apexcharts-tooltip-marker"
																	style={{ backgroundColor: "var(--secondary)" }}
																/>
																<div
																	className="apexcharts-tooltip-text"
																	style={{
																		fontFamily: "Helvetica, Arial, sans-serif",
																		fontSize: 12
																	}}
																>
																	<div className="apexcharts-tooltip-y-group">
																		<span className="apexcharts-tooltip-text-y-label" />
																		<span className="apexcharts-tooltip-text-y-value" />
																	</div>
																	<div className="apexcharts-tooltip-goals-group">
																		<span className="apexcharts-tooltip-text-goals-label" />
																		<span className="apexcharts-tooltip-text-goals-value" />
																	</div>
																	<div className="apexcharts-tooltip-z-group">
																		<span className="apexcharts-tooltip-text-z-label" />
																		<span className="apexcharts-tooltip-text-z-value" />
																	</div>
																</div>
															</div>
														</div>
														<div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
															<div className="apexcharts-yaxistooltip-text" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="card market-chart">
										<div className="card-header border-0 pb-0 flex-wrap">
											<div className="mb-0">
												<h4 className="card-title">Market Overview</h4>
												<p>Lorem ipsum dolor sit amet, consectetur</p>
											</div>
											<a
												className="btn-link text-primary get-report mb-2"
												href="/vite/demo/dashboard"
											>
												<svg
													className="me-2"
													width={16}
													height={16}
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													
												</svg>
												Get Report
											</a>
										</div>
										<div className="card-body pt-2">
											<div className="d-flex justify-content-between flex-wrap">
												<div className="d-flex align-items-center mb-2">
													<h5 className="me-2 font-w600 m-0">
														<span className="text-success me-2">BUY</span> $5,673
													</h5>
													<h5 className="ms-2 font-w600 m-0">
														<span className="text-danger me-2">SELL</span> $5,982
													</h5>
												</div>
												<ul
													className="nav nav-pills justify-content-between mb-2 nav"
													role="tablist"
												>
													<li className="nav-item nav-item">
														<a
															role="tab"
															data-rr-ui-event-key="Week"
															id="react-aria9411038436-:ra:-tab-Week"
															aria-controls="react-aria9411038436-:ra:-tabpane-Week"
															aria-selected="true"
															className="nav-link active"
															tabIndex={0}
															href="#"
														>
															Week
														</a>
													</li>
													<li className="nav-item nav-item">
														<a
															role="tab"
															data-rr-ui-event-key="Month"
															id="react-aria9411038436-:ra:-tab-Month"
															aria-controls="react-aria9411038436-:ra:-tabpane-Month"
															aria-selected="false"
															tabIndex={-1}
															className="nav-link"
															href="#"
														>
															Month
														</a>
													</li>
													<li className="nav-item nav-item">
														<a
															role="tab"
															data-rr-ui-event-key="Year"
															id="react-aria9411038436-:ra:-tab-Year"
															aria-controls="react-aria9411038436-:ra:-tabpane-Year"
															aria-selected="false"
															tabIndex={-1}
															className="nav-link"
															href="#"
														>
															Year
														</a>
													</li>
												</ul>
											</div>
											<div id="marketChart2" className="market-line">
												<div
													options="[object Object]"
													series="[object Object]"
													type="candlestick"
													height={280}
													width="100%"
													style={{ minHeight: 295 }}
												>
													<div
														id="apexchartsv4w56c37"
														className="apexcharts-canvas apexchartsv4w56c37 apexcharts-theme-light"
														style={{ width: 465, height: 280 }}
													>
														<svg
															id="SvgjsSvg2212"
															width={465}
															height={280}
															xmlns="http://www.w3.org/2000/svg"
															version="1.1"
															
															
															className="apexcharts-svg apexcharts-zoomable"

															transform="translate(0, 0)"
															style={{ background: "transparent" }}
														>
															<foreignObject x={0} y={0} width={465} height={280}>
																<div
																	className="apexcharts-legend"
																	xmlns="http://www.w3.org/1999/xhtml"
																	style={{ maxHeight: 140 }}
																/>
															</foreignObject>
															<text
																id="SvgjsText2215"
																fontFamily="Helvetica, Arial, sans-serif"
																x={10}
																y="16.5"
																textAnchor="start"
																dominantBaseline="auto"
																fontSize="14px"
																fontWeight={900}
																fill="#373d3f"
																className="apexcharts-title-text"
																style={{
																	fontFamily: "Helvetica, Arial, sans-serif",
																	opacity: 1
																}}
															/>
															<rect
																id="SvgjsRect2221"
																width={0}
																height={0}
																x={0}
																y={0}
																rx={0}
																ry={0}
																opacity={1}
																strokeWidth={0}
																stroke="none"
																strokeDasharray={0}
																fill="#fefefe"
															/>
															<g
																id="SvgjsG2380"
																className="apexcharts-yaxis"
																rel={0}
																transform="translate(433.234375, 0)"
															>
																<g
																	id="SvgjsG2381"
																	className="apexcharts-yaxis-texts-g"
																>
																	<text
																		id="SvgjsText2383"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y={37}
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2384">6660.00</tspan>
																		<title>6660.00</title>
																	</text>
																	<text
																		id="SvgjsText2386"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="58.32"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2387">6650.00</tspan>
																		<title>6650.00</title>
																	</text>
																	<text
																		id="SvgjsText2389"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="79.64"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2390">6640.00</tspan>
																		<title>6640.00</title>
																	</text>
																	<text
																		id="SvgjsText2392"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="100.96000000000001"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2393">6630.00</tspan>
																		<title>6630.00</title>
																	</text>
																	<text
																		id="SvgjsText2395"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="122.28"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2396">6620.00</tspan>
																		<title>6620.00</title>
																	</text>
																	<text
																		id="SvgjsText2398"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="143.6"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2399">6610.00</tspan>
																		<title>6610.00</title>
																	</text>
																	<text
																		id="SvgjsText2401"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="164.92"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2402">6600.00</tspan>
																		<title>6600.00</title>
																	</text>
																	<text
																		id="SvgjsText2404"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="186.23999999999998"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2405">6590.00</tspan>
																		<title>6590.00</title>
																	</text>
																	<text
																		id="SvgjsText2407"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="207.55999999999997"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2408">6580.00</tspan>
																		<title>6580.00</title>
																	</text>
																	<text
																		id="SvgjsText2410"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="228.87999999999997"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2411">6570.00</tspan>
																		<title>6570.00</title>
																	</text>
																	<text
																		id="SvgjsText2413"
																		fontFamily="Helvetica, Arial, sans-serif"
																		x={-20}
																		y="250.19999999999996"
																		textAnchor="start"
																		dominantBaseline="auto"
																		fontSize="11px"
																		fontWeight={400}
																		fill="#373d3f"
																		className="apexcharts-text apexcharts-yaxis-label "
																		style={{
																			fontFamily: "Helvetica, Arial, sans-serif"
																		}}
																	>
																		<tspan id="SvgjsTspan2414">6560.00</tspan>
																		<title>6560.00</title>
																	</text>
																</g>
															</g>
															<g
																id="SvgjsG2214"
																className="apexcharts-inner apexcharts-graphical"
																transform="translate(22.60617055084746, 35)"
															>
																<defs id="SvgjsDefs2213">
																	<clipPath id="gridRectMaskv4w56c37">
																		<rect
																			id="SvgjsRect2254"
																			width="406.0220338983051"
																			height="218.2"
																			x="-14.5"
																			y="-2.5"
																			rx={0}
																			ry={0}
																			opacity={1}
																			strokeWidth={0}
																			stroke="none"
																			strokeDasharray={0}
																			fill="#fff"
																		/>
																	</clipPath>
																	<clipPath id="forecastMaskv4w56c37" />
																	<clipPath id="nonForecastMaskv4w56c37" />
																	<clipPath id="gridRectMarkerMaskv4w56c37">
																		<rect
																			id="SvgjsRect2255"
																			width="383.0220338983051"
																			height="217.2"
																			x={-2}
																			y={-2}
																			rx={0}
																			ry={0}
																			opacity={1}
																			strokeWidth={0}
																			stroke="none"
																			strokeDasharray={0}
																			fill="#fff"
																		/>
																	</clipPath>
																</defs>
																<line
																	id="SvgjsLine2222"
																	x1={0}
																	y1={0}
																	x2={0}
																	y2="184.7069091796875"
																	stroke="#b6b6b6"
																	strokeDasharray={3}
																	strokeLinecap="butt"
																	className="apexcharts-xcrosshairs"
																	x={0}
																	y={0}
																	width={1}
																	height="184.7069091796875"
																	fill="#b1b9c4"
																	filter="none"
																	fillOpacity="0.9"
																	strokeWidth={1}
																/>
																<line
																	id="SvgjsLine2323"
																	x1="44.96871588623958"
																	y1="214.2"
																	x2="44.96871588623958"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2324"
																	x1="83.51332950301637"
																	y1="214.2"
																	x2="83.51332950301637"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2325"
																	x1="122.05794311979317"
																	y1="214.2"
																	x2="122.05794311979317"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2326"
																	x1="160.60255673656994"
																	y1="214.2"
																	x2="160.60255673656994"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2327"
																	x1="199.1471703533467"
																	y1="214.2"
																	x2="199.1471703533467"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2328"
																	x1="237.69178397012345"
																	y1="214.2"
																	x2="237.69178397012345"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2329"
																	x1="276.23639758690024"
																	y1="214.2"
																	x2="276.23639758690024"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2330"
																	x1="314.781011203677"
																	y1="214.2"
																	x2="314.781011203677"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<line
																	id="SvgjsLine2331"
																	x1="353.32562482045375"
																	y1="214.2"
																	x2="353.32562482045375"
																	y2="220.2"
																	stroke="#e0e0e0"
																	strokeDasharray={0}
																	strokeLinecap="butt"
																	className="apexcharts-xaxis-tick"
																/>
																<g id="SvgjsG2319" className="apexcharts-grid">
																	<g
																		id="SvgjsG2320"
																		className="apexcharts-gridlines-horizontal"
																		style={{ display: "none" }}
																	>
																		<line
																			id="SvgjsLine2332"
																			x1="-4.606170550847457"
																			y1={0}
																			x2="383.6282044491526"
																			y2={0}
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2333"
																			x1="-4.606170550847457"
																			y1="21.32"
																			x2="383.6282044491526"
																			y2="21.32"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2334"
																			x1="-4.606170550847457"
																			y1="42.64"
																			x2="383.6282044491526"
																			y2="42.64"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2335"
																			x1="-4.606170550847457"
																			y1="63.96"
																			x2="383.6282044491526"
																			y2="63.96"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2336"
																			x1="-4.606170550847457"
																			y1="85.28"
																			x2="383.6282044491526"
																			y2="85.28"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2337"
																			x1="-4.606170550847457"
																			y1="106.6"
																			x2="383.6282044491526"
																			y2="106.6"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2338"
																			x1="-4.606170550847457"
																			y1="127.91999999999999"
																			x2="383.6282044491526"
																			y2="127.91999999999999"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2339"
																			x1="-4.606170550847457"
																			y1="149.23999999999998"
																			x2="383.6282044491526"
																			y2="149.23999999999998"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2340"
																			x1="-4.606170550847457"
																			y1="170.55999999999997"
																			x2="383.6282044491526"
																			y2="170.55999999999997"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2341"
																			x1="-4.606170550847457"
																			y1="191.87999999999997"
																			x2="383.6282044491526"
																			y2="191.87999999999997"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																		<line
																			id="SvgjsLine2342"
																			x1="-4.606170550847457"
																			y1="213.19999999999996"
																			x2="383.6282044491526"
																			y2="213.19999999999996"
																			stroke="#e0e0e0"
																			strokeDasharray={0}
																			strokeLinecap="butt"
																			className="apexcharts-gridline"
																		/>
																	</g>
																	<g
																		id="SvgjsG2321"
																		className="apexcharts-gridlines-vertical"
																		style={{ display: "none" }}
																	/>
																	<line
																		id="SvgjsLine2344"
																		x1={0}
																		y1="213.2"
																		x2="379.0220338983051"
																		y2="213.2"
																		stroke="transparent"
																		strokeDasharray={0}
																		strokeLinecap="butt"
																	/>
																	<line
																		id="SvgjsLine2343"
																		x1={0}
																		y1={1}
																		x2={0}
																		y2="213.2"
																		stroke="transparent"
																		strokeDasharray={0}
																		strokeLinecap="butt"
																	/>
																</g>
																<g
																	id="SvgjsG2322"
																	className="apexcharts-grid-borders"
																	style={{ display: "none" }}
																/>
																<g
																	id="SvgjsG2256"
																	className="apexcharts-candlestick-series apexcharts-plot-series"
																>
																	<g
																		id="SvgjsG2257"
																		className="apexcharts-series"
																		seriesname="series-1"
																		rel={1}
																		data:realindex={0}
																	>
																	
																		
																		
																		
																		
																		
																		
																		
																		
																		<path
																			id="SvgjsPath2268"
																			d="M 55.56848463085321 110.82135999999991 L 57.81692042516519 110.82135999999991 L 57.81692042516519 97.21920000000136 L 57.81692042516519 110.82135999999991 L 60.065356219477174 110.82135999999991 L 60.065356219477174 118.32600000000093 L 57.81692042516519 118.32600000000093 L 57.81692042516519 123.10168000000158 L 57.81692042516519 118.32600000000093 L 55.56848463085321 118.32600000000093 L 55.56848463085321 110.32135999999991"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 55.56848463085321 110.82135999999991 L 57.81692042516519 110.82135999999991 L 57.81692042516519 97.21920000000136 L 57.81692042516519 110.82135999999991 L 60.065356219477174 110.82135999999991 L 60.065356219477174 118.32600000000093 L 57.81692042516519 118.32600000000093 L 57.81692042516519 123.10168000000158 L 57.81692042516519 118.32600000000093 L 55.56848463085321 118.32600000000093 L 55.56848463085321 110.32135999999991"
																			pathfrom="M 55.56848463085321 110.82135999999991 L 57.81692042516519 110.82135999999991 L 57.81692042516519 97.21920000000136 L 57.81692042516519 110.82135999999991 L 60.065356219477174 110.82135999999991 L 60.065356219477174 118.32600000000093 L 57.81692042516519 118.32600000000093 L 57.81692042516519 123.10168000000158 L 57.81692042516519 118.32600000000093 L 55.56848463085321 118.32600000000093 L 55.56848463085321 110.32135999999991M 55.56848463085321 118.32600000000093"
																			cy="110.82135999999991"
																			cx="59.565356219477174"
																			j={9}
																			val="6608.02"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2269"
																			d="M 61.992586900316006 108.9238800000021 L 64.24102269462799 108.9238800000021 L 64.24102269462799 105.15024000000085 L 64.24102269462799 108.9238800000021 L 66.48945848893996 108.9238800000021 L 66.48945848893996 110.82135999999991 L 64.24102269462799 110.82135999999991 L 64.24102269462799 123.67732000000251 L 64.24102269462799 110.82135999999991 L 61.992586900316006 110.82135999999991 L 61.992586900316006 108.4238800000021"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 61.992586900316006 108.9238800000021 L 64.24102269462799 108.9238800000021 L 64.24102269462799 105.15024000000085 L 64.24102269462799 108.9238800000021 L 66.48945848893996 108.9238800000021 L 66.48945848893996 110.82135999999991 L 64.24102269462799 110.82135999999991 L 64.24102269462799 123.67732000000251 L 64.24102269462799 110.82135999999991 L 61.992586900316006 110.82135999999991 L 61.992586900316006 108.4238800000021"
																			pathfrom="M 61.992586900316006 108.9238800000021 L 64.24102269462799 108.9238800000021 L 64.24102269462799 105.15024000000085 L 64.24102269462799 108.9238800000021 L 66.48945848893996 108.9238800000021 L 66.48945848893996 110.82135999999991 L 64.24102269462799 110.82135999999991 L 64.24102269462799 123.67732000000251 L 64.24102269462799 110.82135999999991 L 61.992586900316006 110.82135999999991 L 61.992586900316006 108.4238800000021M 61.992586900316006 110.82135999999991"
																			cy="108.9238800000021"
																			cx="65.98945848893996"
																			j={10}
																			val="6608.91"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2270"
																			d="M 68.41668916977882 102.33600000000115 L 70.6651249640908 102.33600000000115 L 70.6651249640908 87.43332000000191 L 70.6651249640908 102.33600000000115 L 72.91356075840278 102.33600000000115 L 72.91356075840278 108.9238800000021 L 70.6651249640908 108.9238800000021 L 70.6651249640908 110.84268000000156 L 70.6651249640908 108.9238800000021 L 68.41668916977882 108.9238800000021 L 68.41668916977882 101.83600000000115"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 68.41668916977882 102.33600000000115 L 70.6651249640908 102.33600000000115 L 70.6651249640908 87.43332000000191 L 70.6651249640908 102.33600000000115 L 72.91356075840278 102.33600000000115 L 72.91356075840278 108.9238800000021 L 70.6651249640908 108.9238800000021 L 70.6651249640908 110.84268000000156 L 70.6651249640908 108.9238800000021 L 68.41668916977882 108.9238800000021 L 68.41668916977882 101.83600000000115"
																			pathfrom="M 68.41668916977882 102.33600000000115 L 70.6651249640908 102.33600000000115 L 70.6651249640908 87.43332000000191 L 70.6651249640908 102.33600000000115 L 72.91356075840278 102.33600000000115 L 72.91356075840278 108.9238800000021 L 70.6651249640908 108.9238800000021 L 70.6651249640908 110.84268000000156 L 70.6651249640908 108.9238800000021 L 68.41668916977882 108.9238800000021 L 68.41668916977882 101.83600000000115M 68.41668916977882 108.9238800000021"
																			cy="102.33600000000115"
																			cx="72.41356075840278"
																			j={11}
																			val={6612}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2271"
																			d="M 74.84079143924161 102.33600000000115 L 77.08922723355359 102.33600000000115 L 77.08922723355359 95.66284000000087 L 77.08922723355359 102.33600000000115 L 79.33766302786557 102.33600000000115 L 79.33766302786557 102.33600000000115 L 77.08922723355359 102.33600000000115 L 77.08922723355359 117.06812000000173 L 77.08922723355359 102.33600000000115 L 74.84079143924161 102.33600000000115 L 74.84079143924161 101.83600000000115"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 74.84079143924161 102.33600000000115 L 77.08922723355359 102.33600000000115 L 77.08922723355359 95.66284000000087 L 77.08922723355359 102.33600000000115 L 79.33766302786557 102.33600000000115 L 79.33766302786557 102.33600000000115 L 77.08922723355359 102.33600000000115 L 77.08922723355359 117.06812000000173 L 77.08922723355359 102.33600000000115 L 74.84079143924161 102.33600000000115 L 74.84079143924161 101.83600000000115"
																			pathfrom="M 74.84079143924161 102.33600000000115 L 77.08922723355359 102.33600000000115 L 77.08922723355359 95.66284000000087 L 77.08922723355359 102.33600000000115 L 79.33766302786557 102.33600000000115 L 79.33766302786557 102.33600000000115 L 77.08922723355359 102.33600000000115 L 77.08922723355359 117.06812000000173 L 77.08922723355359 102.33600000000115 L 74.84079143924161 102.33600000000115 L 74.84079143924161 101.83600000000115M 74.84079143924161 102.33600000000115"
																			cy="102.33600000000115"
																			cx="78.83766302786557"
																			j={12}
																			val={6612}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2272"
																			d="M 81.2648937087044 78.990600000001 L 83.51332950301638 78.990600000001 L 83.51332950301638 76.4961600000006 L 83.51332950301638 78.990600000001 L 85.76176529732837 78.990600000001 L 85.76176529732837 102.33600000000115 L 83.51332950301638 102.33600000000115 L 83.51332950301638 109.94724000000133 L 83.51332950301638 102.33600000000115 L 81.2648937087044 102.33600000000115 L 81.2648937087044 78.490600000001"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 81.2648937087044 78.990600000001 L 83.51332950301638 78.990600000001 L 83.51332950301638 76.4961600000006 L 83.51332950301638 78.990600000001 L 85.76176529732837 78.990600000001 L 85.76176529732837 102.33600000000115 L 83.51332950301638 102.33600000000115 L 83.51332950301638 109.94724000000133 L 83.51332950301638 102.33600000000115 L 81.2648937087044 102.33600000000115 L 81.2648937087044 78.490600000001"
																			pathfrom="M 81.2648937087044 78.990600000001 L 83.51332950301638 78.990600000001 L 83.51332950301638 76.4961600000006 L 83.51332950301638 78.990600000001 L 85.76176529732837 78.990600000001 L 85.76176529732837 102.33600000000115 L 83.51332950301638 102.33600000000115 L 83.51332950301638 109.94724000000133 L 83.51332950301638 102.33600000000115 L 81.2648937087044 102.33600000000115 L 81.2648937087044 78.490600000001M 81.2648937087044 102.33600000000115"
																			cy="78.990600000001"
																			cx="85.26176529732837"
																			j={13}
																			val="6622.95"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2273"
																			d="M 87.68899597816721 76.94388000000072 L 89.93743177247919 76.94388000000072 L 89.93743177247919 76.94388000000072 L 89.93743177247919 76.94388000000072 L 92.18586756679117 76.94388000000072 L 92.18586756679117 94.51156000000083 L 89.93743177247919 94.51156000000083 L 89.93743177247919 95.94000000000051 L 89.93743177247919 94.51156000000083 L 87.68899597816721 94.51156000000083 L 87.68899597816721 76.44388000000072"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 87.68899597816721 76.94388000000072 L 89.93743177247919 76.94388000000072 L 89.93743177247919 76.94388000000072 L 89.93743177247919 76.94388000000072 L 92.18586756679117 76.94388000000072 L 92.18586756679117 94.51156000000083 L 89.93743177247919 94.51156000000083 L 89.93743177247919 95.94000000000051 L 89.93743177247919 94.51156000000083 L 87.68899597816721 94.51156000000083 L 87.68899597816721 76.44388000000072"
																			pathfrom="M 87.68899597816721 76.94388000000072 L 89.93743177247919 76.94388000000072 L 89.93743177247919 76.94388000000072 L 89.93743177247919 76.94388000000072 L 92.18586756679117 76.94388000000072 L 92.18586756679117 94.51156000000083 L 89.93743177247919 94.51156000000083 L 89.93743177247919 95.94000000000051 L 89.93743177247919 94.51156000000083 L 87.68899597816721 94.51156000000083 L 87.68899597816721 76.44388000000072M 87.68899597816721 94.51156000000083"
																			cy="76.94388000000072"
																			cx="91.68586756679117"
																			j={14}
																			val="6615.67"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2274"
																			d="M 94.11309824763 88.07292000000234 L 96.36153404194198 88.07292000000234 L 96.36153404194198 87.96632000000136 L 96.36153404194198 88.07292000000234 L 98.60996983625397 88.07292000000234 L 98.60996983625397 105.74720000000161 L 96.36153404194198 105.74720000000161 L 96.36153404194198 106.60000000000036 L 96.36153404194198 105.74720000000161 L 94.11309824763 105.74720000000161 L 94.11309824763 87.57292000000234"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 94.11309824763 88.07292000000234 L 96.36153404194198 88.07292000000234 L 96.36153404194198 87.96632000000136 L 96.36153404194198 88.07292000000234 L 98.60996983625397 88.07292000000234 L 98.60996983625397 105.74720000000161 L 96.36153404194198 105.74720000000161 L 96.36153404194198 106.60000000000036 L 96.36153404194198 105.74720000000161 L 94.11309824763 105.74720000000161 L 94.11309824763 87.57292000000234"
																			pathfrom="M 94.11309824763 88.07292000000234 L 96.36153404194198 88.07292000000234 L 96.36153404194198 87.96632000000136 L 96.36153404194198 88.07292000000234 L 98.60996983625397 88.07292000000234 L 98.60996983625397 105.74720000000161 L 96.36153404194198 105.74720000000161 L 96.36153404194198 106.60000000000036 L 96.36153404194198 105.74720000000161 L 94.11309824763 105.74720000000161 L 94.11309824763 87.57292000000234M 94.11309824763 105.74720000000161"
																			cy="88.07292000000234"
																			cx="98.10996983625397"
																			j={15}
																			val="6610.4"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2275"
																			d="M 100.53720051709281 96.15320000000247 L 102.78563631140479 96.15320000000247 L 102.78563631140479 79.35304000000178 L 102.78563631140479 96.15320000000247 L 105.03407210571677 96.15320000000247 L 105.03407210571677 104.46800000000076 L 102.78563631140479 104.46800000000076 L 102.78563631140479 105.74720000000161 L 102.78563631140479 104.46800000000076 L 100.53720051709281 104.46800000000076 L 100.53720051709281 95.65320000000247"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 100.53720051709281 96.15320000000247 L 102.78563631140479 96.15320000000247 L 102.78563631140479 79.35304000000178 L 102.78563631140479 96.15320000000247 L 105.03407210571677 96.15320000000247 L 105.03407210571677 104.46800000000076 L 102.78563631140479 104.46800000000076 L 102.78563631140479 105.74720000000161 L 102.78563631140479 104.46800000000076 L 100.53720051709281 104.46800000000076 L 100.53720051709281 95.65320000000247"
																			pathfrom="M 100.53720051709281 96.15320000000247 L 102.78563631140479 96.15320000000247 L 102.78563631140479 79.35304000000178 L 102.78563631140479 96.15320000000247 L 105.03407210571677 96.15320000000247 L 105.03407210571677 104.46800000000076 L 102.78563631140479 104.46800000000076 L 102.78563631140479 105.74720000000161 L 102.78563631140479 104.46800000000076 L 100.53720051709281 104.46800000000076 L 100.53720051709281 95.65320000000247M 100.53720051709281 104.46800000000076"
																			cy="96.15320000000247"
																			cx="104.53407210571677"
																			j={16}
																			val="6614.9"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2276"
																			d="M 106.9613027865556 77.9246000000021 L 109.20973858086758 77.9246000000021 L 109.20973858086758 72.06160000000091 L 109.20973858086758 77.9246000000021 L 111.45817437517957 77.9246000000021 L 111.45817437517957 96.15320000000247 L 109.20973858086758 96.15320000000247 L 109.20973858086758 99.50044000000162 L 109.20973858086758 96.15320000000247 L 106.9613027865556 96.15320000000247 L 106.9613027865556 77.4246000000021"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 106.9613027865556 77.9246000000021 L 109.20973858086758 77.9246000000021 L 109.20973858086758 72.06160000000091 L 109.20973858086758 77.9246000000021 L 111.45817437517957 77.9246000000021 L 111.45817437517957 96.15320000000247 L 109.20973858086758 96.15320000000247 L 109.20973858086758 99.50044000000162 L 109.20973858086758 96.15320000000247 L 106.9613027865556 96.15320000000247 L 106.9613027865556 77.4246000000021"
																			pathfrom="M 106.9613027865556 77.9246000000021 L 109.20973858086758 77.9246000000021 L 109.20973858086758 72.06160000000091 L 109.20973858086758 77.9246000000021 L 111.45817437517957 77.9246000000021 L 111.45817437517957 96.15320000000247 L 109.20973858086758 96.15320000000247 L 109.20973858086758 99.50044000000162 L 109.20973858086758 96.15320000000247 L 106.9613027865556 96.15320000000247 L 106.9613027865556 77.4246000000021M 106.9613027865556 96.15320000000247"
																			cy="77.9246000000021"
																			cx="110.95817437517957"
																			j={17}
																			val="6623.45"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2277"
																			d="M 113.38540505601841 77.8606400000026 L 115.63384085033039 77.8606400000026 L 115.63384085033039 70.35600000000159 L 115.63384085033039 77.8606400000026 L 117.88227664464237 77.8606400000026 L 117.88227664464237 84.53380000000107 L 115.63384085033039 84.53380000000107 L 115.63384085033039 88.73384000000078 L 115.63384085033039 84.53380000000107 L 113.38540505601841 84.53380000000107 L 113.38540505601841 77.3606400000026"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 113.38540505601841 77.8606400000026 L 115.63384085033039 77.8606400000026 L 115.63384085033039 70.35600000000159 L 115.63384085033039 77.8606400000026 L 117.88227664464237 77.8606400000026 L 117.88227664464237 84.53380000000107 L 115.63384085033039 84.53380000000107 L 115.63384085033039 88.73384000000078 L 115.63384085033039 84.53380000000107 L 113.38540505601841 84.53380000000107 L 113.38540505601841 77.3606400000026"
																			pathfrom="M 113.38540505601841 77.8606400000026 L 115.63384085033039 77.8606400000026 L 115.63384085033039 70.35600000000159 L 115.63384085033039 77.8606400000026 L 117.88227664464237 77.8606400000026 L 117.88227664464237 84.53380000000107 L 115.63384085033039 84.53380000000107 L 115.63384085033039 88.73384000000078 L 115.63384085033039 84.53380000000107 L 113.38540505601841 84.53380000000107 L 113.38540505601841 77.3606400000026M 113.38540505601841 84.53380000000107"
																			cy="77.8606400000026"
																			cx="117.38227664464237"
																			j={18}
																			val="6620.35"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2278"
																			d="M 119.8095073254812 86.4952400000002 L 122.05794311979318 86.4952400000002 L 122.05794311979318 84.53380000000107 L 122.05794311979318 86.4952400000002 L 124.30637891410517 86.4952400000002 L 124.30637891410517 94.81004000000212 L 122.05794311979318 94.81004000000212 L 122.05794311979318 106.4934000000012 L 122.05794311979318 94.81004000000212 L 119.8095073254812 94.81004000000212 L 119.8095073254812 85.9952400000002"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 119.8095073254812 86.4952400000002 L 122.05794311979318 86.4952400000002 L 122.05794311979318 84.53380000000107 L 122.05794311979318 86.4952400000002 L 124.30637891410517 86.4952400000002 L 124.30637891410517 94.81004000000212 L 122.05794311979318 94.81004000000212 L 122.05794311979318 106.4934000000012 L 122.05794311979318 94.81004000000212 L 119.8095073254812 94.81004000000212 L 119.8095073254812 85.9952400000002"
																			pathfrom="M 119.8095073254812 86.4952400000002 L 122.05794311979318 86.4952400000002 L 122.05794311979318 84.53380000000107 L 122.05794311979318 86.4952400000002 L 124.30637891410517 86.4952400000002 L 124.30637891410517 94.81004000000212 L 122.05794311979318 94.81004000000212 L 122.05794311979318 106.4934000000012 L 122.05794311979318 94.81004000000212 L 119.8095073254812 94.81004000000212 L 119.8095073254812 85.9952400000002M 119.8095073254812 94.81004000000212"
																			cy="86.4952400000002"
																			cx="123.80637891410517"
																			j={19}
																			val="6615.53"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2279"
																			d="M 126.233609594944 94.81004000000212 L 128.48204538925597 94.81004000000212 L 128.48204538925597 89.69324000000051 L 128.48204538925597 94.81004000000212 L 130.73048118356795 94.81004000000212 L 130.73048118356795 95.53492000000188 L 128.48204538925597 95.53492000000188 L 128.48204538925597 106.60000000000036 L 128.48204538925597 95.53492000000188 L 126.233609594944 95.53492000000188 L 126.233609594944 94.31004000000212"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 126.233609594944 94.81004000000212 L 128.48204538925597 94.81004000000212 L 128.48204538925597 89.69324000000051 L 128.48204538925597 94.81004000000212 L 130.73048118356795 94.81004000000212 L 130.73048118356795 95.53492000000188 L 128.48204538925597 95.53492000000188 L 128.48204538925597 106.60000000000036 L 128.48204538925597 95.53492000000188 L 126.233609594944 95.53492000000188 L 126.233609594944 94.31004000000212"
																			pathfrom="M 126.233609594944 94.81004000000212 L 128.48204538925597 94.81004000000212 L 128.48204538925597 89.69324000000051 L 128.48204538925597 94.81004000000212 L 130.73048118356795 94.81004000000212 L 130.73048118356795 95.53492000000188 L 128.48204538925597 95.53492000000188 L 128.48204538925597 106.60000000000036 L 128.48204538925597 95.53492000000188 L 126.233609594944 95.53492000000188 L 126.233609594944 94.31004000000212M 126.233609594944 95.53492000000188"
																			cy="94.81004000000212"
																			cx="130.23048118356795"
																			j={20}
																			val="6615.19"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2280"
																			d="M 132.6577118644068 85.28000000000065 L 134.90614765871877 85.28000000000065 L 134.90614765871877 81.86880000000019 L 134.90614765871877 85.28000000000065 L 137.15458345303074 85.28000000000065 L 137.15458345303074 95.53492000000188 L 134.90614765871877 95.53492000000188 L 134.90614765871877 110.43760000000111 L 134.90614765871877 95.53492000000188 L 132.6577118644068 95.53492000000188 L 132.6577118644068 84.78000000000065"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 132.6577118644068 85.28000000000065 L 134.90614765871877 85.28000000000065 L 134.90614765871877 81.86880000000019 L 134.90614765871877 85.28000000000065 L 137.15458345303074 85.28000000000065 L 137.15458345303074 95.53492000000188 L 134.90614765871877 95.53492000000188 L 134.90614765871877 110.43760000000111 L 134.90614765871877 95.53492000000188 L 132.6577118644068 95.53492000000188 L 132.6577118644068 84.78000000000065"
																			pathfrom="M 132.6577118644068 85.28000000000065 L 134.90614765871877 85.28000000000065 L 134.90614765871877 81.86880000000019 L 134.90614765871877 85.28000000000065 L 137.15458345303074 85.28000000000065 L 137.15458345303074 95.53492000000188 L 134.90614765871877 95.53492000000188 L 134.90614765871877 110.43760000000111 L 134.90614765871877 95.53492000000188 L 132.6577118644068 95.53492000000188 L 132.6577118644068 84.78000000000065M 132.6577118644068 95.53492000000188"
																			cy="85.28000000000065"
																			cx="136.65458345303074"
																			j={21}
																			val={6620}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2281"
																			d="M 139.0818141338696 85.28000000000065 L 141.3302499281816 85.28000000000065 L 141.3302499281816 74.25756000000183 L 141.3302499281816 85.28000000000065 L 143.57868572249356 85.28000000000065 L 143.57868572249356 86.26072000000204 L 141.3302499281816 86.26072000000204 L 141.3302499281816 97.75220000000263 L 141.3302499281816 86.26072000000204 L 139.0818141338696 86.26072000000204 L 139.0818141338696 84.78000000000065"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 139.0818141338696 85.28000000000065 L 141.3302499281816 85.28000000000065 L 141.3302499281816 74.25756000000183 L 141.3302499281816 85.28000000000065 L 143.57868572249356 85.28000000000065 L 143.57868572249356 86.26072000000204 L 141.3302499281816 86.26072000000204 L 141.3302499281816 97.75220000000263 L 141.3302499281816 86.26072000000204 L 139.0818141338696 86.26072000000204 L 139.0818141338696 84.78000000000065"
																			pathfrom="M 139.0818141338696 85.28000000000065 L 141.3302499281816 85.28000000000065 L 141.3302499281816 74.25756000000183 L 141.3302499281816 85.28000000000065 L 143.57868572249356 85.28000000000065 L 143.57868572249356 86.26072000000204 L 141.3302499281816 86.26072000000204 L 141.3302499281816 97.75220000000263 L 141.3302499281816 86.26072000000204 L 139.0818141338696 86.26072000000204 L 139.0818141338696 84.78000000000065M 139.0818141338696 86.26072000000204"
																			cy="85.28000000000065"
																			cx="143.07868572249356"
																			j={22}
																			val={6620}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2282"
																			d="M 145.5059164033324 75.45148000000154 L 147.75435219764438 75.45148000000154 L 147.75435219764438 55.112200000001394 L 147.75435219764438 75.45148000000154 L 150.00278799195635 75.45148000000154 L 150.00278799195635 84.57644000000073 L 147.75435219764438 84.57644000000073 L 147.75435219764438 91.16432000000168 L 147.75435219764438 84.57644000000073 L 145.5059164033324 84.57644000000073 L 145.5059164033324 74.95148000000154"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 145.5059164033324 75.45148000000154 L 147.75435219764438 75.45148000000154 L 147.75435219764438 55.112200000001394 L 147.75435219764438 75.45148000000154 L 150.00278799195635 75.45148000000154 L 150.00278799195635 84.57644000000073 L 147.75435219764438 84.57644000000073 L 147.75435219764438 91.16432000000168 L 147.75435219764438 84.57644000000073 L 145.5059164033324 84.57644000000073 L 145.5059164033324 74.95148000000154"
																			pathfrom="M 145.5059164033324 75.45148000000154 L 147.75435219764438 75.45148000000154 L 147.75435219764438 55.112200000001394 L 147.75435219764438 75.45148000000154 L 150.00278799195635 75.45148000000154 L 150.00278799195635 84.57644000000073 L 147.75435219764438 84.57644000000073 L 147.75435219764438 91.16432000000168 L 147.75435219764438 84.57644000000073 L 145.5059164033324 84.57644000000073 L 145.5059164033324 74.95148000000154M 145.5059164033324 84.57644000000073"
																			cy="75.45148000000154"
																			cx="149.50278799195635"
																			j={23}
																			val="6624.61"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2283"
																			d="M 151.9300186727952 72.59460000000217 L 154.17845446710717 72.59460000000217 L 154.17845446710717 72.4880000000012 L 154.17845446710717 72.59460000000217 L 156.42689026141915 72.59460000000217 L 156.42689026141915 90.43944000000192 L 154.17845446710717 90.43944000000192 L 154.17845446710717 103.0608800000009 L 154.17845446710717 90.43944000000192 L 151.9300186727952 90.43944000000192 L 151.9300186727952 72.09460000000217"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 151.9300186727952 72.59460000000217 L 154.17845446710717 72.59460000000217 L 154.17845446710717 72.4880000000012 L 154.17845446710717 72.59460000000217 L 156.42689026141915 72.59460000000217 L 156.42689026141915 90.43944000000192 L 154.17845446710717 90.43944000000192 L 154.17845446710717 103.0608800000009 L 154.17845446710717 90.43944000000192 L 151.9300186727952 90.43944000000192 L 151.9300186727952 72.09460000000217"
																			pathfrom="M 151.9300186727952 72.59460000000217 L 154.17845446710717 72.59460000000217 L 154.17845446710717 72.4880000000012 L 154.17845446710717 72.59460000000217 L 156.42689026141915 72.59460000000217 L 156.42689026141915 90.43944000000192 L 154.17845446710717 90.43944000000192 L 154.17845446710717 103.0608800000009 L 154.17845446710717 90.43944000000192 L 151.9300186727952 90.43944000000192 L 151.9300186727952 72.09460000000217M 151.9300186727952 90.43944000000192"
																			cy="72.59460000000217"
																			cx="155.92689026141915"
																			j={24}
																			val="6617.58"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2284"
																			d="M 158.354120942258 87.41200000000208 L 160.60255673656997 87.41200000000208 L 160.60255673656997 72.55196000000069 L 160.60255673656997 87.41200000000208 L 162.85099253088194 87.41200000000208 L 162.85099253088194 130.3504800000028 L 160.60255673656997 130.3504800000028 L 160.60255673656997 138.00436000000082 L 160.60255673656997 130.3504800000028 L 158.354120942258 130.3504800000028 L 158.354120942258 86.91200000000208"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 158.354120942258 87.41200000000208 L 160.60255673656997 87.41200000000208 L 160.60255673656997 72.55196000000069 L 160.60255673656997 87.41200000000208 L 162.85099253088194 87.41200000000208 L 162.85099253088194 130.3504800000028 L 160.60255673656997 130.3504800000028 L 160.60255673656997 138.00436000000082 L 160.60255673656997 130.3504800000028 L 158.354120942258 130.3504800000028 L 158.354120942258 86.91200000000208"
																			pathfrom="M 158.354120942258 87.41200000000208 L 160.60255673656997 87.41200000000208 L 160.60255673656997 72.55196000000069 L 160.60255673656997 87.41200000000208 L 162.85099253088194 87.41200000000208 L 162.85099253088194 130.3504800000028 L 160.60255673656997 130.3504800000028 L 160.60255673656997 138.00436000000082 L 160.60255673656997 130.3504800000028 L 158.354120942258 130.3504800000028 L 158.354120942258 86.91200000000208M 158.354120942258 130.3504800000028"
																			cy="87.41200000000208"
																			cx="162.35099253088194"
																			j={25}
																			val="6598.86"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2285"
																			d="M 164.77822321172079 130.3504800000028 L 167.02665900603276 130.3504800000028 L 167.02665900603276 130.3078400000013 L 167.02665900603276 130.3504800000028 L 169.27509480034473 130.3504800000028 L 169.27509480034473 155.29488000000129 L 167.02665900603276 155.29488000000129 L 167.02665900603276 191.88000000000102 L 167.02665900603276 155.29488000000129 L 164.77822321172079 155.29488000000129 L 164.77822321172079 129.8504800000028"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 164.77822321172079 130.3504800000028 L 167.02665900603276 130.3504800000028 L 167.02665900603276 130.3078400000013 L 167.02665900603276 130.3504800000028 L 169.27509480034473 130.3504800000028 L 169.27509480034473 155.29488000000129 L 167.02665900603276 155.29488000000129 L 167.02665900603276 191.88000000000102 L 167.02665900603276 155.29488000000129 L 164.77822321172079 155.29488000000129 L 164.77822321172079 129.8504800000028"
																			pathfrom="M 164.77822321172079 130.3504800000028 L 167.02665900603276 130.3504800000028 L 167.02665900603276 130.3078400000013 L 167.02665900603276 130.3504800000028 L 169.27509480034473 130.3504800000028 L 169.27509480034473 155.29488000000129 L 167.02665900603276 155.29488000000129 L 167.02665900603276 191.88000000000102 L 167.02665900603276 155.29488000000129 L 164.77822321172079 155.29488000000129 L 164.77822321172079 129.8504800000028M 164.77822321172079 155.29488000000129"
																			cy="130.3504800000028"
																			cx="168.77509480034473"
																			j={26}
																			val="6587.16"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2286"
																			d="M 171.2023254811836 141.9912000000022 L 173.45076127549558 141.9912000000022 L 173.45076127549558 127.92000000000189 L 173.45076127549558 141.9912000000022 L 175.69919706980755 141.9912000000022 L 175.69919706980755 151.6704800000025 L 173.45076127549558 151.6704800000025 L 173.45076127549558 170.5600000000013 L 173.45076127549558 151.6704800000025 L 171.2023254811836 151.6704800000025 L 171.2023254811836 141.4912000000022"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 171.2023254811836 141.9912000000022 L 173.45076127549558 141.9912000000022 L 173.45076127549558 127.92000000000189 L 173.45076127549558 141.9912000000022 L 175.69919706980755 141.9912000000022 L 175.69919706980755 151.6704800000025 L 173.45076127549558 151.6704800000025 L 173.45076127549558 170.5600000000013 L 173.45076127549558 151.6704800000025 L 171.2023254811836 151.6704800000025 L 171.2023254811836 141.4912000000022"
																			pathfrom="M 171.2023254811836 141.9912000000022 L 173.45076127549558 141.9912000000022 L 173.45076127549558 127.92000000000189 L 173.45076127549558 141.9912000000022 L 175.69919706980755 141.9912000000022 L 175.69919706980755 151.6704800000025 L 173.45076127549558 151.6704800000025 L 173.45076127549558 170.5600000000013 L 173.45076127549558 151.6704800000025 L 171.2023254811836 151.6704800000025 L 171.2023254811836 141.4912000000022M 171.2023254811836 151.6704800000025"
																			cy="141.9912000000022"
																			cx="175.19919706980755"
																			j={27}
																			val="6593.4"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2287"
																			d="M 177.6264277506464 140.73332000000119 L 179.87486354495837 140.73332000000119 L 179.87486354495837 130.28651999999965 L 179.87486354495837 140.73332000000119 L 182.12329933927035 140.73332000000119 L 182.12329933927035 153.90908000000127 L 179.87486354495837 153.90908000000127 L 179.87486354495837 159.90000000000146 L 179.87486354495837 153.90908000000127 L 177.6264277506464 153.90908000000127 L 177.6264277506464 140.23332000000119"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 177.6264277506464 140.73332000000119 L 179.87486354495837 140.73332000000119 L 179.87486354495837 130.28651999999965 L 179.87486354495837 140.73332000000119 L 182.12329933927035 140.73332000000119 L 182.12329933927035 153.90908000000127 L 179.87486354495837 153.90908000000127 L 179.87486354495837 159.90000000000146 L 179.87486354495837 153.90908000000127 L 177.6264277506464 153.90908000000127 L 177.6264277506464 140.23332000000119"
																			pathfrom="M 177.6264277506464 140.73332000000119 L 179.87486354495837 140.73332000000119 L 179.87486354495837 130.28651999999965 L 179.87486354495837 140.73332000000119 L 182.12329933927035 140.73332000000119 L 182.12329933927035 153.90908000000127 L 179.87486354495837 153.90908000000127 L 179.87486354495837 159.90000000000146 L 179.87486354495837 153.90908000000127 L 177.6264277506464 153.90908000000127 L 177.6264277506464 140.23332000000119M 177.6264277506464 153.90908000000127"
																			cy="140.73332000000119"
																			cx="181.62329933927035"
																			j={28}
																			val="6587.81"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2288"
																			d="M 184.0505300201092 153.90908000000127 L 186.29896581442117 153.90908000000127 L 186.29896581442117 143.4196400000019 L 186.29896581442117 153.90908000000127 L 188.54740160873314 153.90908000000127 L 188.54740160873314 174.82400000000052 L 186.29896581442117 174.82400000000052 L 186.29896581442117 197.97752000000037 L 186.29896581442117 174.82400000000052 L 184.0505300201092 174.82400000000052 L 184.0505300201092 153.40908000000127"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 184.0505300201092 153.90908000000127 L 186.29896581442117 153.90908000000127 L 186.29896581442117 143.4196400000019 L 186.29896581442117 153.90908000000127 L 188.54740160873314 153.90908000000127 L 188.54740160873314 174.82400000000052 L 186.29896581442117 174.82400000000052 L 186.29896581442117 197.97752000000037 L 186.29896581442117 174.82400000000052 L 184.0505300201092 174.82400000000052 L 184.0505300201092 153.40908000000127"
																			pathfrom="M 184.0505300201092 153.90908000000127 L 186.29896581442117 153.90908000000127 L 186.29896581442117 143.4196400000019 L 186.29896581442117 153.90908000000127 L 188.54740160873314 153.90908000000127 L 188.54740160873314 174.82400000000052 L 186.29896581442117 174.82400000000052 L 186.29896581442117 197.97752000000037 L 186.29896581442117 174.82400000000052 L 184.0505300201092 174.82400000000052 L 184.0505300201092 153.40908000000127M 184.0505300201092 174.82400000000052"
																			cy="153.90908000000127"
																			cx="188.04740160873314"
																			j={29}
																			val={6578}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2289"
																			d="M 190.47463228957199 172.69200000000092 L 192.72306808388396 172.69200000000092 L 192.72306808388396 166.89296000000104 L 192.72306808388396 172.69200000000092 L 194.97150387819593 172.69200000000092 L 194.97150387819593 174.07780000000093 L 192.72306808388396 174.07780000000093 L 192.72306808388396 197.44452000000092 L 192.72306808388396 174.07780000000093 L 190.47463228957199 174.07780000000093 L 190.47463228957199 172.19200000000092"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 190.47463228957199 172.69200000000092 L 192.72306808388396 172.69200000000092 L 192.72306808388396 166.89296000000104 L 192.72306808388396 172.69200000000092 L 194.97150387819593 172.69200000000092 L 194.97150387819593 174.07780000000093 L 192.72306808388396 174.07780000000093 L 192.72306808388396 197.44452000000092 L 192.72306808388396 174.07780000000093 L 190.47463228957199 174.07780000000093 L 190.47463228957199 172.19200000000092"
																			pathfrom="M 190.47463228957199 172.69200000000092 L 192.72306808388396 172.69200000000092 L 192.72306808388396 166.89296000000104 L 192.72306808388396 172.69200000000092 L 194.97150387819593 172.69200000000092 L 194.97150387819593 174.07780000000093 L 192.72306808388396 174.07780000000093 L 192.72306808388396 197.44452000000092 L 192.72306808388396 174.07780000000093 L 190.47463228957199 174.07780000000093 L 190.47463228957199 172.19200000000092M 190.47463228957199 174.07780000000093"
																			cy="172.69200000000092"
																			cx="194.47150387819593"
																			j={30}
																			val={6579}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2290"
																			d="M 196.8987345590348 171.88184000000183 L 199.14717035334678 171.88184000000183 L 199.14717035334678 168.59856000000036 L 199.14717035334678 171.88184000000183 L 201.39560614765875 171.88184000000183 L 201.39560614765875 179.1732800000009 L 199.14717035334678 179.1732800000009 L 199.14717035334678 198.76635999999962 L 199.14717035334678 179.1732800000009 L 196.8987345590348 179.1732800000009 L 196.8987345590348 171.38184000000183"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 196.8987345590348 171.88184000000183 L 199.14717035334678 171.88184000000183 L 199.14717035334678 168.59856000000036 L 199.14717035334678 171.88184000000183 L 201.39560614765875 171.88184000000183 L 201.39560614765875 179.1732800000009 L 199.14717035334678 179.1732800000009 L 199.14717035334678 198.76635999999962 L 199.14717035334678 179.1732800000009 L 196.8987345590348 179.1732800000009 L 196.8987345590348 171.38184000000183"
																			pathfrom="M 196.8987345590348 171.88184000000183 L 199.14717035334678 171.88184000000183 L 199.14717035334678 168.59856000000036 L 199.14717035334678 171.88184000000183 L 201.39560614765875 171.88184000000183 L 201.39560614765875 179.1732800000009 L 199.14717035334678 179.1732800000009 L 199.14717035334678 198.76635999999962 L 199.14717035334678 179.1732800000009 L 196.8987345590348 179.1732800000009 L 196.8987345590348 171.38184000000183M 196.8987345590348 179.1732800000009"
																			cy="171.88184000000183"
																			cx="200.89560614765875"
																			j={31}
																			val="6575.96"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2291"
																			d="M 203.3228368284976 151.54256000000169 L 205.57127262280957 151.54256000000169 L 205.57127262280957 151.3720000000012 L 205.57127262280957 151.54256000000169 L 207.81970841712155 151.54256000000169 L 207.81970841712155 179.1732800000009 L 205.57127262280957 179.1732800000009 L 205.57127262280957 188.10635999999977 L 205.57127262280957 179.1732800000009 L 203.3228368284976 179.1732800000009 L 203.3228368284976 151.04256000000169"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 203.3228368284976 151.54256000000169 L 205.57127262280957 151.54256000000169 L 205.57127262280957 151.3720000000012 L 205.57127262280957 151.54256000000169 L 207.81970841712155 151.54256000000169 L 207.81970841712155 179.1732800000009 L 205.57127262280957 179.1732800000009 L 205.57127262280957 188.10635999999977 L 205.57127262280957 179.1732800000009 L 203.3228368284976 179.1732800000009 L 203.3228368284976 151.04256000000169"
																			pathfrom="M 203.3228368284976 151.54256000000169 L 205.57127262280957 151.54256000000169 L 205.57127262280957 151.3720000000012 L 205.57127262280957 151.54256000000169 L 207.81970841712155 151.54256000000169 L 207.81970841712155 179.1732800000009 L 205.57127262280957 179.1732800000009 L 205.57127262280957 188.10635999999977 L 205.57127262280957 179.1732800000009 L 203.3228368284976 179.1732800000009 L 203.3228368284976 151.04256000000169M 203.3228368284976 179.1732800000009"
																			cy="151.54256000000169"
																			cx="207.31970841712155"
																			j={32}
																			val="6588.92"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2292"
																			d="M 209.7469390979604 150.90296000000126 L 211.99537489227237 150.90296000000126 L 211.99537489227237 140.71200000000135 L 211.99537489227237 150.90296000000126 L 214.24381068658434 150.90296000000126 L 214.24381068658434 151.54256000000169 L 211.99537489227237 151.54256000000169 L 211.99537489227237 175.78340000000026 L 211.99537489227237 151.54256000000169 L 209.7469390979604 151.54256000000169 L 209.7469390979604 150.40296000000126"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 209.7469390979604 150.90296000000126 L 211.99537489227237 150.90296000000126 L 211.99537489227237 140.71200000000135 L 211.99537489227237 150.90296000000126 L 214.24381068658434 150.90296000000126 L 214.24381068658434 151.54256000000169 L 211.99537489227237 151.54256000000169 L 211.99537489227237 175.78340000000026 L 211.99537489227237 151.54256000000169 L 209.7469390979604 151.54256000000169 L 209.7469390979604 150.40296000000126"
																			pathfrom="M 209.7469390979604 150.90296000000126 L 211.99537489227237 150.90296000000126 L 211.99537489227237 140.71200000000135 L 211.99537489227237 150.90296000000126 L 214.24381068658434 150.90296000000126 L 214.24381068658434 151.54256000000169 L 211.99537489227237 151.54256000000169 L 211.99537489227237 175.78340000000026 L 211.99537489227237 151.54256000000169 L 209.7469390979604 151.54256000000169 L 209.7469390979604 150.40296000000126M 209.7469390979604 151.54256000000169"
																			cy="150.90296000000126"
																			cx="213.74381068658434"
																			j={33}
																			val="6589.22"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2293"
																			d="M 216.1710413674232 136.27744000000166 L 218.41947716173516 136.27744000000166 L 218.41947716173516 130.28651999999965 L 218.41947716173516 136.27744000000166 L 220.66791295604713 136.27744000000166 L 220.66791295604713 150.73240000000078 L 218.41947716173516 150.73240000000078 L 218.41947716173516 151.15880000000107 L 218.41947716173516 150.73240000000078 L 216.1710413674232 150.73240000000078 L 216.1710413674232 135.77744000000166"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 216.1710413674232 136.27744000000166 L 218.41947716173516 136.27744000000166 L 218.41947716173516 130.28651999999965 L 218.41947716173516 136.27744000000166 L 220.66791295604713 136.27744000000166 L 220.66791295604713 150.73240000000078 L 218.41947716173516 150.73240000000078 L 218.41947716173516 151.15880000000107 L 218.41947716173516 150.73240000000078 L 216.1710413674232 150.73240000000078 L 216.1710413674232 135.77744000000166"
																			pathfrom="M 216.1710413674232 136.27744000000166 L 218.41947716173516 136.27744000000166 L 218.41947716173516 130.28651999999965 L 218.41947716173516 136.27744000000166 L 220.66791295604713 136.27744000000166 L 220.66791295604713 150.73240000000078 L 218.41947716173516 150.73240000000078 L 218.41947716173516 151.15880000000107 L 218.41947716173516 150.73240000000078 L 216.1710413674232 150.73240000000078 L 216.1710413674232 135.77744000000166M 216.1710413674232 150.73240000000078"
																			cy="136.27744000000166"
																			cx="220.16791295604713"
																			j={34}
																			val="6596.08"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2294"
																			d="M 222.59514363688598 133.25000000000182 L 224.84357943119795 133.25000000000182 L 224.84357943119795 127.92000000000189 L 224.84357943119795 133.25000000000182 L 227.09201522550993 133.25000000000182 L 227.09201522550993 135.91500000000087 L 224.84357943119795 135.91500000000087 L 224.84357943119795 152.67252000000008 L 224.84357943119795 135.91500000000087 L 222.59514363688598 135.91500000000087 L 222.59514363688598 132.75000000000182"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 222.59514363688598 133.25000000000182 L 224.84357943119795 133.25000000000182 L 224.84357943119795 127.92000000000189 L 224.84357943119795 133.25000000000182 L 227.09201522550993 133.25000000000182 L 227.09201522550993 135.91500000000087 L 224.84357943119795 135.91500000000087 L 224.84357943119795 152.67252000000008 L 224.84357943119795 135.91500000000087 L 222.59514363688598 135.91500000000087 L 222.59514363688598 132.75000000000182"
																			pathfrom="M 222.59514363688598 133.25000000000182 L 224.84357943119795 133.25000000000182 L 224.84357943119795 127.92000000000189 L 224.84357943119795 133.25000000000182 L 227.09201522550993 133.25000000000182 L 227.09201522550993 135.91500000000087 L 224.84357943119795 135.91500000000087 L 224.84357943119795 152.67252000000008 L 224.84357943119795 135.91500000000087 L 222.59514363688598 135.91500000000087 L 222.59514363688598 132.75000000000182M 222.59514363688598 135.91500000000087"
																			cy="133.25000000000182"
																			cx="226.59201522550993"
																			j={35}
																			val="6596.25"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2295"
																			d="M 229.0192459063488 132.1200400000016 L 231.26768170066077 132.1200400000016 L 231.26768170066077 127.92000000000189 L 231.26768170066077 132.1200400000016 L 233.51611749497275 132.1200400000016 L 233.51611749497275 136.51195999999982 L 231.26768170066077 136.51195999999982 L 231.26768170066077 151.94764000000214 L 231.26768170066077 136.51195999999982 L 229.0192459063488 136.51195999999982 L 229.0192459063488 131.6200400000016"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 229.0192459063488 132.1200400000016 L 231.26768170066077 132.1200400000016 L 231.26768170066077 127.92000000000189 L 231.26768170066077 132.1200400000016 L 233.51611749497275 132.1200400000016 L 233.51611749497275 136.51195999999982 L 231.26768170066077 136.51195999999982 L 231.26768170066077 151.94764000000214 L 231.26768170066077 136.51195999999982 L 229.0192459063488 136.51195999999982 L 229.0192459063488 131.6200400000016"
																			pathfrom="M 229.0192459063488 132.1200400000016 L 231.26768170066077 132.1200400000016 L 231.26768170066077 127.92000000000189 L 231.26768170066077 132.1200400000016 L 233.51611749497275 132.1200400000016 L 233.51611749497275 136.51195999999982 L 231.26768170066077 136.51195999999982 L 231.26768170066077 151.94764000000214 L 231.26768170066077 136.51195999999982 L 229.0192459063488 136.51195999999982 L 229.0192459063488 131.6200400000016M 229.0192459063488 136.51195999999982"
																			cy="132.1200400000016"
																			cx="233.01611749497275"
																			j={36}
																			val="6595.97"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2296"
																			d="M 235.4433481758116 123.65600000000086 L 237.69178397012357 123.65600000000086 L 237.69178397012357 123.63468000000103 L 237.69178397012357 123.65600000000086 L 239.94021976443554 123.65600000000086 L 239.94021976443554 136.51195999999982 L 237.69178397012357 136.51195999999982 L 237.69178397012357 153.14156000000185 L 237.69178397012357 136.51195999999982 L 235.4433481758116 136.51195999999982 L 235.4433481758116 123.15600000000086"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 235.4433481758116 123.65600000000086 L 237.69178397012357 123.65600000000086 L 237.69178397012357 123.63468000000103 L 237.69178397012357 123.65600000000086 L 239.94021976443554 123.65600000000086 L 239.94021976443554 136.51195999999982 L 237.69178397012357 136.51195999999982 L 237.69178397012357 153.14156000000185 L 237.69178397012357 136.51195999999982 L 235.4433481758116 136.51195999999982 L 235.4433481758116 123.15600000000086"
																			pathfrom="M 235.4433481758116 123.65600000000086 L 237.69178397012357 123.65600000000086 L 237.69178397012357 123.63468000000103 L 237.69178397012357 123.65600000000086 L 239.94021976443554 123.65600000000086 L 239.94021976443554 136.51195999999982 L 237.69178397012357 136.51195999999982 L 237.69178397012357 153.14156000000185 L 237.69178397012357 136.51195999999982 L 235.4433481758116 136.51195999999982 L 235.4433481758116 123.15600000000086M 235.4433481758116 136.51195999999982"
																			cy="123.65600000000086"
																			cx="239.44021976443554"
																			j={37}
																			val={6602}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2297"
																			d="M 241.8674504452744 123.65600000000086 L 244.11588623958636 123.65600000000086 L 244.11588623958636 112.996000000001 L 244.11588623958636 123.65600000000086 L 246.36432203389833 123.65600000000086 L 246.36432203389833 128.02660000000105 L 244.11588623958636 128.02660000000105 L 244.11588623958636 135.3606800000016 L 244.11588623958636 128.02660000000105 L 241.8674504452744 128.02660000000105 L 241.8674504452744 123.15600000000086"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 241.8674504452744 123.65600000000086 L 244.11588623958636 123.65600000000086 L 244.11588623958636 112.996000000001 L 244.11588623958636 123.65600000000086 L 246.36432203389833 123.65600000000086 L 246.36432203389833 128.02660000000105 L 244.11588623958636 128.02660000000105 L 244.11588623958636 135.3606800000016 L 244.11588623958636 128.02660000000105 L 241.8674504452744 128.02660000000105 L 241.8674504452744 123.15600000000086"
																			pathfrom="M 241.8674504452744 123.65600000000086 L 244.11588623958636 123.65600000000086 L 244.11588623958636 112.996000000001 L 244.11588623958636 123.65600000000086 L 246.36432203389833 123.65600000000086 L 246.36432203389833 128.02660000000105 L 244.11588623958636 128.02660000000105 L 244.11588623958636 135.3606800000016 L 244.11588623958636 128.02660000000105 L 241.8674504452744 128.02660000000105 L 241.8674504452744 123.15600000000086M 241.8674504452744 128.02660000000105"
																			cy="123.65600000000086"
																			cx="245.86432203389833"
																			j={38}
																			val="6599.95"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2298"
																			d="M 248.29155271473718 126.57684000000154 L 250.53998850904915 126.57684000000154 L 250.53998850904915 125.34028000000035 L 250.53998850904915 126.57684000000154 L 252.78842430336113 126.57684000000154 L 252.78842430336113 147.0653600000005 L 250.53998850904915 147.0653600000005 L 250.53998850904915 148.40852000000086 L 250.53998850904915 147.0653600000005 L 248.29155271473718 147.0653600000005 L 248.29155271473718 126.07684000000154"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 248.29155271473718 126.57684000000154 L 250.53998850904915 126.57684000000154 L 250.53998850904915 125.34028000000035 L 250.53998850904915 126.57684000000154 L 252.78842430336113 126.57684000000154 L 252.78842430336113 147.0653600000005 L 250.53998850904915 147.0653600000005 L 250.53998850904915 148.40852000000086 L 250.53998850904915 147.0653600000005 L 248.29155271473718 147.0653600000005 L 248.29155271473718 126.07684000000154"
																			pathfrom="M 248.29155271473718 126.57684000000154 L 250.53998850904915 126.57684000000154 L 250.53998850904915 125.34028000000035 L 250.53998850904915 126.57684000000154 L 252.78842430336113 126.57684000000154 L 252.78842430336113 147.0653600000005 L 250.53998850904915 147.0653600000005 L 250.53998850904915 148.40852000000086 L 250.53998850904915 147.0653600000005 L 248.29155271473718 147.0653600000005 L 248.29155271473718 126.07684000000154M 248.29155271473718 147.0653600000005"
																			cy="126.57684000000154"
																			cx="252.28842430336113"
																			j={39}
																			val="6591.02"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2299"
																			d="M 254.71565498419997 147.0653600000005 L 256.96409077851195 147.0653600000005 L 256.96409077851195 121.35344000000077 L 256.96409077851195 147.0653600000005 L 259.21252657282395 147.0653600000005 L 259.21252657282395 147.108000000002 L 256.96409077851195 147.108000000002 L 256.96409077851195 147.108000000002 L 256.96409077851195 147.108000000002 L 254.71565498419997 147.108000000002 L 254.71565498419997 146.5653600000005"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 254.71565498419997 147.0653600000005 L 256.96409077851195 147.0653600000005 L 256.96409077851195 121.35344000000077 L 256.96409077851195 147.0653600000005 L 259.21252657282395 147.0653600000005 L 259.21252657282395 147.108000000002 L 256.96409077851195 147.108000000002 L 256.96409077851195 147.108000000002 L 256.96409077851195 147.108000000002 L 254.71565498419997 147.108000000002 L 254.71565498419997 146.5653600000005"
																			pathfrom="M 254.71565498419997 147.0653600000005 L 256.96409077851195 147.0653600000005 L 256.96409077851195 121.35344000000077 L 256.96409077851195 147.0653600000005 L 259.21252657282395 147.0653600000005 L 259.21252657282395 147.108000000002 L 256.96409077851195 147.108000000002 L 256.96409077851195 147.108000000002 L 256.96409077851195 147.108000000002 L 254.71565498419997 147.108000000002 L 254.71565498419997 146.5653600000005M 254.71565498419997 147.108000000002"
																			cy="147.0653600000005"
																			cx="258.71252657282395"
																			j={40}
																			val={6591}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2300"
																			d="M 261.13975725366276 144.97600000000057 L 263.38819304797477 144.97600000000057 L 263.38819304797477 125.10576000000219 L 263.38819304797477 144.97600000000057 L 265.6366288422867 144.97600000000057 L 265.6366288422867 147.108000000002 L 263.38819304797477 147.108000000002 L 263.38819304797477 159.90000000000146 L 263.38819304797477 147.108000000002 L 261.13975725366276 147.108000000002 L 261.13975725366276 144.47600000000057"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 261.13975725366276 144.97600000000057 L 263.38819304797477 144.97600000000057 L 263.38819304797477 125.10576000000219 L 263.38819304797477 144.97600000000057 L 265.6366288422867 144.97600000000057 L 265.6366288422867 147.108000000002 L 263.38819304797477 147.108000000002 L 263.38819304797477 159.90000000000146 L 263.38819304797477 147.108000000002 L 261.13975725366276 147.108000000002 L 261.13975725366276 144.47600000000057"
																			pathfrom="M 261.13975725366276 144.97600000000057 L 263.38819304797477 144.97600000000057 L 263.38819304797477 125.10576000000219 L 263.38819304797477 144.97600000000057 L 265.6366288422867 144.97600000000057 L 265.6366288422867 147.108000000002 L 263.38819304797477 147.108000000002 L 263.38819304797477 159.90000000000146 L 263.38819304797477 147.108000000002 L 261.13975725366276 147.108000000002 L 261.13975725366276 144.47600000000057M 261.13975725366276 147.108000000002"
																			cy="144.97600000000057"
																			cx="265.1366288422867"
																			j={41}
																			val={6592}
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2301"
																			d="M 267.56385952312553 142.1191200000012 L 269.81229531743753 142.1191200000012 L 269.81229531743753 136.4266800000005 L 269.81229531743753 142.1191200000012 L 272.0607311117495 142.1191200000012 L 272.0607311117495 142.56684000000132 L 269.81229531743753 142.56684000000132 L 269.81229531743753 149.2400000000016 L 269.81229531743753 142.56684000000132 L 267.56385952312553 142.56684000000132 L 267.56385952312553 141.6191200000012"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 267.56385952312553 142.1191200000012 L 269.81229531743753 142.1191200000012 L 269.81229531743753 136.4266800000005 L 269.81229531743753 142.1191200000012 L 272.0607311117495 142.1191200000012 L 272.0607311117495 142.56684000000132 L 269.81229531743753 142.56684000000132 L 269.81229531743753 149.2400000000016 L 269.81229531743753 142.56684000000132 L 267.56385952312553 142.56684000000132 L 267.56385952312553 141.6191200000012"
																			pathfrom="M 267.56385952312553 142.1191200000012 L 269.81229531743753 142.1191200000012 L 269.81229531743753 136.4266800000005 L 269.81229531743753 142.1191200000012 L 272.0607311117495 142.1191200000012 L 272.0607311117495 142.56684000000132 L 269.81229531743753 142.56684000000132 L 269.81229531743753 149.2400000000016 L 269.81229531743753 142.56684000000132 L 267.56385952312553 142.56684000000132 L 267.56385952312553 141.6191200000012M 267.56385952312553 142.56684000000132"
																			cy="142.1191200000012"
																			cx="271.5607311117495"
																			j={42}
																			val="6593.34"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2302"
																			d="M 273.98796179258835 141.01048000000264 L 276.23639758690035 141.01048000000264 L 276.23639758690035 117.77168000000165 L 276.23639758690035 141.01048000000264 L 278.4848333812123 141.01048000000264 L 278.4848333812123 142.1191200000012 L 276.23639758690035 142.1191200000012 L 276.23639758690035 164.95284000000174 L 276.23639758690035 142.1191200000012 L 273.98796179258835 142.1191200000012 L 273.98796179258835 140.51048000000264"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 273.98796179258835 141.01048000000264 L 276.23639758690035 141.01048000000264 L 276.23639758690035 117.77168000000165 L 276.23639758690035 141.01048000000264 L 278.4848333812123 141.01048000000264 L 278.4848333812123 142.1191200000012 L 276.23639758690035 142.1191200000012 L 276.23639758690035 164.95284000000174 L 276.23639758690035 142.1191200000012 L 273.98796179258835 142.1191200000012 L 273.98796179258835 140.51048000000264"
																			pathfrom="M 273.98796179258835 141.01048000000264 L 276.23639758690035 141.01048000000264 L 276.23639758690035 117.77168000000165 L 276.23639758690035 141.01048000000264 L 278.4848333812123 141.01048000000264 L 278.4848333812123 142.1191200000012 L 276.23639758690035 142.1191200000012 L 276.23639758690035 164.95284000000174 L 276.23639758690035 142.1191200000012 L 273.98796179258835 142.1191200000012 L 273.98796179258835 140.51048000000264M 273.98796179258835 142.1191200000012"
																			cy="141.01048000000264"
																			cx="277.9848333812123"
																			j={43}
																			val="6593.86"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2303"
																			d="M 280.4120640620512 127.89868000000024 L 282.6604998563632 127.89868000000024 L 282.6604998563632 118.7950400000027 L 282.6604998563632 127.89868000000024 L 284.9089356506751 127.89868000000024 L 284.9089356506751 141.01048000000264 L 282.6604998563632 141.01048000000264 L 282.6604998563632 156.5527600000023 L 282.6604998563632 141.01048000000264 L 280.4120640620512 141.01048000000264 L 280.4120640620512 127.39868000000024"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 280.4120640620512 127.89868000000024 L 282.6604998563632 127.89868000000024 L 282.6604998563632 118.7950400000027 L 282.6604998563632 127.89868000000024 L 284.9089356506751 127.89868000000024 L 284.9089356506751 141.01048000000264 L 282.6604998563632 141.01048000000264 L 282.6604998563632 156.5527600000023 L 282.6604998563632 141.01048000000264 L 280.4120640620512 141.01048000000264 L 280.4120640620512 127.39868000000024"
																			pathfrom="M 280.4120640620512 127.89868000000024 L 282.6604998563632 127.89868000000024 L 282.6604998563632 118.7950400000027 L 282.6604998563632 127.89868000000024 L 284.9089356506751 127.89868000000024 L 284.9089356506751 141.01048000000264 L 282.6604998563632 141.01048000000264 L 282.6604998563632 156.5527600000023 L 282.6604998563632 141.01048000000264 L 280.4120640620512 141.01048000000264 L 280.4120640620512 127.39868000000024M 280.4120640620512 141.01048000000264"
																			cy="127.89868000000024"
																			cx="284.4089356506751"
																			j={44}
																			val="6600.01"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2304"
																			d="M 286.83616633151394 124.06108000000131 L 289.08460212582594 124.06108000000131 L 289.08460212582594 121.07628000000113 L 289.08460212582594 124.06108000000131 L 291.3330379201379 124.06108000000131 L 291.3330379201379 135.91500000000087 L 289.08460212582594 135.91500000000087 L 289.08460212582594 143.3130400000009 L 289.08460212582594 135.91500000000087 L 286.83616633151394 135.91500000000087 L 286.83616633151394 123.56108000000131"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 286.83616633151394 124.06108000000131 L 289.08460212582594 124.06108000000131 L 289.08460212582594 121.07628000000113 L 289.08460212582594 124.06108000000131 L 291.3330379201379 124.06108000000131 L 291.3330379201379 135.91500000000087 L 289.08460212582594 135.91500000000087 L 289.08460212582594 143.3130400000009 L 289.08460212582594 135.91500000000087 L 286.83616633151394 135.91500000000087 L 286.83616633151394 123.56108000000131"
																			pathfrom="M 286.83616633151394 124.06108000000131 L 289.08460212582594 124.06108000000131 L 289.08460212582594 121.07628000000113 L 289.08460212582594 124.06108000000131 L 291.3330379201379 124.06108000000131 L 291.3330379201379 135.91500000000087 L 289.08460212582594 135.91500000000087 L 289.08460212582594 143.3130400000009 L 289.08460212582594 135.91500000000087 L 286.83616633151394 135.91500000000087 L 286.83616633151394 123.56108000000131M 286.83616633151394 135.91500000000087"
																			cy="124.06108000000131"
																			cx="290.8330379201379"
																			j={45}
																			val="6596.25"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2305"
																			d="M 293.26026860097676 121.54532000000108 L 295.50870439528876 121.54532000000108 L 295.50870439528876 118.96560000000136 L 295.50870439528876 121.54532000000108 L 297.7571401896007 121.54532000000108 L 297.7571401896007 135.91500000000087 L 295.50870439528876 135.91500000000087 L 295.50870439528876 149.2400000000016 L 295.50870439528876 135.91500000000087 L 293.26026860097676 135.91500000000087 L 293.26026860097676 121.04532000000108"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 293.26026860097676 121.54532000000108 L 295.50870439528876 121.54532000000108 L 295.50870439528876 118.96560000000136 L 295.50870439528876 121.54532000000108 L 297.7571401896007 121.54532000000108 L 297.7571401896007 135.91500000000087 L 295.50870439528876 135.91500000000087 L 295.50870439528876 149.2400000000016 L 295.50870439528876 135.91500000000087 L 293.26026860097676 135.91500000000087 L 293.26026860097676 121.04532000000108"
																			pathfrom="M 293.26026860097676 121.54532000000108 L 295.50870439528876 121.54532000000108 L 295.50870439528876 118.96560000000136 L 295.50870439528876 121.54532000000108 L 297.7571401896007 121.54532000000108 L 297.7571401896007 135.91500000000087 L 295.50870439528876 135.91500000000087 L 295.50870439528876 149.2400000000016 L 295.50870439528876 135.91500000000087 L 293.26026860097676 135.91500000000087 L 293.26026860097676 121.04532000000108M 293.26026860097676 135.91500000000087"
																			cy="121.54532000000108"
																			cx="297.2571401896007"
																			j={46}
																			val="6602.99"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2306"
																			d="M 299.6843708704395 121.54532000000108 L 301.9328066647515 121.54532000000108 L 301.9328066647515 115.12800000000061 L 301.9328066647515 121.54532000000108 L 304.18124245906347 121.54532000000108 L 304.18124245906347 153.90908000000127 L 301.9328066647515 153.90908000000127 L 301.9328066647515 159.9213200000013 L 301.9328066647515 153.90908000000127 L 299.6843708704395 153.90908000000127 L 299.6843708704395 121.04532000000108"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 299.6843708704395 121.54532000000108 L 301.9328066647515 121.54532000000108 L 301.9328066647515 115.12800000000061 L 301.9328066647515 121.54532000000108 L 304.18124245906347 121.54532000000108 L 304.18124245906347 153.90908000000127 L 301.9328066647515 153.90908000000127 L 301.9328066647515 159.9213200000013 L 301.9328066647515 153.90908000000127 L 299.6843708704395 153.90908000000127 L 299.6843708704395 121.04532000000108"
																			pathfrom="M 299.6843708704395 121.54532000000108 L 301.9328066647515 121.54532000000108 L 301.9328066647515 115.12800000000061 L 301.9328066647515 121.54532000000108 L 304.18124245906347 121.54532000000108 L 304.18124245906347 153.90908000000127 L 301.9328066647515 153.90908000000127 L 301.9328066647515 159.9213200000013 L 301.9328066647515 153.90908000000127 L 299.6843708704395 153.90908000000127 L 299.6843708704395 121.04532000000108M 299.6843708704395 153.90908000000127"
																			cy="121.54532000000108"
																			cx="303.68124245906347"
																			j={47}
																			val="6587.81"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2307"
																			d="M 306.10847313990234 145.06128000000172 L 308.35690893421435 145.06128000000172 L 308.35690893421435 138.58000000000175 L 308.35690893421435 145.06128000000172 L 310.6053447285263 145.06128000000172 L 310.6053447285263 153.90908000000127 L 308.35690893421435 153.90908000000127 L 308.35690893421435 163.58835999999974 L 308.35690893421435 153.90908000000127 L 306.10847313990234 153.90908000000127 L 306.10847313990234 144.56128000000172"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 306.10847313990234 145.06128000000172 L 308.35690893421435 145.06128000000172 L 308.35690893421435 138.58000000000175 L 308.35690893421435 145.06128000000172 L 310.6053447285263 145.06128000000172 L 310.6053447285263 153.90908000000127 L 308.35690893421435 153.90908000000127 L 308.35690893421435 163.58835999999974 L 308.35690893421435 153.90908000000127 L 306.10847313990234 153.90908000000127 L 306.10847313990234 144.56128000000172"
																			pathfrom="M 306.10847313990234 145.06128000000172 L 308.35690893421435 145.06128000000172 L 308.35690893421435 138.58000000000175 L 308.35690893421435 145.06128000000172 L 310.6053447285263 145.06128000000172 L 310.6053447285263 153.90908000000127 L 308.35690893421435 153.90908000000127 L 308.35690893421435 163.58835999999974 L 308.35690893421435 153.90908000000127 L 306.10847313990234 153.90908000000127 L 306.10847313990234 144.56128000000172M 306.10847313990234 153.90908000000127"
																			cy="145.06128000000172"
																			cx="310.1053447285263"
																			j={48}
																			val="6591.96"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2308"
																			d="M 312.53257540936517 145.03996000000006 L 314.78101120367717 145.03996000000006 L 314.78101120367717 136.2987600000015 L 314.78101120367717 145.03996000000006 L 317.0294469979891 145.03996000000006 L 317.0294469979891 152.67252000000008 L 314.78101120367717 152.67252000000008 L 314.78101120367717 159.90000000000146 L 314.78101120367717 152.67252000000008 L 312.53257540936517 152.67252000000008 L 312.53257540936517 144.53996000000006"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 312.53257540936517 145.03996000000006 L 314.78101120367717 145.03996000000006 L 314.78101120367717 136.2987600000015 L 314.78101120367717 145.03996000000006 L 317.0294469979891 145.03996000000006 L 317.0294469979891 152.67252000000008 L 314.78101120367717 152.67252000000008 L 314.78101120367717 159.90000000000146 L 314.78101120367717 152.67252000000008 L 312.53257540936517 152.67252000000008 L 312.53257540936517 144.53996000000006"
																			pathfrom="M 312.53257540936517 145.03996000000006 L 314.78101120367717 145.03996000000006 L 314.78101120367717 136.2987600000015 L 314.78101120367717 145.03996000000006 L 317.0294469979891 145.03996000000006 L 317.0294469979891 152.67252000000008 L 314.78101120367717 152.67252000000008 L 314.78101120367717 159.90000000000146 L 314.78101120367717 152.67252000000008 L 312.53257540936517 152.67252000000008 L 312.53257540936517 144.53996000000006M 312.53257540936517 152.67252000000008"
																			cy="145.03996000000006"
																			cx="316.5294469979891"
																			j={49}
																			val="6588.39"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2309"
																			d="M 318.95667767882793 140.13636000000042 L 321.20511347313993 140.13636000000042 L 321.20511347313993 131.736280000001 L 321.20511347313993 140.13636000000042 L 323.4535492674519 140.13636000000042 L 323.4535492674519 154.35680000000139 L 321.20511347313993 154.35680000000139 L 321.20511347313993 154.35680000000139 L 321.20511347313993 154.35680000000139 L 318.95667767882793 154.35680000000139 L 318.95667767882793 139.63636000000042"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 318.95667767882793 140.13636000000042 L 321.20511347313993 140.13636000000042 L 321.20511347313993 131.736280000001 L 321.20511347313993 140.13636000000042 L 323.4535492674519 140.13636000000042 L 323.4535492674519 154.35680000000139 L 321.20511347313993 154.35680000000139 L 321.20511347313993 154.35680000000139 L 321.20511347313993 154.35680000000139 L 318.95667767882793 154.35680000000139 L 318.95667767882793 139.63636000000042"
																			pathfrom="M 318.95667767882793 140.13636000000042 L 321.20511347313993 140.13636000000042 L 321.20511347313993 131.736280000001 L 321.20511347313993 140.13636000000042 L 323.4535492674519 140.13636000000042 L 323.4535492674519 154.35680000000139 L 321.20511347313993 154.35680000000139 L 321.20511347313993 154.35680000000139 L 321.20511347313993 154.35680000000139 L 318.95667767882793 154.35680000000139 L 318.95667767882793 139.63636000000042M 318.95667767882793 154.35680000000139"
																			cy="140.13636000000042"
																			cx="322.9535492674519"
																			j={50}
																			val="6594.27"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2310"
																			d="M 325.38077994829075 135.27540000000045 L 327.62921574260275 135.27540000000045 L 327.62921574260275 125.78800000000047 L 327.62921574260275 135.27540000000045 L 329.8776515369147 135.27540000000045 L 329.8776515369147 135.50992000000224 L 327.62921574260275 135.50992000000224 L 327.62921574260275 149.2400000000016 L 327.62921574260275 135.50992000000224 L 325.38077994829075 135.50992000000224 L 325.38077994829075 134.77540000000045"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 325.38077994829075 135.27540000000045 L 327.62921574260275 135.27540000000045 L 327.62921574260275 125.78800000000047 L 327.62921574260275 135.27540000000045 L 329.8776515369147 135.27540000000045 L 329.8776515369147 135.50992000000224 L 327.62921574260275 135.50992000000224 L 327.62921574260275 149.2400000000016 L 327.62921574260275 135.50992000000224 L 325.38077994829075 135.50992000000224 L 325.38077994829075 134.77540000000045"
																			pathfrom="M 325.38077994829075 135.27540000000045 L 327.62921574260275 135.27540000000045 L 327.62921574260275 125.78800000000047 L 327.62921574260275 135.27540000000045 L 329.8776515369147 135.27540000000045 L 329.8776515369147 135.50992000000224 L 327.62921574260275 135.50992000000224 L 327.62921574260275 149.2400000000016 L 327.62921574260275 135.50992000000224 L 325.38077994829075 135.50992000000224 L 325.38077994829075 134.77540000000045M 325.38077994829075 135.50992000000224"
																			cy="135.27540000000045"
																			cx="329.3776515369147"
																			j={51}
																			val="6596.55"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2311"
																			d="M 331.8048822177535 127.87736000000041 L 334.0533180120655 127.87736000000041 L 334.0533180120655 117.26000000000204 L 334.0533180120655 127.87736000000041 L 336.30175380637746 127.87736000000041 L 336.30175380637746 130.2438800000018 L 334.0533180120655 130.2438800000018 L 334.0533180120655 135.14748000000145 L 334.0533180120655 130.2438800000018 L 331.8048822177535 130.2438800000018 L 331.8048822177535 127.37736000000041"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 331.8048822177535 127.87736000000041 L 334.0533180120655 127.87736000000041 L 334.0533180120655 117.26000000000204 L 334.0533180120655 127.87736000000041 L 336.30175380637746 127.87736000000041 L 336.30175380637746 130.2438800000018 L 334.0533180120655 130.2438800000018 L 334.0533180120655 135.14748000000145 L 334.0533180120655 130.2438800000018 L 331.8048822177535 130.2438800000018 L 331.8048822177535 127.37736000000041"
																			pathfrom="M 331.8048822177535 127.87736000000041 L 334.0533180120655 127.87736000000041 L 334.0533180120655 117.26000000000204 L 334.0533180120655 127.87736000000041 L 336.30175380637746 127.87736000000041 L 336.30175380637746 130.2438800000018 L 334.0533180120655 130.2438800000018 L 334.0533180120655 135.14748000000145 L 334.0533180120655 130.2438800000018 L 331.8048822177535 130.2438800000018 L 331.8048822177535 127.37736000000041M 331.8048822177535 130.2438800000018"
																			cy="127.87736000000041"
																			cx="335.80175380637746"
																			j={52}
																			val="6600.02"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2312"
																			d="M 338.22898448721634 126.7474000000002 L 340.47742028152834 126.7474000000002 L 340.47742028152834 117.26000000000204 L 340.47742028152834 126.7474000000002 L 342.7258560758403 126.7474000000002 L 342.7258560758403 142.82268000000113 L 340.47742028152834 142.82268000000113 L 340.47742028152834 151.07351999999992 L 340.47742028152834 142.82268000000113 L 338.22898448721634 142.82268000000113 L 338.22898448721634 126.2474000000002"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 338.22898448721634 126.7474000000002 L 340.47742028152834 126.7474000000002 L 340.47742028152834 117.26000000000204 L 340.47742028152834 126.7474000000002 L 342.7258560758403 126.7474000000002 L 342.7258560758403 142.82268000000113 L 340.47742028152834 142.82268000000113 L 340.47742028152834 151.07351999999992 L 340.47742028152834 142.82268000000113 L 338.22898448721634 142.82268000000113 L 338.22898448721634 126.2474000000002"
																			pathfrom="M 338.22898448721634 126.7474000000002 L 340.47742028152834 126.7474000000002 L 340.47742028152834 117.26000000000204 L 340.47742028152834 126.7474000000002 L 342.7258560758403 126.7474000000002 L 342.7258560758403 142.82268000000113 L 340.47742028152834 142.82268000000113 L 340.47742028152834 151.07351999999992 L 340.47742028152834 142.82268000000113 L 338.22898448721634 142.82268000000113 L 338.22898448721634 126.2474000000002M 338.22898448721634 142.82268000000113"
																			cy="126.7474000000002"
																			cx="342.2258560758403"
																			j={53}
																			val="6593.01"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2313"
																			d="M 344.65308675667916 121.39608000000044 L 346.90152255099116 121.39608000000044 L 346.90152255099116 117.26000000000204 L 346.90152255099116 121.39608000000044 L 349.1499583453031 121.39608000000044 L 349.1499583453031 142.52420000000166 L 346.90152255099116 142.52420000000166 L 346.90152255099116 144.97600000000057 L 346.90152255099116 142.52420000000166 L 344.65308675667916 142.52420000000166 L 344.65308675667916 120.89608000000044"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 344.65308675667916 121.39608000000044 L 346.90152255099116 121.39608000000044 L 346.90152255099116 117.26000000000204 L 346.90152255099116 121.39608000000044 L 349.1499583453031 121.39608000000044 L 349.1499583453031 142.52420000000166 L 346.90152255099116 142.52420000000166 L 346.90152255099116 144.97600000000057 L 346.90152255099116 142.52420000000166 L 344.65308675667916 142.52420000000166 L 344.65308675667916 120.89608000000044"
																			pathfrom="M 344.65308675667916 121.39608000000044 L 346.90152255099116 121.39608000000044 L 346.90152255099116 117.26000000000204 L 346.90152255099116 121.39608000000044 L 349.1499583453031 121.39608000000044 L 349.1499583453031 142.52420000000166 L 346.90152255099116 142.52420000000166 L 346.90152255099116 144.97600000000057 L 346.90152255099116 142.52420000000166 L 344.65308675667916 142.52420000000166 L 344.65308675667916 120.89608000000044M 344.65308675667916 142.52420000000166"
																			cy="121.39608000000044"
																			cx="348.6499583453031"
																			j={54}
																			val="6603.06"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2314"
																			d="M 351.0771890261419 119.6265199999998 L 353.3256248204539 119.6265199999998 L 353.3256248204539 118.32600000000093 L 353.3256248204539 119.6265199999998 L 355.57406061476587 119.6265199999998 L 355.57406061476587 121.37476000000242 L 353.3256248204539 121.37476000000242 L 353.3256248204539 129.8601200000012 L 353.3256248204539 121.37476000000242 L 351.0771890261419 121.37476000000242 L 351.0771890261419 119.1265199999998"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 351.0771890261419 119.6265199999998 L 353.3256248204539 119.6265199999998 L 353.3256248204539 118.32600000000093 L 353.3256248204539 119.6265199999998 L 355.57406061476587 119.6265199999998 L 355.57406061476587 121.37476000000242 L 353.3256248204539 121.37476000000242 L 353.3256248204539 129.8601200000012 L 353.3256248204539 121.37476000000242 L 351.0771890261419 121.37476000000242 L 351.0771890261419 119.1265199999998"
																			pathfrom="M 351.0771890261419 119.6265199999998 L 353.3256248204539 119.6265199999998 L 353.3256248204539 118.32600000000093 L 353.3256248204539 119.6265199999998 L 355.57406061476587 119.6265199999998 L 355.57406061476587 121.37476000000242 L 353.3256248204539 121.37476000000242 L 353.3256248204539 129.8601200000012 L 353.3256248204539 121.37476000000242 L 351.0771890261419 121.37476000000242 L 351.0771890261419 119.1265199999998M 351.0771890261419 121.37476000000242"
																			cy="119.6265199999998"
																			cx="355.07406061476587"
																			j={55}
																			val="6603.89"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2315"
																			d="M 357.50129129560474 118.45392000000174 L 359.74972708991675 118.45392000000174 L 359.74972708991675 118.45392000000174 L 359.74972708991675 118.45392000000174 L 361.9981628842287 118.45392000000174 L 361.9981628842287 120.45800000000054 L 359.74972708991675 120.45800000000054 L 359.74972708991675 127.92000000000189 L 359.74972708991675 120.45800000000054 L 357.50129129560474 120.45800000000054 L 357.50129129560474 117.95392000000174"
																			fill="rgba(253,83,83,1)"
																			fillOpacity={1}
																			stroke="#fd5353"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 357.50129129560474 118.45392000000174 L 359.74972708991675 118.45392000000174 L 359.74972708991675 118.45392000000174 L 359.74972708991675 118.45392000000174 L 361.9981628842287 118.45392000000174 L 361.9981628842287 120.45800000000054 L 359.74972708991675 120.45800000000054 L 359.74972708991675 127.92000000000189 L 359.74972708991675 120.45800000000054 L 357.50129129560474 120.45800000000054 L 357.50129129560474 117.95392000000174"
																			pathfrom="M 357.50129129560474 118.45392000000174 L 359.74972708991675 118.45392000000174 L 359.74972708991675 118.45392000000174 L 359.74972708991675 118.45392000000174 L 361.9981628842287 118.45392000000174 L 361.9981628842287 120.45800000000054 L 359.74972708991675 120.45800000000054 L 359.74972708991675 127.92000000000189 L 359.74972708991675 120.45800000000054 L 357.50129129560474 120.45800000000054 L 357.50129129560474 117.95392000000174M 357.50129129560474 120.45800000000054"
																			cy="118.45392000000174"
																			cx="361.4981628842287"
																			j={56}
																			val="6603.5"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2316"
																			d="M 363.9253935650675 119.69048000000112 L 366.1738293593795 119.69048000000112 L 366.1738293593795 119.41332000000148 L 366.1738293593795 119.69048000000112 L 368.42226515369146 119.69048000000112 L 368.42226515369146 120.45800000000054 L 366.1738293593795 120.45800000000054 L 366.1738293593795 133.25000000000182 L 366.1738293593795 120.45800000000054 L 363.9253935650675 120.45800000000054 L 363.9253935650675 119.19048000000112"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 363.9253935650675 119.69048000000112 L 366.1738293593795 119.69048000000112 L 366.1738293593795 119.41332000000148 L 366.1738293593795 119.69048000000112 L 368.42226515369146 119.69048000000112 L 368.42226515369146 120.45800000000054 L 366.1738293593795 120.45800000000054 L 366.1738293593795 133.25000000000182 L 366.1738293593795 120.45800000000054 L 363.9253935650675 120.45800000000054 L 363.9253935650675 119.19048000000112"
																			pathfrom="M 363.9253935650675 119.69048000000112 L 366.1738293593795 119.69048000000112 L 366.1738293593795 119.41332000000148 L 366.1738293593795 119.69048000000112 L 368.42226515369146 119.69048000000112 L 368.42226515369146 120.45800000000054 L 366.1738293593795 120.45800000000054 L 366.1738293593795 133.25000000000182 L 366.1738293593795 120.45800000000054 L 363.9253935650675 120.45800000000054 L 363.9253935650675 119.19048000000112M 363.9253935650675 120.45800000000054"
																			cy="119.69048000000112"
																			cx="367.92226515369146"
																			j={57}
																			val="6603.86"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2317"
																			d="M 370.34949583453033 119.242760000001 L 372.59793162884233 119.242760000001 L 372.59793162884233 117.26000000000204 L 372.59793162884233 119.242760000001 L 374.8463674231543 119.242760000001 L 374.8463674231543 119.71180000000095 L 372.59793162884233 119.71180000000095 L 372.59793162884233 127.92000000000189 L 372.59793162884233 119.71180000000095 L 370.34949583453033 119.71180000000095 L 370.34949583453033 118.742760000001"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 370.34949583453033 119.242760000001 L 372.59793162884233 119.242760000001 L 372.59793162884233 117.26000000000204 L 372.59793162884233 119.242760000001 L 374.8463674231543 119.242760000001 L 374.8463674231543 119.71180000000095 L 372.59793162884233 119.71180000000095 L 372.59793162884233 127.92000000000189 L 372.59793162884233 119.71180000000095 L 370.34949583453033 119.71180000000095 L 370.34949583453033 118.742760000001"
																			pathfrom="M 370.34949583453033 119.242760000001 L 372.59793162884233 119.242760000001 L 372.59793162884233 117.26000000000204 L 372.59793162884233 119.242760000001 L 374.8463674231543 119.242760000001 L 374.8463674231543 119.71180000000095 L 372.59793162884233 119.71180000000095 L 372.59793162884233 127.92000000000189 L 372.59793162884233 119.71180000000095 L 370.34949583453033 119.71180000000095 L 370.34949583453033 118.742760000001M 370.34949583453033 119.71180000000095"
																			cy="119.242760000001"
																			cx="374.3463674231543"
																			j={58}
																			val="6604.07"
																			barwidth="4.49687158862396"
																		/>
																		<path
																			id="SvgjsPath2318"
																			d="M 376.77359810399315 115.12800000000061 L 379.02203389830515 115.12800000000061 L 379.02203389830515 115.12800000000061 L 379.02203389830515 115.12800000000061 L 381.2704696926171 115.12800000000061 L 381.2704696926171 117.3026400000017 L 379.02203389830515 117.3026400000017 L 379.02203389830515 119.242760000001 L 379.02203389830515 117.3026400000017 L 376.77359810399315 117.3026400000017 L 376.77359810399315 114.62800000000061"
																			fill="rgba(58,182,122,1)"
																			fillOpacity={1}
																			stroke="#3ab67a"
																			strokeOpacity={1}
																			strokeLinecap="butt"
																			strokeWidth={1}
																			strokeDasharray={0}
																			className="apexcharts-candlestick-area"
																			index={0}
																			clipPath="url(#gridRectMaskv4w56c37)"
																			pathto="M 376.77359810399315 115.12800000000061 L 379.02203389830515 115.12800000000061 L 379.02203389830515 115.12800000000061 L 379.02203389830515 115.12800000000061 L 381.2704696926171 115.12800000000061 L 381.2704696926171 117.3026400000017 L 379.02203389830515 117.3026400000017 L 379.02203389830515 119.242760000001 L 379.02203389830515 117.3026400000017 L 376.77359810399315 117.3026400000017 L 376.77359810399315 114.62800000000061"
																			pathfrom="M 376.77359810399315 115.12800000000061 L 379.02203389830515 115.12800000000061 L 379.02203389830515 115.12800000000061 L 379.02203389830515 115.12800000000061 L 381.2704696926171 115.12800000000061 L 381.2704696926171 117.3026400000017 L 379.02203389830515 117.3026400000017 L 379.02203389830515 119.242760000001 L 379.02203389830515 117.3026400000017 L 376.77359810399315 117.3026400000017 L 376.77359810399315 114.62800000000061M 376.77359810399315 117.3026400000017"
																			cy="115.12800000000061"
																			cx="380.7704696926171"
																			j={59}
																			val={6606}
																			barwidth="4.49687158862396"
																		/>
																	</g>
																	<g
																		id="SvgjsG2258"
																		className="apexcharts-datalabels"
																		data:realindex={0}
																	/>
																</g>
																<line
																	id="SvgjsLine2345"
																	x1="-4.606170550847457"
																	y1={0}
																	x2="383.6282044491526"
																	y2={0}
																	stroke="#b6b6b6"
																	strokeDasharray={0}
																	strokeWidth={1}
																	strokeLinecap="butt"
																	className="apexcharts-ycrosshairs"
																/>
																<line
																	id="SvgjsLine2346"
																	x1="-4.606170550847457"
																	y1={0}
																	x2="383.6282044491526"
																	y2={0}
																	strokeDasharray={0}
																	strokeWidth={0}
																	strokeLinecap="butt"
																	className="apexcharts-ycrosshairs-hidden"
																/>
																<g
																	id="SvgjsG2347"
																	className="apexcharts-xaxis"
																	transform="translate(0, 0)"
																>
																	<g
																		id="SvgjsG2348"
																		className="apexcharts-xaxis-texts-g"
																		transform="translate(0, -4)"
																	>
																		<text
																			id="SvgjsText2350"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="6.424102269462797"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2351" />
																			<title />
																		</text>
																		<text
																			id="SvgjsText2353"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="44.96871588623958"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2354">02:00</tspan>
																			<title>02:00</title>
																		</text>
																		<text
																			id="SvgjsText2356"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="83.51332950301637"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2357">05:00</tspan>
																			<title>05:00</title>
																		</text>
																		<text
																			id="SvgjsText2359"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="122.05794311979317"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2360">08:00</tspan>
																			<title>08:00</title>
																		</text>
																		<text
																			id="SvgjsText2362"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="160.60255673656994"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2363">11:00</tspan>
																			<title>11:00</title>
																		</text>
																		<text
																			id="SvgjsText2365"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="199.1471703533467"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2366">14:00</tspan>
																			<title>14:00</title>
																		</text>
																		<text
																			id="SvgjsText2368"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="237.69178397012345"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2369">17:00</tspan>
																			<title>17:00</title>
																		</text>
																		<text
																			id="SvgjsText2371"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="276.23639758690024"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2372">20:00</tspan>
																			<title>20:00</title>
																		</text>
																		<text
																			id="SvgjsText2374"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="314.781011203677"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2375">23:00</tspan>
																			<title>23:00</title>
																		</text>
																		<text
																			id="SvgjsText2377"
																			fontFamily="Helvetica, Arial, sans-serif"
																			x="353.32562482045375"
																			y="242.2"
																			textAnchor="middle"
																			dominantBaseline="auto"
																			fontSize="12px"
																			fontWeight={400}
																			fill="#373d3f"
																			className="apexcharts-text apexcharts-xaxis-label "
																			style={{
																				fontFamily: "Helvetica, Arial, sans-serif"
																			}}
																		>
																			<tspan id="SvgjsTspan2378">02:00</tspan>
																			<title>02:00</title>
																		</text>
																	</g>
																	<line
																		id="SvgjsLine2379"
																		x1="-4.606170550847457"
																		y1="214.2"
																		x2="383.6282044491526"
																		y2="214.2"
																		stroke="#e0e0e0"
																		strokeDasharray={0}
																		strokeWidth={1}
																		strokeLinecap="butt"
																	/>
																</g>
																<g
																	id="SvgjsG2415"
																	className="apexcharts-yaxis-annotations"
																/>
																<g
																	id="SvgjsG2416"
																	className="apexcharts-xaxis-annotations"
																/>
																<g
																	id="SvgjsG2417"
																	className="apexcharts-point-annotations"
																/>
																<rect
																	id="SvgjsRect2418"
																	width={0}
																	height={0}
																	x={0}
																	y={0}
																	rx={0}
																	ry={0}
																	opacity={1}
																	strokeWidth={0}
																	stroke="none"
																	strokeDasharray={0}
																	fill="#fefefe"
																	className="apexcharts-zoom-rect"
																/>
																<rect
																	id="SvgjsRect2419"
																	width={0}
																	height={0}
																	x={0}
																	y={0}
																	rx={0}
																	ry={0}
																	opacity={1}
																	strokeWidth={0}
																	stroke="none"
																	strokeDasharray={0}
																	fill="#fefefe"
																	className="apexcharts-selection-rect"
																/>
															</g>
														</svg>
														<div className="apexcharts-tooltip apexcharts-theme-light">
															<div
																className="apexcharts-tooltip-title"
																style={{
																	fontFamily: "Helvetica, Arial, sans-serif",
																	fontSize: 12
																}}
															/>
															<div
																className="apexcharts-tooltip-series-group"
																style={{ order: 1 }}
															>
																<span
																	className="apexcharts-tooltip-marker"
																	style={{ backgroundColor: "rgb(0, 143, 251)" }}
																/>
																<div
																	className="apexcharts-tooltip-text"
																	style={{
																		fontFamily: "Helvetica, Arial, sans-serif",
																		fontSize: 12
																	}}
																>
																	<div className="apexcharts-tooltip-y-group">
																		<span className="apexcharts-tooltip-text-y-label" />
																		<span className="apexcharts-tooltip-text-y-value" />
																	</div>
																	<div className="apexcharts-tooltip-goals-group">
																		<span className="apexcharts-tooltip-text-goals-label" />
																		<span className="apexcharts-tooltip-text-goals-value" />
																	</div>
																	<div className="apexcharts-tooltip-z-group">
																		<span className="apexcharts-tooltip-text-z-label" />
																		<span className="apexcharts-tooltip-text-z-value" />
																	</div>
																</div>
															</div>
														</div>
														<div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
															<div
																className="apexcharts-xaxistooltip-text"
																style={{
																	fontFamily: "Helvetica, Arial, sans-serif",
																	fontSize: 12
																}}
															/>
														</div>
														<div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-right apexcharts-theme-light">
															<div className="apexcharts-yaxistooltip-text" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="card transaction-table">
									<div className="card-header border-0 flex-wrap pb-0">
										<div className="mb-2">
											<h4 className="card-title">Recent Transactions</h4>
											<p className="mb-sm-3 mb-0">
												Lorem ipsum dolor sit amet, consectetur
											</p>
										</div>
										<ul className="float-end nav nav-pills mb-2">
											<li className="nav-item">
												<button className="nav-link active">Week</button>
											</li>
											<li className="nav-item">
												<button className="nav-link ">Month</button>
											</li>
											<li className="nav-item">
												<button className="nav-link ">Year</button>
											</li>
										</ul>
									</div>
									<div className="card-body p-0">
										<div className="tab-content" id="myTabContent1">
											<div
												className="tab-pane fade show active"
												id="Week"
												role="tabpanel"
												aria-labelledby="Week-tab"
											>
												<div className="table-responsive">
													<table className="table table-responsive-md">
														<thead>
															<tr>
																<th>#</th>
																<th>Transaction ID</th>
																<th>Date</th>
																<th>From</th>
																<th>To</th>
																<th>Coin</th>
																<th>Amount</th>
																<th className="text-end">Status</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<svg
																		className="arrow svg-main-icon"
																		xmlns="http://www.w3.org/2000/svg"
																		width="24px"
																		height="24px"
																		viewBox="0 0 24 24"
																		version="1.1"
																	>
																		<g
																			stroke="none"
																			strokeWidth={1}
																			fill="none"
																			fillRule="evenodd"
																		>
																			<polygon points="0 0 24 0 24 24 0 24" />
																			<rect
																				fill="#fff"
																				opacity="0.3"
																				transform="translate(11.646447, 12.853553) rotate(-315.000000) translate(-11.646447, -12.853553) "
																				x="10.6464466"
																				y="5.85355339"
																				width={2}
																				height={14}
																				rx={1}
																			/>
																			
																		</g>
																	</svg>
																</td>
																<td>#12415346563475</td>
																<td>01 August 2020</td>
																<td>Donalt</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="/vite/demo/assets/1-DFfjU_dL.jpg"
																			className=" me-2"
																			width={30}
																			alt=""
																		/>{" "}
																		<span className="w-space-no">Dr. Jackson</span>
																	</div>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="data:image/svg+xml,%3csvg%20width='137'%20height='137'%20viewBox='0%200%20137%20137'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M92.9644%2053.8221C92.9599%2048.4197%2088.5804%2044.0417%2083.1795%2044.0357H53.822V63.6069H83.1795C88.5804%2063.6024%2092.9599%2059.2229%2092.9644%2053.8221Z'%20fill='%23FFAB2D'/%3e%3cpath%20d='M53.822%2092.9645H83.1795C88.5834%2092.9645%2092.9644%2088.5835%2092.9644%2083.1796C92.9644%2077.7743%2088.5834%2073.3933%2083.1795%2073.3933H53.822V92.9645Z'%20fill='%23FFAB2D'/%3e%3cpath%20d='M68.5001%209.15527e-05C30.6687%209.15527e-05%200.00012207%2030.6687%200.00012207%2068.5001C0.00012207%20106.332%2030.6687%20137%2068.5001%20137C106.332%20137%20137%20106.332%20137%2068.5001C136.957%2030.6866%20106.314%200.0433939%2068.5001%209.15527e-05V9.15527e-05ZM102.751%2083.1781C102.737%2093.9828%2093.9829%20102.737%2083.1797%20102.749V107.643C83.1797%20110.345%2080.9877%20112.536%2078.2865%20112.536C75.5838%20112.536%2073.3933%20110.345%2073.3933%20107.643V102.749H63.6084V107.643C63.6084%20110.345%2061.4164%20112.536%2058.7153%20112.536C56.0126%20112.536%2053.8221%20110.345%2053.8221%20107.643V102.749H39.144C36.4414%20102.749%2034.2509%20100.559%2034.2509%2097.8577C34.2509%2095.155%2036.4414%2092.9645%2039.144%2092.9645H44.0357V44.0357H39.144C36.4414%2044.0357%2034.2509%2041.8452%2034.2509%2039.1425C34.2509%2036.4399%2036.4414%2034.2493%2039.144%2034.2493H53.8221V29.3577C53.8221%2026.655%2056.0126%2024.4645%2058.7153%2024.4645C61.4179%2024.4645%2063.6084%2026.655%2063.6084%2029.3577V34.2493H73.3933V29.3577C73.3933%2026.655%2075.5838%2024.4645%2078.2865%2024.4645C80.9891%2024.4645%2083.1797%2026.655%2083.1797%2029.3577V34.2493C93.9426%2034.2045%20102.705%2042.8919%20102.751%2053.6548C102.775%2059.3543%20100.304%2064.7791%2095.9867%2068.5001C100.263%2072.1793%20102.731%2077.5354%20102.751%2083.1781V83.1781Z'%20fill='%23FFAB2D'/%3e%3c/svg%3e"
																			alt=""
																			className="me-2 img-btc"
																		/>
																		Bitcoin
																	</div>
																</td>
																<td className="text-success font-w600">+$5,553</td>
																<td className="text-end">
																	<div className="badge badge-sm badge-success">
																		COMPLETED
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	<svg
																		className="arrow style-1 svg-main-icon"
																		xmlns="http://www.w3.org/2000/svg"
																		width="24px"
																		height="24px"
																		viewBox="0 0 24 24"
																		version="1.1"
																	>
																		<g
																			stroke="none"
																			strokeWidth={1}
																			fill="none"
																			fillRule="evenodd"
																		>
																			<polygon points="0 0 24 0 24 24 0 24" />
																			<rect
																				fill="#fff"
																				opacity="0.3"
																				transform="translate(11.646447, 12.853553) rotate(-315.000000) translate(-11.646447, -12.853553) "
																				x="10.6464466"
																				y="5.85355339"
																				width={2}
																				height={14}
																				rx={1}
																			/>
																			<path
																				d="M8.1109127,8.90380592 C7.55862795,8.90380592 7.1109127,8.45609067 7.1109127,7.90380592 C7.1109127,7.35152117 7.55862795,6.90380592 8.1109127,6.90380592 L16.5961941,6.90380592 C17.1315855,6.90380592 17.5719943,7.32548256 17.5952502,7.8603687 L17.9488036,15.9920967 C17.9727933,16.5438602 17.5449482,17.0106003 16.9931847,17.0345901 C16.4414212,17.0585798 15.974681,16.6307346 15.9506913,16.0789711 L15.6387276,8.90380592 L8.1109127,8.90380592 Z"
																				fill="#fff"
																				fillRule="nonzero"
																			/>
																		</g>
																	</svg>
																</td>
																<td>#12415346563475</td>
																<td>01 August 2020</td>
																<td>Thomas</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="/vite/demo/assets/2-CP3UVaRM.jpg"
																			className=" me-2"
																			width={30}
																			alt=""
																		/>{" "}
																		<span className="w-space-no">Kritiyan</span>
																	</div>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23413fbb;%20fill-rule:%20evenodd;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20id='Vector'%20class='cls-1'%20d='M1583,256a12,12,0,1,0,12,12,12,12,0,0,0-12-12h0Zm5.76,9.923-1.03,5.158a2.567,2.567,0,0,1-2.51,2.062h-7.18a0.858,0.858,0,0,1,0-1.715h7.18a0.852,0.852,0,0,0,.83-0.683l1.03-5.158a0.852,0.852,0,0,0-.67-1,0.791,0.791,0,0,0-.16-0.017h-6.49a0.857,0.857,0,1,1,0-1.714h6.49a2.566,2.566,0,0,1,2.56,2.565,2.808,2.808,0,0,1-.05.5h0Zm-10.72,1.22h3.43a0.857,0.857,0,1,1,0,1.714h-3.43A0.857,0.857,0,0,1,1578.04,267.143Z'%20transform='translate(-1571%20-256)'/%3e%3c/svg%3e"
																			alt=""
																			className="me-2 img-btc"
																		/>
																		Bitcoin
																	</div>
																</td>
																<td className="text-success font-w600">+$5,553</td>
																<td className="text-end">
																	<div className="badge badge-sm badge-warning">
																		PENDING
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	<svg
																		className="arrow style-2 svg-main-icon"
																		xmlns="http://www.w3.org/2000/svg"
																		width="24px"
																		height="24px"
																		viewBox="0 0 24 24"
																		version="1.1"
																	>
																		<g
																			stroke="none"
																			strokeWidth={1}
																			fill="none"
																			fillRule="evenodd"
																		>
																			<polygon points="0 0 24 0 24 24 0 24" />
																			<rect
																				fill="#fff"
																				opacity="0.3"
																				transform="translate(11.646447, 12.853553) rotate(-315.000000) translate(-11.646447, -12.853553) "
																				x="10.6464466"
																				y="5.85355339"
																				width={2}
																				height={14}
																				rx={1}
																			/>
																			<path
																				d="M8.1109127,8.90380592 C7.55862795,8.90380592 7.1109127,8.45609067 7.1109127,7.90380592 C7.1109127,7.35152117 7.55862795,6.90380592 8.1109127,6.90380592 L16.5961941,6.90380592 C17.1315855,6.90380592 17.5719943,7.32548256 17.5952502,7.8603687 L17.9488036,15.9920967 C17.9727933,16.5438602 17.5449482,17.0106003 16.9931847,17.0345901 C16.4414212,17.0585798 15.974681,16.6307346 15.9506913,16.0789711 L15.6387276,8.90380592 L8.1109127,8.90380592 Z"
																				fill="#fff"
																				fillRule="nonzero"
																			/>
																		</g>
																	</svg>
																</td>
																<td>#12415346563475</td>
																<td>01 August 2020</td>
																<td>Hitesh</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="/vite/demo/assets/3-MOWAZPsp.jpg"
																			className=" me-2"
																			width={30}
																			alt=""
																		/>{" "}
																		<span className="w-space-no">Prof. Kalyan</span>
																	</div>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="data:image/svg+xml,%3csvg%20width='137'%20height='137'%20viewBox='0%200%20137%20137'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M70.3615%2078.5206C69.1671%2078.9977%2067.8366%2078.9977%2066.6421%2078.5206L53.8232%2073.3927L68.5018%20102.75L83.1804%2073.3927L70.3615%2078.5206Z'%20fill='%23DC3CCC'/%3e%3cpath%20d='M68.4982%2068.5L88.0696%2061.6503L68.4982%2034.25L48.9268%2061.6503L68.4982%2068.5Z'%20fill='%23DC3CCC'/%3e%3cpath%20d='M68.5%200C30.6686%200%200%2030.6686%200%2068.5C0%20106.331%2030.6686%20137%2068.5%20137C106.331%20137%20137%20106.331%20137%2068.5C136.958%2030.6865%20106.313%200.0418093%2068.5%200V0ZM97.3409%2065.7958L72.8765%20114.725C71.6685%20117.142%2068.7285%20118.122%2066.3125%20116.914C65.3643%20116.44%2064.5968%20115.673%2064.1235%20114.725L39.6591%2065.7958C38.899%2064.2698%2038.9856%2062.4586%2039.8875%2061.0117L64.3519%2021.8692C65.978%2019.5787%2069.151%2019.0381%2071.4416%2020.6642C71.9089%2020.9957%2072.3166%2021.4019%2072.6481%2021.8692L97.111%2061.0117C98.0144%2062.4586%2098.101%2064.2698%2097.3409%2065.7958V65.7958Z'%20fill='%23DC3CCC'/%3e%3c/svg%3e"
																			alt=""
																			className="me-2 img-btc"
																		/>
																		Bitcoin
																	</div>
																</td>
																<td className="text-success font-w600">+$5,553</td>
																<td className="text-end">
																	<div className="badge badge-sm badge-danger">
																		CANCEL
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>



	);
}

export default Dashboard;

