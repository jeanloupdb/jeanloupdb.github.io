
document.getElementById('H1').style.color = 'green';
function opt() {
	
    let h = document.getElementById("heure");
    let mn = document.getElementById("min");
    let s = document.getElementById("sec");
    let j = document.getElementById("jour");
    let m = document.getElementById("mois");
    let a = document.getElementById("anne");

    let hhh = h.options[h.selectedIndex].value;
    let minn = mn.options[mn.selectedIndex].value;
    let sss = s.options[s.selectedIndex].value;
    let jjj = j.options[j.selectedIndex].value;
    let mmm = m.options[m.selectedIndex].value;
    let aaaaa = a.options[a.selectedIndex].value;

	let hh = Number(hhh);
    let min = Number(minn);
    let ss = Number(sss);
    let jj = Number(jjj);
    let mm = Number(mmm);
    let aaaa = Number(aaaaa);
	
    let now = new Date();
    let h1 = now.getHours();
    let mi1 = now.getMinutes();
    let s1 = now.getSeconds();
    let j1 = now.getDate();
    let m1 = now.getMonth();
    let aaa1 = now.getFullYear();
	
	let hh1 = Number(h1);
    let min1 = Number(mi1);
    let ss1 = Number(s1);
    let jj1 = Number(j1);
    let mm1 = Number(m1) + 1;
    let aaaa1 = Number(aaa1);

    function atnow(jj, mm, aaaa) {
        let j = 0;
        let m31 = [1,3,5,7,8,10,12];
        let m30 = [4,6,9,11];
        for(let k1 = 1; k1 < mm; k1++){
            if(k1==2){
                if(aaaa % 4 == 0){
                    j += 29;
                } else{
                    j += 28;
                }
            }
            for(let i in m31){
                if (k1 == m31[i]){
                    j += 31;
                }
            }
            for(let i in m30){
                if (k1 == m30[i]){
                    j += 30;
                }
            }
        }
        j = j + jj;
        return j;
    }
    function atend(jj,mm,aaaa){
        let d = 0;
        if(aaaa%4==0){
            d = 366 - atnow(jj,mm,aaaa);
        }else{
            d = 365 - atnow (jj,mm,aaaa);
        }
        return d;
    }
    function enter(aaaa,aaaa1){
        let j = 0;
        if(aaaa != aaaa1-1 && aaaa != aaaa1){
            for(let i = aaaa+1 ; i < aaaa1 ; i++){
                if(i%4 === 0){
                    j = j + 366;
                }else{
                    j = j + 365;
                }
            }
        }
        return j;
    }
    function jours(jj,mm,aaaa,jj1,mm1,aaaa1){
        let r;
        if(aaaa==aaaa1){
            r = atend(jj,mm,aaaa) - atend(jj1,mm1,aaaa1);
        }else{
            r = atend(jj,mm,aaaa) + enter(aaaa,aaaa1) + atnow(jj1,mm1,aaaa1);
        }
        return r;
    }
    function atnow_sec(hh,min,ss){
        let s = hh*3600 + min*60 + ss;
        return s;
    }
    let sc = -atnow_sec(hh,min,ss) + (jours(jj,mm,aaaa,jj1,mm1,aaaa1))*86400 + atnow_sec(hh1,min1,ss1);
    document.getElementById("H").innerHTML = sc;
    setTimeout('opt();','1000');
    return sc;

}


