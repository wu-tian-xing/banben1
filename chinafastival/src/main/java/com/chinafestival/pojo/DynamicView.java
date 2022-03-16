package com.chinafestival.pojo;


public class DynamicView {

  private String u_name;
  private String headphoto;
  private int d_id;
  private String details;
  private String picture;
  private String datetime;
  private String user_id;

  @Override
  public String toString() {
    return super.toString();
  }

  public DynamicView(String u_name, String headphoto, int d_id, String details, String picture, String datetime, String user_id) {
    this.u_name = u_name;
    this.headphoto = headphoto;
    this.d_id = d_id;
    this.details = details;
    this.picture = picture;
    this.datetime = datetime;
    this.user_id = user_id;
  }

  public DynamicView() {
  }

  public String getU_name() {
    return u_name;
  }

  public void setU_name(String u_name) {
    this.u_name = u_name;
  }

  public String getHeadphoto() {
    return headphoto;
  }

  public void setHeadphoto(String headphoto) {
    this.headphoto = headphoto;
  }

  public int getD_id() {
    return d_id;
  }

  public void setD_id(int d_id) {
    this.d_id = d_id;
  }

  public String getDetails() {
    return details;
  }

  public void setDetails(String details) {
    this.details = details;
  }

  public String getPicture() {
    return picture;
  }

  public void setPicture(String picture) {
    this.picture = picture;
  }

  public String getDatetime() {
    return datetime;
  }

  public void setDatetime(String datetime) {
    this.datetime = datetime;
  }

  public String getUser_id() {
    return user_id;
  }

  public void setUser_id(String user_id) {
    this.user_id = user_id;
  }
}
