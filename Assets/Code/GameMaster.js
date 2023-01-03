#pragma strict
import UnityEngine.EventSystems; //Needed for Line 39-40

//SCORING TEXT
var Player1 : UnityEngine.UI.Text;
var Tie : UnityEngine.UI.Text;
var Player2 : UnityEngine.UI.Text;
var Player1AS : UnityEngine.UI.Text;
var TieAS : UnityEngine.UI.Text;
var Player2AS : UnityEngine.UI.Text;

//BOX TEXT
var Box1 : UnityEngine.UI.Text;
var Box2 : UnityEngine.UI.Text;
var Box3 : UnityEngine.UI.Text;
var Box4 : UnityEngine.UI.Text;
var Box5 : UnityEngine.UI.Text;
var Box6 : UnityEngine.UI.Text;
var Box7 : UnityEngine.UI.Text;
var Box8 : UnityEngine.UI.Text;
var Box9 : UnityEngine.UI.Text;

var CurrentPlayer : String; //Who's turn is it again?
var TimesPressed : int; //If it is 9 then its gameover

function Start () {
	PlayerPrefs.DeleteAll();
	Wipe();
}

function Update () {
	Box1.text = PlayerPrefs.GetString("Box 1");
	Box2.text = PlayerPrefs.GetString("Box 2");
	Box3.text = PlayerPrefs.GetString("Box 3");
	Box4.text = PlayerPrefs.GetString("Box 4");
	Box5.text = PlayerPrefs.GetString("Box 5");
	Box6.text = PlayerPrefs.GetString("Box 6");
	Box7.text = PlayerPrefs.GetString("Box 7");
	Box8.text = PlayerPrefs.GetString("Box 8");
	Box9.text = PlayerPrefs.GetString("Box 9");
	Player1.color = Color.gray;
	Tie.color = Color.gray;
	Player2.color = Color.gray;
	Player1AS.color = Color.gray;
	TieAS.color = Color.gray;
	Player2AS.color = Color.gray;
	if (CurrentPlayer == "X") {
		Player1.color = Color.white;
		Player1AS.color = Color.white;
	}else if (CurrentPlayer == "O") {
		Player2.color = Color.white;
		Player2AS.color = Color.white;
	}else {
		Player1.color = Color.white;
		Tie.color = Color.white;
		Player2.color = Color.white;
		Player1AS.color = Color.white;
		TieAS.color = Color.white;
		Player2AS.color = Color.white;
	}
	if (Input.GetMouseButtonDown(0) && CurrentPlayer == "") {
		Wipe();
	}else if (Input.GetMouseButtonDown(0)) {
		Mark();
	}
}

function Mark () {
	if (PlayerPrefs.GetString(EventSystem.current.currentSelectedGameObject.name) == "" && CurrentPlayer != "") {
		PlayerPrefs.SetString(EventSystem.current.currentSelectedGameObject.name, CurrentPlayer);
		TimesPressed++;
		Checker();
		if (CurrentPlayer == "X") {
			CurrentPlayer = "O";
		}else if (CurrentPlayer == "O") {
			CurrentPlayer = "X";
		}
	}
}

function Wipe () {
	PlayerPrefs.SetString("Box 1", null);
	PlayerPrefs.SetString("Box 2", null);
	PlayerPrefs.SetString("Box 3", null);
	PlayerPrefs.SetString("Box 4", null);
	PlayerPrefs.SetString("Box 5", null);
	PlayerPrefs.SetString("Box 6", null);
	PlayerPrefs.SetString("Box 7", null);
	PlayerPrefs.SetString("Box 8", null);
	PlayerPrefs.SetString("Box 9", null);
	TimesPressed = 0;
	var RandoNumber : int = Random.Range(1, 3);
	if (RandoNumber == 1) {
		CurrentPlayer = "X";
	}else if (RandoNumber == 2) {
		CurrentPlayer = "O";
	}else {
		Debug.Log("ERROR SELECTING PLAYER"); //FUCK!!!
	}
}

function Checker () {
	if (PlayerPrefs.GetString("Box 1") == PlayerPrefs.GetString("Box 2") && PlayerPrefs.GetString("Box 1") == PlayerPrefs.GetString("Box 3") && PlayerPrefs.GetString("Box 1") != "") {
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
			Debug.Log("It is the line above that doesnt work!");
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}else if (PlayerPrefs.GetString("Box 4") == PlayerPrefs.GetString("Box 5") && PlayerPrefs.GetString("Box 4") == PlayerPrefs.GetString("Box 6") && PlayerPrefs.GetString("Box 4") != "") {
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}else if (PlayerPrefs.GetString("Box 7") == PlayerPrefs.GetString("Box 8") && PlayerPrefs.GetString("Box 7") == PlayerPrefs.GetString("Box 9") && PlayerPrefs.GetString("Box 7") != "") {
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}else if (PlayerPrefs.GetString("Box 1") == PlayerPrefs.GetString("Box 4") && PlayerPrefs.GetString("Box 1") == PlayerPrefs.GetString("Box 7") && PlayerPrefs.GetString("Box 1") != "") {
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}else if (PlayerPrefs.GetString("Box 2") == PlayerPrefs.GetString("Box 5") && PlayerPrefs.GetString("Box 2") == PlayerPrefs.GetString("Box 8") && PlayerPrefs.GetString("Box 2") != "") {
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}else if (PlayerPrefs.GetString("Box 3") == PlayerPrefs.GetString("Box 6") && PlayerPrefs.GetString("Box 3") == PlayerPrefs.GetString("Box 9") && PlayerPrefs.GetString("Box 3") != "") { //4 warbotz to the core 
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}else if (PlayerPrefs.GetString("Box 1") == PlayerPrefs.GetString("Box 5") && PlayerPrefs.GetString("Box 1") == PlayerPrefs.GetString("Box 9") && PlayerPrefs.GetString("Box 1") != "") {
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}else if (PlayerPrefs.GetString("Box 3") == PlayerPrefs.GetString("Box 6") && PlayerPrefs.GetString("Box 3") == PlayerPrefs.GetString("Box 7") && PlayerPrefs.GetString("Box 3") != "") {
		if (CurrentPlayer == "X") {
			Player1AS.text = (int.Parse(Player1AS.text) + 1).ToString();
		}else if (CurrentPlayer == "O") {
			Player2AS.text = (int.Parse(Player2AS.text) + 1).ToString();
		}
		CurrentPlayer = "";
	}

	if (TimesPressed == 9 && CurrentPlayer != "") {
		CurrentPlayer = "";
		TieAS.text = (int.Parse(TieAS.text) + 1).ToString();
	}
}