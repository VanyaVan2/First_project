#ifndef Thingworx_h
#define Thingworx_h

#include "Arduino.h"

class Thingworx
{
	public:
		Thingworx(char* ThingName, char* ServiceName, char* appKey);
		void WiFi(char* ssid, char* pass, char* controllerName); // If microcontroller use WiFi connection
		void ServiceIn(int sz, ...);
		void ServiceInShow();
		void SentDDataToServer();
	private:
		char* _ThingName;
		char* _ServiceName;
		char* _appKey;
		char* _ssid;
		char* _pass;
		char* _controllerName;
		char **a;
		int n;
		//added smth. to test git
};
#endif