        function on_triger(con)
        {		
            con.style.display = 'block'; 
                	
        }

        function off_triger(con)
        {
            con.style.display = 'none'; 
        }

        

        function safe_result(s_result)
        {
            if (0 <= s_result && s_result < 2.5){
                off_triger(document.getElementById("success"));
                off_triger(document.getElementById("info"));
                off_triger(document.getElementById("warning"));
                on_triger(document.getElementById("error"));
            }
            else if(2.5 <= s_result && s_result < 5)
            {
                off_triger(document.getElementById("success"));
                off_triger(document.getElementById("info"));
                on_triger(document.getElementById("warning"));
                off_triger(document.getElementById("error"));
            }
            else if(5 <= s_result && s_result < 7.5) {
                off_triger(document.getElementById("success"));
                on_triger(document.getElementById("info"));
                off_triger(document.getElementById("warning"));
                off_triger(document.getElementById("error"));
            }
            else{
                on_triger(document.getElementById("success"));
                off_triger(document.getElementById("info"));
                off_triger(document.getElementById("warning"));
                off_triger(document.getElementById("error"));
            }
            
        }

        
        function scalingBpm(heart_rate) {
            if (heart_rate >= 60 && heart_rate <= 100) {
                return(0);
            } else if (heart_rate >= 100 && heart_rate < 110) {
                return (1);
            } else if (heart_rate >= 110 && heart_rate < 120) {
                return (2);
            } else if (heart_rate >= 120 && heart_rate < 140) {
                return (3);
            } else if (heart_rate >= 140 && heart_rate < 160) {
                return (4);
            } else {
                return (5);
            }

        }

        function scalingBodyTemperture(btmp) {

            if (btmp >= 35 && btmp <= 37.5) {
                return(0);
            } else if (btmp >= 37.6 && btmp < 38) {
                return(1);
            } else if (btmp >= 38.1 && btmp < 38.5) {
                return(2);
            } else if (btmp >= 38.6 && btmp < 39) {
                return(3);
            } else if (btmp >= 39.1 && btmp < 40) {
                return(4);
            } else {
                return(5);
            }
        }

        function scalingOxygen(oxygen_saturation) {
            if (oxygen_saturation >= 95) {
                return (0);
                
            } else if (oxygen_saturation >= 92 && oxygen_saturation < 95) {
                return (1);
                
            } else if (oxygen_saturation >= 90 && oxygen_saturation < 92) {
                return (2);
                
            } else if (oxygen_saturation >= 85 && oxygen_saturation < 90) {
                return (3);
                
            } else if (oxygen_saturation >= 80 && oxygen_saturation < 85) {
                return (4);
                
            } else {
                return (5);
            }
        }
        function scalingImpulse(impact_force) {
            if (impact_force >= 0 && impact_force < 80) {
                return (0); // negligible impact force
            } else if (impact_force >= 80 && impact_force < 180) {
                return (1); // minor impact force
            } else if (impact_force >= 180 && impact_force < 380) {
                return (2); // moderate impact force
            } else if (impact_force >= 380 && impact_force < 580) {
                return (3); // significant impact force
            } else if (impact_force >= 580 && impact_force < 780) {
                return (4); // severe impact force
            } else {
                return (5); // extremely dangerous impact force
            }
        }
        function scalingAcceleration(acceleration) {
            if (acceleration <= 0) {
                return (0);
            } else if (acceleration <= 2.5) {
                return (1);
            } else if (acceleration <= 5) {
                return (2);
            } else if (acceleration <= 7.5) {
                return (3);
            } else if (acceleration <= 10) {
                return (4);
            } else {
                return (5);
            }

        }

        function scalingImpactDuration(impact_duration)
        {
            if (impact_duration <= 0.5) {
                return (0);
            } else if (impact_duration <= 1) {
                return (1);
            } else if (impact_duration <= 2) {
                return (2);
            } else if (impact_duration <= 3) {
                return (3);
            } else if (impact_duration <= 4) {
                return (4);
            } else {
                return (5);
            }
        }

        function scalingCAI(cai) {
            if (cai >= 0 && cai < 50) {
                return (0); 
            } else if (cai >= 50 && cai < 100) {
                return (1); 
            } else if (cai >= 100 && cai < 150) {
                return (2); 
            } else if (cai >= 150 && cai < 200) {
                return (3); 
            } else if (cai >= 250 && cai < 300) {
                return (4); 
            } else {
                return (5); 
            }
        }

        function scalingAmbientTemperture(ambtmp) {
            if (ambtmp >= 15 && ambtmp <= 30) {
                return(0); // normal temperature
            } else if (ambtmp >= 10 && ambtmp < 15) {
                return(1); // slightly abnormal temperature
            } else if ((ambtmp >= 5 && ambtmp < 10) || (ambtmp > 30 && ambtmp <= 35)) {
                return(2); // moderately abnormal temperature
            } else if ((ambtmp >= -5 && ambtmp < 5) || (ambtmp > 35 && ambtmp <= 40)) {
                return(3); // significantly abnormal temperature
            } else if ((ambtmp >= -10 && ambtmp < -5) || (ambtmp > 40 && ambtmp <= 45)) {
                return(4); // dangerously abnormal temperature
            } else {
                return(5); // extreme temperature, potentially fatal
            }
            
        }

        function scalingAltitude(altitude) {
            if (altitude >= 0 && altitude < 1000) {
                return(0); // normal
            } else if (altitude >= 1000 && altitude < 2000) {
                return(1);
            } else if (altitude >= 2000 && altitude < 3000) {
                return(2);
            } else if (altitude >= 3000 && altitude < 4000) {
                return(3);
            } else if (altitude >= 4000 && altitude < 5000) {
                return(4);
            } else {
                return(5); // abnormal and dangerous
            }
        }
        
        function pearsonCorrelation(x, y) {
            if (x.length !== y.length) {
                //throw "same length";
            }

            var n = x.length;

            var sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
            for (var i = 0; i < n; i++) {
                sumX += x[i];
                sumY += y[i];
                sumXY += x[i] * y[i];
                sumX2 += x[i] * x[i];
                sumY2 += y[i] * y[i];
            }

            var numerator = (n * sumXY) - (sumX * sumY);
            var denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));

            return numerator / (denominator + Math.random()/100); // Migaehada
        }

        function calc_index(A, B, C, D, a, b, c) {
            var answer = 0;

            for(var i = 0; i < A.length; i++)
                answer += parseInt(A[i]);
            var AA = answer / A.length;
            answer = 0;
            for(var i = 0; i < B.length; i++)
                answer += parseInt(B[i]);
            var BB = answer / B.length;
            answer = 0;
            for(var i = 0; i < C.length; i++)
                answer += parseInt(C[i]);
            var CC = answer / C.length;
            answer = 0;
            for(var i = 0; i < D.length; i++)
                answer += parseInt(D[i]);
            var DD = answer / D.length;
            
            return Math.sqrt(AA**2 + (a*BB)**2 + (b*CC)**2 + (c*DD)**2);
        }

        function sign_check(flag)
        {
            if (flag == 0)
                return (0);
            else
                return (1);
        }


		function onSubmit() {
            
                var q1_b = parseInt(document.getElementById("q1").value); //심박수 40~120 6/1
                var q2_b = parseInt(document.getElementById("q2").value); //온도  
                var q3_b = parseInt(document.getElementById("q3").value); //산소포화도 < 95, >95
                var q4_b = parseInt(document.getElementById("q4").value); 
                var q5_b = parseInt(document.getElementById("q5").value);
                var q6_b = parseInt(document.getElementById("q6").value);
                var q7_b = parseInt(document.getElementById("q7").value);
                var q8_b = parseInt(document.getElementById("q8").value);
                var q9_b = parseInt(document.getElementById("q9").value);
                var q10_b = document.querySelector('input[name="q10_n"]:checked').value;
                var q11_b = document.querySelector('input[name="q11_n"]:checked').value;
                var q12_b = document.querySelector('input[name="q12_n"]:checked').value;
                
                
                
                var q1 = scalingBpm(q1_b);// + Math.random()/100);
                var q2 = scalingBodyTemperture(q2_b);// + Math.random()/100;
                var q3 = scalingOxygen(q3_b);// + Math.random()/100;
                var q4 = scalingImpulse(q4_b);// + Math.random()/100;
                var q5 = scalingAcceleration(q5_b);// + Math.random()/100;
                var q6 = scalingCAI(q6_b);// + Math.random()/100;
                var q7 = scalingAmbientTemperture(q7_b);// + Math.random()/100;
                var q8 = scalingAltitude(q8_b);//+ Math.random()/100;
                var q9 = scalingImpactDuration(q9_b);// + Math.random()/100;
                var q10 = Number(q10_b);
                var q11 = Number(q11_b);
                var q12 = Number(q12_b);
                
                
                
                //console.log(q7);
                //console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12);
                var A = [q1, q2, q3];
                var B = [q10, q11, q12];
                var C = [q4, q5, q9];
                var D = [q6, q7, q8];

                
                var a = pearsonCorrelation(A, D);
                var b = pearsonCorrelation(A, B);//생체-심리
                var c = pearsonCorrelation(A, C);
                var d = pearsonCorrelation(B, D);//심리-환경
                var e = pearsonCorrelation(B, C);//심리-사물손상
                var f = pearsonCorrelation(C, D);
                //생체-환경
                //생체-사물
                //사물-환경
                var newA = calc_index(A, D, B, C, 1, 1, 1);
                var newB = calc_index(B, A, D, C, 1, 1, 1);
                var newC = calc_index(C, B, C, D, 1, 1, 1);
                var newD = calc_index(D, A, D, B, 1, 1, 1);
                console.log(newA, newB, newC, newD);
                var temp;
                if (Math.max(newA, newB, newC, newD) >= 10){
                    temp = 0;
                }
                else{
                    temp = (newA+newB+newC+newD) / 4;
                    temp = 10 - temp;
                }
                
                safe_result(temp.toFixed(2));
                
                document.getElementById("survey").innerHTML= "";
                document.getElementById("result").style.display = "block";
                document.getElementById("label1").innerText = "생체-환경 상관계수 : " + a.toFixed(2);
                document.getElementById("label2").innerText = "생체-사물손상 상관계수 : " + c.toFixed(2);
                document.getElementById("label3").innerText = "사물손상-환경 상관계수 : " + f.toFixed(2);
                document.getElementById("label5").innerText = "생체-심리 상관계수 : " + b.toFixed(2);
                document.getElementById("label6").innerText = "심리-환경 상관계수 : " + d.toFixed(2);
                document.getElementById("label7").innerText = "심리-사물손상 상관계수 : " + e.toFixed(2);
                document.getElementById("label4").innerText = "안전지수(0~10) : " + temp.toFixed(2);
                document.getElementById("label8").innerText = '정상: 안전지수가 ['+  temp.toFixed(2) +'] 이므로 정상입니다.';
                document.getElementById("label9").innerText = '주의: 안전지수가 ['+  temp.toFixed(2) +'] 이므로 주의하시길 바랍니다.';
                document.getElementById("label10").innerText = '경고: 안전지수가 ['+  temp.toFixed(2) +'] 이므로 병원에서 진료하시길 바랍니다.';
                document.getElementById("label11").innerText = '위험: 안전지수가 ['+ temp.toFixed(2) +'] 이므로 근처 병원이나 119에 신고하여 응급처치를 받으시길 바랍니다.';
                
    

                var ctx1 = document.getElementById("myChart1").getContext("2d");
                var myChart = new Chart(ctx1, {
                    data: {
                            type: "scatter",
                        datasets: [{
                            type: "scatter",
                            label: "(생체) = 환경",
                            data: [{
                                x: A[0],
                                y: D[0]
                            }, {
                                x: A[1],
                                y: D[1]
                            }, {
                                x: A[2],
                                y: D[2]
                            }],
                            pointBackgroundColor: "red",
                            pointRadius: 8, // Set point size
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                title: {
                                    display: true,
                                    text: ""
                                },
                                type: "linear",
                                position: "bottom",
                                scaleLabel: {
                                    display: true,
                                    labelString: ""
                                }
                            }],
                            yAxes: [{
                                title: {
                                    display: true,
                                    text: ""
                                },
                                type: "linear",
                                position: "left",
                                scaleLabel: {
                                    display: true,
                                    labelString: ""
                                }
                            }]
                        }
                    }
                });
                
                var ctx2 = document.getElementById("myChart2").getContext("2d");
                var myChart = new Chart(ctx2, {
                    data: {
                            type: "scatter",
                        datasets: [{
                            type: "scatter",
                            label: "(생체) = 사물손상",
                            data: [{
                                x: A[0],
                                y: C[0]
                            }, {
                                x: A[1],
                                y: C[1]
                            }, {
                                x: A[2],
                                y: C[2]
                            }],
                            pointBackgroundColor: "orange",
                            pointRadius: 8, // Set point size
                        }]
                    },
                    
                });

                var ctx3 = document.getElementById("myChart3").getContext("2d");
                var myChart = new Chart(ctx3, {
                    data: {
                            type: "scatter",
                        datasets: [{
                            type: "scatter",
                            label: "(사물손상) = 환경",
                            data: [{
                                x: C[0],
                                y: D[0]
                            }, {
                                x: C[1],
                                y: D[1]
                            }, {
                                x: C[2],
                                y: D[2]
                            }],
                            pointBackgroundColor: "yellow",
                            pointRadius: 8, // Set point size
                        }]
                    },
                    
                });

                var ctx4 = document.getElementById("myChart4").getContext("2d");
                var myChart = new Chart(ctx4, {
                    data: {
                            type: "scatter",
                        datasets: [{
                            type: "scatter",
                            label: "(생체) = 심리",
                            data: [{
                                x: A[0],
                                y: B[0]
                            }, {
                                x: A[1],
                                y: B[1]
                            }, {
                                x: A[2],
                                y: B[2]
                            }],
                            pointBackgroundColor: "green",
                            pointRadius: 8, // Set point size
                        }]
                    },
                    
                });

                var ctx5 = document.getElementById("myChart5").getContext("2d");
                var myChart = new Chart(ctx5, {
                    data: {
                            type: "scatter",
                        datasets: [{
                            type: "scatter",
                            label: "(심리) = 환경",
                            data: [{
                                x: B[0],
                                y: D[0]
                            }, {
                                x: B[1],
                                y: D[1]
                            }, {
                                x: B[2],
                                y: D[2]
                            }],
                            pointBackgroundColor: "blue",
                            pointRadius: 8, // Set point size
                        }]
                    },
                
                });

                var ctx6 = document.getElementById("myChart6").getContext("2d");
                var myChart = new Chart(ctx6, {
                    data: {
                            type: "scatter",
                        datasets: [{
                            type: "scatter",
                            label: "(심리) = 사물손상",
                            data: [{
                                x: B[0],
                                y: C[0]
                            }, {
                                x: B[1],
                                y: C[1]
                            }, {
                                x: B[2],
                                y: C[2]
                            }],
                            pointBackgroundColor: "purple",
                            pointRadius: 8, // Set point size
                        }]
                    },
                    
                });

                // Get the canvas element
                const polarChartCanvas = document.getElementById('polarChart');

                // Create a function to update the data for the chart
                // function updatePolarChart() {
                //   // Get the data for each range from your functions
                //   const heartRateData = q1;
                //   const bodyTemperatureData = q2;
                //   const oxygenSaturationData = q3;
                //   const helmetImpactData = q4;
                //   const fallAccelerationData = q5;
                //   const airPollutionData = q6;
                //   const ambientTemperatureData = q7;
                //   const altitudeData = q8;
                //   const ImpactDuration = q9;
                //   const Anxiety = q10;
                //   const stress = q11;
                //   const fatigue = q12;

                //   // Set the data for the chart
                //   polarChart.data.datasets[0].data = [
                //     heartRateData,
                //     bodyTemperatureData,
                //     oxygenSaturationData,
                //     helmetImpactData,
                //     fallAccelerationData,
                //     airPollutionData,
                //     ambientTemperatureData,
                //     altitudeData,
                //     ImpactDuration,
                //     Anxiety,
                //     stress,
                //     fatigue
                //   ];

                //   // Update the chart
                //   polarChart.update();
                  
                // }
                
                // Define the chart data and options
                const polarData = {
                  labels: ['심박수', '체온', '산소포화도', '헬멧충격량', '낙상','헬멧충격지속시간', '공기오염도', '기온', '고도', '불안함', '스트레스', '피로감'],
                  datasets: [{
                    data: [q1, q2, q3, q4, q5, q9, q6, q7, q8, q10, q11, q12],
                    backgroundColor : ['#FF4136', '#FF6347', '#FF7F50', '#FFA07A', '#FFC0CB', '#DC143C', '#2ECC40', '#3D9970', '#32CD32', '#00FF00', '#ADFF2F', '#228B22', '#0074D9', '#7FDBFF', '#39CCCC', '#85144b', '#F012BE', '#B10DC9', '#FFD700', '#8B4513', '#CD5C5C', '#00BFFF']



                  }]
                };

                const polarChartOptions = {
                    title: {
                        display: true,
                        text: 'Polar Area Chart'
                    },
                    scale: {
                        ticks: {
                        beginAtZero: true,
                        fontSize: 100, // or any other size that works for your chart
                        fontColor: '#333',
                        max: 10
                        }
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                };

                // Create the chart
                const polarChart = new Chart(polarChartCanvas, {
                  type: 'polarArea',
                  data: polarData,
                  //options: polarChartOptions
                });

                // Call the updatePolarChart function to update the chart with new data every 5 seconds
                polarChart.update();
        }

        
