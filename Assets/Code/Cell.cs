using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Cell : MonoBehaviour {
	bool Marked = false;
	string Owner = " ";

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void Mark () {
		if (Marked == false && this.gameObject.name == "CAN BE CLICKED") {
			Owner = PlayerPrefs.GetString("Current Turn");
			Marked = true;
		}
	}
}
