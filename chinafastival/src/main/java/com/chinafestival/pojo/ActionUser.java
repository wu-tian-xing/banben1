package com.chinafestival.pojo;


public class ActionUser {

  private int id;
  private int a_id;
  private String u_id;

  public ActionUser(int id, int a_id, String u_id) {
    this.id = id;
    this.a_id = a_id;
    this.u_id = u_id;
  }

  public ActionUser() {
  }

  @Override
  public String toString() {
    return "ActionUser{}";
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getA_id() {
    return a_id;
  }

  public void setA_id(int a_id) {
    this.a_id = a_id;
  }

  public String getU_id() {
    return u_id;
  }

  public void setU_id(String u_id) {
    this.u_id = u_id;
  }
}
