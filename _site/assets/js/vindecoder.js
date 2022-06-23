if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(find, replace) {
    let s = '', index, next;
    while (~(next = this.indexOf(find, index))) {
      s += this.substring(index, next) + replace;
      index = next + find.length;
    }
    return s + this.substring(index);
  };
}

function vindecoder() {
  var text;
  vin = document.getElementById("vin").value;
  vin = vin.trim().toUpperCase();
  vin = vin.replaceAll("/", "");
  vin = vin.replaceAll("\\", "");
  vin = vin.replaceAll("-", "");
  vin = vin.replaceAll(" ", "");
  oldstyle_short = /^GH[ND][345]\d+G?/;
  oldstyle = /^GH[ND][345][ULR][A-L\s]?\d+/;
  v8 = /^GD2D[12]\d+/;
  aus = /^YG?HN\d+G?/;

  if (vin.match(oldstyle_short)) {
	text = old_vin_short_decode(vin)
  } else if (vin.match(oldstyle)) {
	text = old_vin_decode(vin)
  } else if (vin.match(aus)) {
	text = aus_vin_decode(vin)
  } else if (vin.match(v8)) {
	text = v8_vin_decode(vin)
  } else {
	if (vin.length == 14) {
		text = new_vin_decode(vin);
	} else {
  	text = "This doesn't look like an MGB VIN number to me";
	}
  }
  document.getElementById("demo").innerHTML = text;
}

function aus_vin_decode(vin) {
    var tempvin = vin;
console.log(vin);
    tempvin = tempvin.replace("YGHN","");
    tempvin = tempvin.replace("YHN","");
    var arr;
    arr = tempvin.split("");

    var serial;
    serial = tempvin.substring(1);

    var output;
    output = vin + " is an Australian ";
    if (arr[0] == "3") {
        output += "1963-68 Mk1 Roadster with manual 4-speed transmission manufactured at Pressed Metal Corporation, Enfield.";
    } else if (arr[0] == "4") {
        output += "1968 Mk2 Roadster with manual 4-speed overdrive transmission manufactured at BMC Australia's Zetland plant.";
    } else if (arr[0] == "5") {
        output += "1968-69 Mk2 Roadster with manual 4-speed overdrive transmission manufactured at BMC Australia's Zetland plant.";
    } else if (arr[0] == "6") {
        output += "1969-71 Mk2 Roadster with manual 4-speed transmission manufactured at BMC Australia's Zetland plant.";
    } else if (arr[0] == "7") {
        output += "1969-1970 Mk2 Roadster with automatic transmission manufactured at BMC Australia's Zetland plant.";
    } else if (arr[0] == "9") {
        output += "1970-72 facelift('MGBL') Roadster manufactured at BMC Australia's Zetland plant.";
    } else if (arr[0] == "1" && arr[1] == "0") {
        output += "1971-72 facelift('MGBL') Roadster whith automatic transmission manufactured at BMC Australia's Zetland plant.";
    	serial = tempvin.substring(2);
    }
    output += " Its serial number is " + serial;
    return(output);
}

function old_vin_short_decode(vin) {
    var arr;
    arr = vin.split("");
    var type;
    type = "roadster";
    var output;
    output = vin + " is a ";
    if (arr[0] != "G" || arr[1] != "H") {
        return("Unknown model. The first 2 characters should be 'GH' if this is an MGB");
    }
    if (arr[3] == "3") {
        output += "1962-67 Mk1 ";
    } else {
        if (arr[3] == "4") {
            output += "1968 or 1969 Mk2 ";
        } else {
            if (arr[3] == "5") {
                output += "Mk3 ";
            } else {
                return("Unknown body. The third character should be one of ND");
            }
        }
    }
    if (arr[2] == "N") {
        output += "MGB Roadster. ";
    } else {
        if (arr[2] == "D") {
            output += "MGB GT. ";
            type = "gt";
        } else {
            return("Unknown body. The third character should be one of ND");
        }
    }
    var serial;
    serial = vin.substring(4);
    serial = serial.replace("G", "");
    output += "Its serial number is " + serial;
    output += getManufactureDate(type, serial);
    return(output);
}

