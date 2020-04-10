package com.example.demo.resources;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebappController {
	
	@RequestMapping("/home")
	public String home() {
		return "this is HOme";
	}
	
	@RequestMapping("/list")
	public List<String> fileList(){
		List<String> fileNames = new ArrayList<String>();
		File folder;
		File[] listOfFiles;
		folder = new File("./src/main/resources/static/imagestt");
		listOfFiles = folder.listFiles();
		if(listOfFiles==null) {
			folder = new File("./images");
			listOfFiles = folder.listFiles();
		}
			
		System.out.println("listOfFiles");
		System.out.println(listOfFiles);
		for (int i = 0; i < listOfFiles.length; i++) {
		  if (listOfFiles[i].isFile()) {
		    System.out.println("File " + listOfFiles[i].getName());
		    fileNames.add(listOfFiles[i].getName());
		  } 
		  else if (listOfFiles[i].isDirectory()) {
		    System.out.println("Directory " + listOfFiles[i].getName());
		  }
		}
		
		
//		return Arrays.asList("hello"," World"," There");
		return fileNames;
		
	}
}




