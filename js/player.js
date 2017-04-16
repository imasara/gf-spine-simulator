var player = {
	character : ["357", "56-1type", "56-1type_401", "56typeR", "59type", "59type_407", "63type","64type", "64type_104", "64type_11", "6P62", "79type", "88type", "92type", "95type", "95type_405", "97type", "97type_406", "97typeS", "98K", "9A91", "AAT52", "Aegis", "AEK999", "AK47_501", "Alchemist", "APS", "ARX160", "ASVAL", "BM59", "Boss10", "Boss8", "Boss9", "BrenMK", "BrenTen", "Brute", "C96", "CZ805","Destroyer", "Dinergate", "DP28", "Dragoon", "Drone", "EVO3", "Excutioner", "ExcutionerElite", "F2000", "FAMAS", "FG42", "FMG9", "FN49", "FN57", "FNFAL", "FNFAL_308", "FNFAL_607", "FNFNC", "FNP9", "G11", "G11_9", "G28", "G3", "G36", "G36C", "G41", "G43", "Glock17", "Grizzly", "Grizzly_105", "Guard", "HK416", "Hunter","HunterElite", "IDW", "Intruder", "Ithaca37", "IWS2000", "Jaeger", "Jaguar", "Jupiter", "Kalina", "Kalina_angle", "Kalina_president", "KP31", "KP31_310", "KS23", "KSG", "L85A1", "liondance", "LWMMG", "M1", "M14", "M14_303", "M16A1", "M1873", "M1873_301", "M1887", "M1891", "M1895", "M1903", "M1903_302", "M1903_5", "M1911", "M1918", "M1918_102", "M1919A4", "M1919A4_106", "M1919A4_7", "M1928A1", "M1A1", "M21", "M21_304", "M249SAW", "M2HB", "M3", "m45", "m45_4", "M4A1", "M500", "M590", "M60", "M9", "M950A", "M99", "M99_404", "MAB38", "MAC10", "Manticore", "MG3", "MG34", "MG4", "MG42", "MG5", "MG5_309", "MicroUZI", "MicroUZI_101", "Mk23", "Mk23_8", "MK48", "MLEMK1", "MLEMK1_10", "MLEMK1_604", "MP40", "MP446", "MP446_103", "MP446_402", "MP5", "MP5_3", "MT9", "NEGEV", "Nemeum", "NTW20", "NTW20_307", "NZ75", "NZ75_403", "OC44", "OTs12", "OTs14", "P08", "P38", "P7", "P7_606","P99", "PK", "PK_605", "PM", "PM_1", "PP19", "PP2000", "PP90", "PPK", "PPS43", "PPsh41", "PPsh41_602", "Prowler", "PSG1", "PSM", "PTRD", "PTRD_408", "R357", "R56-1type_401", "R59type", "R59type_407", "R64type", "R64type_104", "R64type_11","R6P62", "R88type", "R92type", "R95type", "R95type_405", "R97type", "R97type_406", "R97typeS", "R9A91", "RAAT52", "RAK47_501", "RBrenMK", "RBrenTen", "RC96", "RDinergate_chm1", "RDinergate_chm2", "RDP28", "RFAMAS", "RFG42", "RFMG9", "RFN57", "RFNFNC", "RFNP9", "RG11", "RG11_9", "RG3", "RG36", "RG36C", "RG43", "Rghost", "RGlock17", "RGrizzly", "RGrizzly_105", "RHK416", "RIDW", "Ripper", "RIthaca37", "RKP31", "RKP31_310", "RKS23", "RKSG", "RL85A1", "RLWMMG", "RM1", "RM14", "RM14_303", "RM16A1", "RM1873", "RM1873_301", "RM1887", "RM1891", "RM1903_302", "RM1903_5", "RM1911", "RM1918", "RM1918_102", "RM1919A4", "RM1919A4_106", "RM1928A1", "RM1A1", "RM21", "RM21_304", "RM249SAW", "RM2HB", "RM3", "Rm45", "Rm45_4", "RM4A1", "RM500", "RM590", "RM60", "RM9", "RM950A", "RM99", "RMAB38", "RMAC10", "RMB93", "RMG3", "RMG34", "RMG4", "RMG42", "RMG5", "RMG5_309", "RMicroUZI", "RMicroUZI_101", "RMk23", "RMK48", "RMLEMK1", "RMP40", "RMP446", "RMP446_103", "RMP5","RMP5_3", "RMT9", "RNEGEV", "RNTW20", "RNTW20_307", "RNZ75", "RO635", "ROC44", "ROTs12", "ROTs14", "RP08", "RP38", "RP7", "RP99", "RPD", "RPK", "RPM", "RPM_1","RPP19", "RPP2000", "RPP90", "RPPK", "RPPS43", "RPPsh41", "RPSG1", "RPSM", "RPTRD", "RPTRD_408", "RRMB93", "RRO635", "RRPD", "RShipka", "RSKS", "RSpectreM4", "RSPP1", "RSPS", "RSR3MP", "RSSG69", "RStenMK2", "RStenMK2_603", "RSTG44", "RSuperSass", "RSV98", "RSV98_502", "RSVD", "RSVD_305", "RSVT38", "RTT33", "RTT33_601", "RUMP45", "RUMP45_410", "Rump9", "Rump9_409", "RUSPCompact", "RVector", "RVector_2", "RVZ61", "RWA2000_306", "RWA2000_6", "RWelrod", "RWelrod_411", "RZ62", "Scarecrow", "Scouts", "Shipka", "SKS", "SpectreM4", "SPP1", "SPS", "SR3MP", "SSG69", "StenMK2", "StenMK2_603", "STG44", "Striker", "SuperSass", "SV98", "SV98_502", "SVD", "SVD_305", "SVT38", "Tarantula", "TT33", "TT33_601", "Type100", "UMP45", "UMP45_410", "ump9", "ump9_409", "USPCompact", "Vector", "Vector_2", "Vespid", "VZ61", "WA2000_306", "WA2000_6", "Weaver", "WeaverElite", "Welrod", "Welrod_411", "Z62"],

	background : ["Airport", "Bridge", "Forest", "IceLake", "Sonw", "Street", "zhiwu"],

	spine : [],

	load : function(name){
		if(!player.spine[name]){
			var path = "character/" + name + ".json";
			PIXI.loader.add(name, path).load(function(loader, resources){
				player.spine[name] = resources[name].spineData;
				preview.changeCanvas(name);
			});
		}else{
			preview.changeCanvas(name);
		}
	}

};