function v8_vin_decode(vin) {
    var arr;
    arr = vin.split("");
    var output;
    output = vin + " is a";

    var serial;
    serial = vin.substring(5);
    serial = serial.replace("G", "");
    serial = parseInt(serial);

    
    if (serial >= 95 && serial <= 2903) {
	if (serial < 2100) {
	    output += " chrome bumper"
	} else {
	    output += " rubber bumper"
	}
	output += " factory produced MGB GT V8"
    } else if (serial >= 3000 && serial <= 3999) {
	output += " registered conversion MGB GT V8"
    } else if (serial >= 4000 && serial <= 4999) {
	output += " registered conversion MGB Roadster V8"
    } else if (serial >= 5000 && serial <= 5999) {
	output += " registered Costello MGB GT V8"
    } else if (serial >= 6000 && serial <= 6999) {
	output += " registered Costello MGB Roadster V8"
    }

    if (arr[4] == "1") {
	output += " first series."
    } else {
	output += " second series."
    }
    output += " Its serial number is " + serial;
    return(output);

}

function old_vin_decode(vin) {
    var arr;
    arr = vin.split("");
    var type;
    type = "roadster";
    var output;
    output = vin + " is a ";
    if (arr[0] != "G" || arr[1] != "H") {
        return("Unknown model. The first 2 characters should be 'GH' if this is an MGB");
    }
    if (arr[3] == "5") {
        if (arr[5] == "A") {
            output += "1969 or 1970 ";
        } else {
            if (arr[5] == "B") {
                output += "1971 ";
            } else {
                if (arr[5] == "C") {
                    output += "1972 ";
                } else {
                    if (arr[5] == "D") {
                        output += "1973 ";
                    } else {
                        if (arr[5] == "E") {
                            output += "1974 ";
                        } else {
                            if (arr[5] == "F") {
                                output += "1975 ";
                            } else {
                                if (arr[5] == "G") {
                                    output += "1976 ";
                                } else {
                                    if (arr[5] == "H") {
                                        output += "1977 ";
                                    } else {
                                        if (arr[5] == "J") {
                                            output += "1978 ";
                                        } else {
                                            if (arr[5] == "L") {
                                                output += "1979 ";
                                            } else {
                                                return("Unknown year. The first sixth character should be 'ABCDEFGHGJL' for a Mk3 MGB");
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
        output += " model ";
    }
    if (arr[3] == "3") {
        output += "1962-67 Mk1 ";
    } else {
        if (arr[3] == "4") {
            output += "1968 or 1969 Mk2 ";
        } else {
            if (arr[3] == "5") {
                output += "Mk3 ";
            } else {
                return("Unknown body. The third character should be one of ND");
            }
        }
    }
    if (arr[4] == "U") {
        output += "USA Spec ";
    } else {
        if (arr[4] == "L") {
            output += "left hand drive ";
        } else {
            if (arr[4] == "R") {
                output += "right hand drive ";
            } else {
                return("Unknown market. The fifth character should be one of ULR");
            }
        }
    }
    if (arr[2] == "N") {
        output += "MGB Roadster. ";
    } else {
        if (arr[2] == "D") {
            output += "MGB GT. ";
            type = "gt";
        } else {
            return("Unknown body. The third character should be one of ND");
        }
    }

    var serial;

    if (arr[3] != "5") {
    	serial = vin.substring(5);
    } else {
    	serial = vin.substring(6);
    }
    serial = serial.replace("G", "");
    output += "Its serial number is " + serial;
    output += getManufactureDate(type, serial);
    return(output);
}

function new_vin_decode(vin) {
    var arr;
    arr = vin.split("");
    var type;
    type = "roadster";
    var output;
    output = vin + " is a ";
    if (arr[0] != "G" || arr[1] != "V") {
        return("Unknown model. The first 2 characters should be 'GV' if this is an MGB");
    }
    if (arr[2] == "A") {
        output += "right hand drive Roadster ";
    } else {
        if (arr[2] == "G") {
            output += "right hand drive GT ";
            type = "gt";
        } else {
            if (arr[2] == "J") {
                output += "Japanese specification Roadster ";
            } else {
                if (arr[2] == "L") {
                    output += "Canadian specification Roadster ";
                } else {
                    if (arr[2] == "V") {
                        output += "North American specification Roadster ";
                    } else {
                        if (arr[2] == "Z") {
                            output += "Californian specification Roadster ";
                        } else {
                            return("Unknown specification. Third character should be one of AGJLVZ");
                            return;
                        }
                    }
                }
            }
        }
    }
    if (arr[3] != "D" && arr[3] != "E") {
        return("Unknown body style. Fourth character should be one of DE");
    }
    if (arr[4] == "J") {
        output += "with an 1800cc 4 cylinder B series engine ";
    } else {
        return("Unknown engine size. Fifth character should be one of J");
    }
    if (arr[5] == "1" || arr[5] == "2") {
        output += "and a 4 speed manual gearbox. ";
    } else {
        return("Unknown steering and transmission. Sixth character should be one of 12");
    }
    if (arr[6] == "A") {
        output += "It is a 1980 model ";
    } else {
        return("Unknown model year. Seventh character should be one of A");
    }
    if (arr[7] == "G") {
        output += "made at Abingdon, UK. ";
    } else {
        return("Unknown assembly plant. Eighth character should be one of G");
    }
    output += "Its serial number is " + vin.substring(8);
    output += getManufactureDate(type, vin.substring(8));
    return(output);
}

function getManufactureDate(type, serial) {
	if (type == "gt") {
		return getManufactureDateGT(parseInt(serial));
	} else {
		return getManufactureDateRoadster(parseInt(serial));
	}
}

function getManufactureDateGT(serial) {
    var end;
    end = "end of production";
    var ary;
    ary = {
        71933: "Sep 65",
        77774: "Jan 66",
        113658: "Jan 67",
        137795: "Oct 67",
        139471: "Nov 67",
        139800: "Jan 68",
        158231: "Nov 68",
        165382: "Jan 69",
        187841: "Sep 69",
        195915: "Jan 70",
        217910: "Aug 70",
        219002: "Aug 70",
        233466: "Jan 71",
        256646: "Aug 71",
        258004: "Aug 71",
        269271: "Jan 72",
        294250: "Aug 72",
        296001: "Aug 72",
        310578: "Jan 73",
        327990: "Aug 73",
        328801: "Aug 73",
        338535: "Jan 74",
        360069: "Sep 74",
        361001: "Sep 74",
        367818: "Dec 74",
        368601: "Dec 74",
        369069: "Jan 75",
        380574: "Aug 75",
        391501: "Nov 75",
        394663: "Jan 76",
        406357: "Jun 76",
        410351: "Jun 76",
        422728: "Jan 77",
        445979: "Sep 77",
        447036: "Sep 77",
        455283: "Jan 78",
        469149: "Jun 78",
        471036: "Jun 78",
        483820: "Jan 79",
        497613: "Jun 79",
        501036: "Jun 79",
        508070: "Jan 80",
        523002: "Oct 80"
    };
    var keys = Object.keys(ary).sort(function(a, b){return b-a});
    for (var i = 0; i < keys.length; i++) {
	var key = keys[i];
        var value;
        value = ary[key];
        if (key < serial) {
            return(" and was manufactured sometime between " + value + " and " + end);
        }
        end = value;
    }
    return(".");
}

function getManufactureDateRoadster(serial) {
    var end;
    end = "end of production";
    var ary;
    ary = {
        101: "May 62",
        4619: "Jan 63",
        27927: "Jan 64",
        54469: "Jan 65",
        79362: "Jan 66",
        111418: "Jan 67",
        138360: "Oct 67",
        138401: "Nov 67",
        138961: "Jan 68",
        158371: "Sep 68",
        165721: "Jan 69",
        187170: "Oct 69",
        196222: "Jan 70",
        218651: "Aug 70",
        219001: "Aug 70",
        232725: "Jan 71",
        254942: "Aug 71",
        258001: "Aug 71",
        268645: "Jan 72",
        293525: "Aug 72",
        294251: "Aug 72",
        307716: "Jan 73",
        327741: "Aug 73",
        328101: "Aug 73",
        338744: "Jan 74",
        359169: "Sep 74",
        360301: "Sep 74",
        367647: "Dec 74",
        367901: "Dec 74",
        368082: "Jan 75",
        386267: "Aug 75",
        386601: "Aug 75",
        393834: "Jan 76",
        409401: "Jun 76",
        410001: "Jun 76",
        424714: "Jan 77",
        444499: "Sep 77",
        447001: "Sep 77",
        455670: "Jan 78",
        468880: "Jun 78",
        471001: "May 78",
        485110: "Jan 79",
        500904: "Dec 79",
        501001: "Jun 79",
        507309: "Jan 80",
        523001: "Oct 80"
    };
    var keys = Object.keys(ary).sort(function(a, b){return b-a});
    for (var i = 0; i < keys.length; i++) {
	var key = keys[i];
        var value;
        value = ary[key];
        if (key < serial) {
            return(" and was manufactured sometime between " + value + " and " + end);
        }
        end = value;
    }
    return(".");
}
