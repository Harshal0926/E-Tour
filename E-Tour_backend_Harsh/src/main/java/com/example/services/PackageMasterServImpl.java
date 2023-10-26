package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.PackageMaster;
//import com.example.entities.SubSector;
import com.example.repositories.PackageMasterRepository;

@Service
public class PackageMasterServImpl implements PackageMasterService {
    @Autowired
    PackageMasterRepository repository;
	
    @Override
	public List<PackageMaster> getPackages() {
	
		return repository.findAll();
	}

	@Override
	public List<PackageMaster> getPackages(int id) {
		return repository.findpackagesByIds(id);
	}

	@Override
	public void delete(int id) {
		repository.deleteById(id);;
	}
	
//	@Override
//    public List<PackageMaster> getSubSectorsById(int subSectorId) {
//        return repository.findBySubSectorId(subSectorId); 
//    }

	@Override
	public void addPackages(PackageMaster p) {
		repository.save(p);
	}

	@Override
	public void update(PackageMaster packages, int id) {
		//repository.update()
	}

}
