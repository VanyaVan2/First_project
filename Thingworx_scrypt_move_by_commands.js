switch(me.counter){
	//while first start
	case 0: me.Grip = 0; me.counter = 1; result = {"X1" : me.PosX, "Y1" : me.PosY, "L1" : me.LightColorCode, "G1" : me.Grip}; break;
	//sourse zone 1
	case 1: me.PosX = 160; me.PosY = 160; me.LightColorCode = 1; me.counter = 9; me.LastCase = 1; result = {"X1" : me.PosX, "Y1" : me.PosY, "L1" : me.LightColorCode, "G1" : me.Grip}; break;
	//sourse zone 2
	case 2: me.PosX = 205; me.PosY = 175; me.LightColorCode = 1; me.counter = 9; me.LastCase = 2; result = {"X1" : me.PosX, "Y1" : me.PosY, "L1" : me.LightColorCode, "G1" : me.Grip}; break; 
	//sourse zone 3 
	case 3: me.PosX = 167; me.PosY = 240; me.LightColorCode = 1; me.counter = 9; me.LastCase = 3; result = {"X1" : me.PosX, "Y1" : me.PosY, "L1" : me.LightColorCode, "G1" : me.Grip}; break;
	//sourse zone 4 
	case 4: me.PosX = 198; me.PosY = 250; me.LightColorCode = 1; me.counter = 9; me.LastCase = 4; result = {"X1" : me.PosX, "Y1" : me.PosY, "L1" : me.LightColorCode, "G1" : me.Grip}; break;
	//push zone 1
	case 5: me.PosX = 70; me.PosY = 170; me.LightColorCode = 1; me.counter = 10; me.LastCase = 5; result = {"X1" : me.PosX, "Y1" : me.PosY, "L1" : me.LightColorCode, "G1" : me.Grip}; break;
	//push zone 2
	case 6:
	//push zone 3
	case 7:
	//push zone 4
	case 8:
	//take object
	case 9: me.Grip = 1; me.LightColorCode = 1; //if we need to grip smth  
		switch(me.LastCase){
			case 1: me.counter = 6; break;
			case 2: me.counter = 8; break;
			case 3: me.counter = 5; break;
			case 4: me.counter = 7; break;
			case 5: me.counter = 4; break;
			case 6: me.counter = 2; break;
			case 7: me.counter = 11; break;
			case 8: me.counter = 3; break;
		}
		result = {"X1" : me.PosX, "Y1" : me.PosY, "L1" : me.LightColorCode, "G1" : me.Grip}; 
		break;
	//drop object
	case 10:
	default:
}