function anniv(){
    if(opt()<1000000000){
        ann(1000000000);
        document.getElementById('nbmil').innerHTML = 1;
    }else{
        if((opt()>=1000000000) && (opt()<2000000000)){
            ann(2000000000);
            document.getElementById('nbmil').innerHTML = 2;
        }else{
            if((opt()>=2000000000) && (opt()<3000000000)){
                ann(3000000000);
                document.getElementById('nbmil').innerHTML = 3;
            }else{
                if((opt()>=3000000000) && (opt()<4000000000)){
                    ann(4000000000);
                    document.getElementById('nbmil').innerHTML = 4;
                }
            }
        }
    }
    
    function ann(sec_total){
        var h = document.getElementById("heure");
        var mn = document.getElementById("min");
        var s = document.getElementById("sec");
        var j = document.getElementById("jour");
        var m = document.getElementById("mois");
        var a = document.getElementById("anne");

        var hhh = h.options[h.selectedIndex].value;
        var minn = mn.options[mn.selectedIndex].value;
        var sss = s.options[s.selectedIndex].value;
        var jjj = j.options[j.selectedIndex].value;
        var mmm = m.options[m.selectedIndex].value;
        var aaaaa = a.options[a.selectedIndex].value;

        var hh = Number(hhh);
        var mn = Number(minn);
        var ss = Number(sss);
        var jj = Number(jjj);
        var mm = Number(mmm);
        var aaaa = Number(aaaaa);

        function sec_atend(hh,mn,ss,jj,mm,aaaa){
            function mois(mm){
                let j = 0;
                let m31 = [1,3,5,7,8,10,12];
                let m30 = [4,6,9,11];
                while(mm<=12){
                    if(mm == 12){
                        j = 0;
                        mm += 1;
                    }
                    else{
                        for(let i in m31){
                            if(mm+1==m31[i]){
                                j+=31;
                                mm += 31;
                            }
                        }
                        for(let i in m30){
                            if(mm+1==m30[i]){
                                j += 30;
                                mm += 1;
                            }
                        }
                        if(mm+1==2){
                            if(aaaa%4==0){
                                j+=29;
                                mm += 1;
                            }
                            else{
                                j += 28;
                                mm += 1;
                            }
                        }
                    }
                }
                return j;
            }
            function jours(jj,mm,aaaa){
                let m31 = [1,3,5,7,8,10,12];
                let m30 = [4,6,9,11];
                for(let i in m31){
                    if(mm == m31[i]){
                        jj = 31-jj;
                    }
                }
                for(let i in m30){
                    if(mm == m30[i]){
                        jj = 30-jj;
                    }
                }
                if(mm==2){
                    if(aaaa%4 == 0){
                        jj = 29-jj;
                    }else{
                        jj = 28-jj;
                    }
                }
                return jj;
            }
            function heure(hh){
                hh = 23-hh;
                return hh;
            }
            function minute(mn){
                mn = 59-mn;
                return mn;
            }
            function sec(ss){
                ss = 59-ss;
                return ss;
            }
            jj = jours(jj,mm) + mois(mm);
            hh = heure(hh);
            mn = minute(mn);
            ss = sec(ss);
            ss = jj*24*3600 + hh*3600 + mn*60 + ss;
            return ss;
        }
        function sec_in_time(sec,aaaa){
            function annees(sec,aaaa){
                while((sec >= 366*24*3600 && aaaa%4==0) || (sec >= 365*24*3600 && aaaa%4!=0)){
                    if(aaaa%4==0){
                        aaaa +=1;
                        sec = sec - 366*24*3600;
                    }else{
                        aaaa+=1;
                        sec = sec - 365*24*3600;
                    }
                }
                let resta = sec;
                return [aaaa, resta];
            }
            function mois(resta){
                let mm = 1;
                let test = 0;
                if(resta >= 31*24*3600){
                    mm += 1;
                    resta = resta - 31*24*3600;
                    if(aaaa%4==0 && resta >= 29*24*3600){
                        mm += 1;
                        resta = resta - 29*24*3600;
                        test = 1;
                    }else{
                        if(resta >= 28*24*3600){
                            mm += 1;
                            resta = resta - 28*24*3600;
                            test = 1;
                        }
                    }
                    if(test==1){
                        test = 0;
                        if(resta >= 31*24*3600){
                            mm += 1;
                            resta = resta - 31*24*3600;
                            if(resta >= 30*24*3600){
                                mm += 1;
                                resta = resta - 30*24*3600;
                                if(resta >= 31*24*3600){
                                    mm += 1;
                                    resta = resta - 31*24*3600;
                                    if(resta >= 30*24*3600){
                                        mm += 1;
                                        resta = resta - 30*24*3600;
                                        if(resta >= 31*24*3600){
                                            mm += 1;
                                            resta = resta - 31*24*3600;
                                            if(resta >= 31*24*3600){
                                                mm += 1;
                                                resta = resta - 31*24*3600;
                                                if(resta >= 30*24*3600){
                                                    mm += 1;
                                                    resta = resta - 30*24*3600;
                                                    if(resta >= 31*24*3600){
                                                        mm += 1;
                                                        resta = resta - 31*24*3600;
                                                        if(resta >= 30*24*3600){
                                                            mm += 1;
                                                            resta = resta - 30*24*3600;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                let restm = resta;
                return [mm,restm];
            }
            function jours(restm){
                let jj = 1;
                while(restm >= 24*3600){
                    jj += 1;
                    restm = restm - 24*3600;
                }
                let restj = restm;
                return [jj,restj];
            }
            function heure(restj){
                let hh = 0;
                while(restj >= 3600){
                    restj = restj - 3600;
                    hh += 1;
                }
                let resth = restj;
                return [hh,resth];
            }
            function minute(resth){
                let mn = 0;
                while(resth >= 60){
                    resth = resth - 60;
                    mn += 1;
                }
                let restm = resth;
                return [mn,restm];
            }

            let aaa = annees(sec,aaaa)[0];
            let resta = annees(sec,aaaa)[1];
            let mm = mois(resta)[0];
            let restk = mois(resta)[1];
            let jj = jours(restk)[0];
            let restj = jours(restk)[1];
            let hh = heure(restj)[0];
            let resth = heure(restj)[1];
            let mn = minute(resth)[0];
            let restm = minute(resth)[1];
            let ss = restm;

            return [aaa, mm, jj, hh, mn, ss];

        }

        let total = sec_total - sec_atend(hh,mn,ss,jj,mm,aaaa);
        let res = sec_in_time(total, aaaa+1);

        document.getElementById("jj").innerHTML = res[2];
        document.getElementById("mm").innerHTML = res[1];
        document.getElementById("aaaa").innerHTML = res[0];
        document.getElementById("hh").innerHTML = res[3];
        document.getElementById("mn").innerHTML = res[4];
        document.getElementById("ss").innerHTML = res[5];

}}


