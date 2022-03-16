
package com.chinafestival.pojo;


public class FestivalAction {

  private int id;
  private String title;
  private String details;
  private String details1;
  private String pucture;
  private String writer;
  private String times;
  private int festival_id;
  private String actions;

  @Override
  public String toString() {
    return super.toString();
  }

  public FestivalAction(int id, String title, String details, String details1, String pucture, String writer, String times, int festival_id, String actions) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.details1 = details1;
    this.pucture = pucture;
    this.writer = writer;
    this.times = times;
    this.festival_id = festival_id;
    this.actions = actions;
  }

  public String getDetails1() {
    return details1;
  }

  public void setDetails1(String details1) {
    this.details1 = details1;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDetails() {
    return details;
  }

  public void setDetails(String details) {
    this.details = details;
  }

  public String getPucture() {
    return pucture;
  }

  public void setPucture(String pucture) {
    this.pucture = pucture;
  }

  public String getWriter() {
    return writer;
  }

  public void setWriter(String writer) {
    this.writer = writer;
  }

  public String getTimes() {
    return times;
  }

  public void setTimes(String times) {
    this.times = times;
  }

  public int getFestival_id() {
    return festival_id;
  }

  public void setFestival_id(int festival_id) {
    this.festival_id = festival_id;
  }

  public String getActions() {
    return actions;
  }

  public void setActions(String actions) {
    this.actions = actions;
  }


  }

