
public class Bat extends Mammal {
	public Bat() {
		super();
		this.setEnergy(getEnergy()+200);
	}
	
	public void fly() {
		this.setEnergy(getEnergy()-50);
		System.out.println("Bat is flying \n");		
	}
	public void eatHumans() {
		this.setEnergy(getEnergy()+25);
		System.out.println("Bat ate a human and smiling like a villain \n");		
	}
	public void attackTown() {
		this.setEnergy(getEnergy()-100);
		System.out.println("Bat made a mess in town \n");		
	}
}
