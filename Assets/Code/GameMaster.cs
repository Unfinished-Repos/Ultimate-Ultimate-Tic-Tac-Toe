using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameMaster : MonoBehaviour {
	public RectTransform Game_Area;
	public RectTransform Background;
	int Game_Arena_Max;
	public GameObject Cell;
	public GameObject Line;
	int Ultimate_Quantity = 2; //Infinite Power!

	// Use this for initialization
	void Start () {
		Game_Arena_Max = (int)(Game_Area.rect.height < Game_Area.rect.width ? Game_Area.rect.height : Game_Area.rect.width);
		Background.sizeDelta = new Vector2(Game_Arena_Max, Game_Arena_Max);
		//Creating the cells
		Creating_Arena();
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void Creating_Arena () {
		int Cell_Row_Total = (int)Mathf.Sqrt(Mathf.Pow(9, Ultimate_Quantity + 1));
		int Cell_Column_Total = Cell_Row_Total;
		int Line_Thicc_Max = (int)Mathf.Pow(2, Ultimate_Quantity + 1);
		//int Line_Total = (int)(6 * Mathf.Pow(3, Ultimate_Quantity));
		int Line_Total = 2;
		for (int i = 0; i < Ultimate_Quantity; i++) {
			Line_Total = (Line_Total * 3) + 2;
		}

		/*int Total_Thicc = 0;
		float Cell_Width = (Game_Area.rect.width - Total_Thicc) / Cell_Row_Total;
		float Cell_Height = (Game_Area.rect.height - Total_Thicc) / Cell_Column_Total;
		for (int Row_Current = 0; Row_Current < Cell_Row_Total; Row_Current++) {
			for (int Column_Current = 0; Column_Current < Cell_Column_Total; Column_Current++) {
				GameObject Clone = Instantiate(Cell, new Vector3(0, 0, 0), Quaternion.identity);
				Clone.name = "Clone " + (Row_Current + 1) + "-" + (Column_Current + 1);
				Clone.transform.SetParent(Game_Area.transform);
				Clone.GetComponent<RectTransform>().localScale = new Vector3(1, 1, 1);
				Clone.GetComponent<RectTransform>().sizeDelta = new Vector3(Cell_Width, Cell_Height, 1);
				float Cell_Position_x = (Cell_Width * Row_Current) - ((Game_Area.rect.width - Clone.GetComponent<RectTransform>().sizeDelta.x) / 2);
				float Cell_Position_y = (Cell_Height * Column_Current) - ((Game_Area.rect.height - Clone.GetComponent<RectTransform>().sizeDelta.y) / 2);
				Clone.transform.localPosition = new Vector3(Cell_Position_x, Cell_Position_y, 0);
			}
		}*/

		int Line_Thicc_Current = 1;
		for (int Line_Current = 1; Line_Current <= Line_Total; Line_Current++) {
			if (Line_Current / 3.0f == (float)Mathf.Round(Line_Current / 3.0f)) { //On 3rd number
				Line_Thicc_Current = Find_Potential(Line_Current, 2);
			}else {
				Line_Thicc_Current = 1;
			}

			/*int Line_Thicc_Aesthetic_Max = 5;
			for (int i = Line_Thicc_Current; i > 1; i = i / 2) { //Artificial aethetic thiccness
				Line_Thicc_Aesthetic_Max = Line_Thicc_Aesthetic_Max * 2;
			}
			Line_Creation(Line_Thicc_Aesthetic_Max, Line_Current, Line_Total, Game_Arena_Max); */
			Line_Creation(Line_Thicc_Current, Line_Current, Line_Total, Game_Arena_Max);
		}
	}

	static int Find_Potential (int Line_Current, int Level) {
		for (int i = Line_Current; i > 0; i++) {
			if (Line_Current / Mathf.Pow(3.0f, Level) == (float)Mathf.Round(Line_Current / Mathf.Pow(3.0f, Level)) && Line_Current / Mathf.Pow(3.0f, Level) >= 1) {
				Level += 1;
			}else {
				break;
			}
		}
		return (int)Mathf.Pow(2, Level - 1);
	}

	void Line_Creation (int Line_Thicc, int Line_Current, int Line_Total, int Game_Arena_Max) { //Not equal
		GameObject Clone_Horizontal = Instantiate(Line, new Vector3(0, 0, 0), Quaternion.identity);
		Clone_Horizontal.name = "Horizontal Line #" + Line_Current;
		Clone_Horizontal.transform.SetParent(Game_Area.transform);
		Clone_Horizontal.GetComponent<RectTransform>().localScale = new Vector3(1, 1, 1);
		Clone_Horizontal.GetComponent<RectTransform>().sizeDelta = new Vector3(Line_Thicc, Game_Arena_Max, 1);
		Clone_Horizontal.transform.localPosition = new Vector3((Game_Arena_Max / (Line_Total + 1.0f)) * (Line_Current) - (Game_Arena_Max / 2), 0, 0);
		GameObject Clone_Vertical = Instantiate(Line, new Vector3(0, 0, 0), Quaternion.identity);
		Clone_Vertical.name = "Vertical Line #" + Line_Current;
		Clone_Vertical.transform.SetParent(Game_Area.transform);
		Clone_Vertical.GetComponent<RectTransform>().localScale = new Vector3(1, 1, 1);
		Clone_Vertical.GetComponent<RectTransform>().sizeDelta = new Vector3(Game_Arena_Max, Line_Thicc, 1);
		Clone_Vertical.transform.localPosition = new Vector3(0, (Game_Arena_Max / (Line_Total + 1.0f)) * (Line_Current) - (Game_Arena_Max / 2), 0); 
	}
}